import React, {useState} from 'react';
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
import {useParams} from "react-router";
import moment from "moment";
import StatusMessage from "../profile/status-message";

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
    const [assetName, setAssetName] = useState('');
    const [textValue, setTextValue] = useState('');
    const [showStatusMessage, setShowStatusMessage] = useState(false);
    const [statusMessage, setStatusMessage] = useState("");
    const [statusMessageSeverity, setStatusMessageSeverity] = useState("info");
    const [selectedDate, setSelectedDate] = React.useState(moment().format("YYYY-MM-DD") );
    const [selectedDate2, setSelectedDate2] = React.useState(moment().format("YYYY-MM-DD") );
    const {id, assetId} = useParams();

    function sendMessage(message) {
        console.log("sendMessage", userId, sessionStorage.getItem('userId'));
        axios.post('/users/writeMessage/' + userId + '/' + id, {
            message: message
        })
            .then(result => {

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
                setShowStatusMessage(true);
                setStatusMessage("Forespørsel sendt");
                setStatusMessageSeverity("success");
            }
        })
            .catch(e => {
                console.log(e)
                setShowStatusMessage(true);
                setStatusMessage("Ups, dette gikk ikke helt etter planen!");
            });
    }


    const handleDateChange = (date) => {

        setSelectedDate(moment(date).format("YYYY-MM-DD"));
    };

    const handleDateChange2 = (date) => {

        setSelectedDate2(moment(date).format("YYYY-MM-DD"))
    };

    const handleClick = () => {
        sendMessage(assetName+': '+textValue);
        console.log(textValue);
        sendRequest();
    };




    return (
        <Box display="flex" justifyContent="center">
            <StatusMessage show={showStatusMessage} message={statusMessage} severity={statusMessageSeverity}
                           onClose={setShowStatusMessage}/>
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
