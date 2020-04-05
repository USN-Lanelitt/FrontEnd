import React, {useState} from 'react';
import 'date-fns';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {MuiPickersUtilsProvider, KeyboardDatePicker,} from '@material-ui/pickers';
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import {CardActions} from "@material-ui/core";

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

    const [selectedDate, setSelectedDate] = React.useState(new Date('2020-04-05'));
    const [selectedDate2, setSelectedDate2] = React.useState(new Date('2020-04-05'));

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };
    const handleDateChange2 = (date) => {
        setSelectedDate2(date);
    };

    return (
        <Card className={classes.paper}>
                <Grid>

                    <CardActions>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <KeyboardDatePicker
                                disableToolbar
                                variant="inline"
                                format="dd/MM/yyyy"
                                margin="normal"
                                id="date-picker-inline"
                                label="Låne fra: "
                                value={selectedDate}
                                onChange={handleDateChange}
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }}
                            />
                        </MuiPickersUtilsProvider>

                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <KeyboardDatePicker
                                disableToolbar
                                variant="inline"
                                format="dd/MM/yyyy"
                                margin="normal"
                                id="date-picker-inline"
                                label="Låne til: "
                                value={selectedDate2}
                                onChange={handleDateChange2}
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }}
                            />
                        </MuiPickersUtilsProvider>
                    </CardActions>

                    <CardActions>
                        <Button className={classes.send} type="submit" fullWidth variant="contained" color="primary" >
                            Send
                        </Button>
                    </CardActions>
                </Grid>

        </Card>
);
};

export default LoanRequest;