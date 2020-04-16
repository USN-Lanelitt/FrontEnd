import React, {useState} from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import 'date-fns';
import {MuiPickersUtilsProvider, KeyboardDatePicker,} from '@material-ui/pickers';
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import {CardActions} from "@material-ui/core";
import Box from "@material-ui/core/Box";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import {useTranslation} from "react-i18next";
import axios from "axios";

//Mangler assetID, assetName og userId2!!!
//her skal fra og til dato komme opp, søke om å låne

const useStyles = makeStyles(theme => ({
    paper: {
        marginTop: theme.spacing(10),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    send: {
        margin: theme.spacing(3, 0, 2),
    },

}));
const LoanRequestSend = () => {
    const { t } = useTranslation();
    const classes = useStyles();
    const [userId, setId] = useState(sessionStorage.getItem('userId'));
    const [userId2, setId2] = useState(52);
    const [assetId, setAssetId] = useState(1);
    const [assetName, setAssetName] = useState('Laptop');
    const [textValue, setTextValue] = useState('');
    const [selectedDate, setSelectedDate] = React.useState(new Date() );
    const [selectedDate2, setSelectedDate2] = React.useState(new Date() );

    function sendMessage(message) {
        console.log("sendMessage", userId, sessionStorage.getItem('userId'));
        axios.post('/users/writeMessage/' + userId + '/' + userId2, {
            message: message
        })
            .then(result => {
                console.log(result.data);
            })
            .catch(e => console.log(e));
    }

    function sendRequest() {
        console.log("sendRequest", sessionStorage.getItem('userId'));
        axios.post('/user/'+userId+'/asset/'+assetId+'/request' , {
            startDate: selectedDate,
            endDate: selectedDate2
        }).then((response) => {
            if (response.status === 200) {
                console.log(response.data);
            }
        })
            .catch(e => console.log(e));
    }

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const handleDateChange2 = (date) => {
        setSelectedDate2(date);
    };

    const handleClick = () => {
        sendMessage(assetName+': '+textValue);
        console.log(textValue);
        sendRequest();
    };


    return (
        <Box display="flex" justifyContent="center">
            <Box width={1 / 2} height={'100%'}>
                <Card className={classes.paper}>
                    <Box borderBottom={1}>
                        <CardContent>
                            <Typography variant="h5" component="h2">
                                {t('loan-request-send.1')}
                            </Typography>

                        </CardContent>
                   </Box>
                    <Box m={4}>
                        <CardActions>
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <KeyboardDatePicker
                                    name="daypicker"
                                    margin="normal"
                                    id="date-picker-dialog"
                                    label={t('loan-request-send.2')}
                                    fullWidth
                                    format="dd.MM.yyyy"
                                    value={selectedDate}
                                    onChange={handleDateChange}
                                    KeyboardButtonProps={{
                                        'aria-label': 'change date',
                                    }}
                                />

                            </MuiPickersUtilsProvider>

                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <KeyboardDatePicker
                                    name="daypicker"
                                    margin="normal"
                                    id="date-picker-dialog"
                                    label={t('loan-request-send.3')}
                                    fullWidth
                                    format="dd.MM.yyyy"
                                    value={selectedDate2}
                                    onChange={handleDateChange2}
                                    KeyboardButtonProps={{
                                        'aria-label': 'change date',
                                    }}
                                />

                            </MuiPickersUtilsProvider>
                        </CardActions>

                    </Box>
                    <TextField
                        id="standard-multiline-static"
                        label={t('loan-request-send.4')}
                        multiline
                        rowsMax="7"
                        value={textValue}
                        onChange={e => setTextValue(e.target.value)}
                    />
                    <CardActions>
                        <Button
                            className={classes.send}
                            type="submit"
                            fullWidth variant="contained"
                            color="primary"
                            onClick={() => {
                                handleClick();
                                setTextValue('');
                            }}>
                            {t('loan-request-send.5')}
                        </Button>
                    </CardActions>

                </Card>
            </Box>
        </Box>
    );
};

export default LoanRequestSend;