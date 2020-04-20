import React from 'react';
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";
import {Box} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import CloseIcon from '@material-ui/icons/Close';
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";


const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: theme.palette.background.paper,
    },
    photo: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    },


    button: {
        display: 'flex',
        padding: '0',

    },
    top: {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: theme.spacing(2),
    },
    status: {
        padding: theme.spacing(0.5),
    },
}));


const NotificationLoanRequest = ({id, firstname, middlename, imageUrl, lastname, loanStatus, selectedDate, selectedDate2, reply}) => {
    const classes = useStyles();
    return (
        <Card className={classes.paper}>

            <CardContent>
                <Grid className={classes.top} zeroMinWidth justify="flex-start">

                        <Avatar className={classes.photo} alt="Remy Sharp" src={imageUrl}/>
                        <Box display="flex" flexDirection="column">
                            <Typography gutterBottom variant="h5" component="h2" display={"inline"}>
                                {firstname} {middlename} {lastname} {loanStatus} lånet
                            </Typography>
                            <Typography gutterBottom variant="subtitle1" component="h2">
                                {selectedDate} - {selectedDate2}
                            </Typography>
                        </Box>
                        <Box className={classes.status} display="flex" justifyContent="center" flexDirection="row">
                            <Button className={classes.button} onClick={reply}>
                                <CloseIcon/>
                            </Button>

                        </Box>

                </Grid>
            </CardContent>
        </Card>
    );
};

export default NotificationLoanRequest;