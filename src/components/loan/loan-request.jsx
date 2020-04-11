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
const LoanRequest = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState();

    const handleChange = (event) => {
        setValue(event.target.value);
    };


    const [selectedDate, setSelectedDate] = React.useState(new Date() );
    const [selectedDate2, setSelectedDate2] = React.useState(new Date() );

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const handleDateChange2 = (date) => {
        setSelectedDate2(date);
    };

    return (
        <Box display="flex" justifyContent="center">
            <Box width={1 / 2} height={'100%'}>
                <Card className={classes.paper}>

                    <Box borderBottom={1}>
                        <CardContent>
                            <Typography variant="h5" component="h2">
                                Velg ønsket tidspunkt for lån:
                            </Typography>

                        </CardContent>


                    </Box>
                    <Box m={4}>
                        <CardActions>
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <KeyboardDatePicker
                                    name="birthdate"
                                    margin="normal"
                                    id="date-picker-dialog"
                                    label="Fødselsdato"
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
                                    name="birthdate"
                                    margin="normal"
                                    id="date-picker-dialog"
                                    label="Fødselsdato"
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
                        label="Send med en melding"
                        multiline
                        rowsMax="7"
                        value={value}
                        onChange={handleChange}


                    />
                    <CardActions>
                        <Button className={classes.send} type="submit" fullWidth variant="contained" color="primary">
                            Send
                        </Button>
                    </CardActions>




                </Card>
            </Box>
        </Box>
    );
};

export default LoanRequest;