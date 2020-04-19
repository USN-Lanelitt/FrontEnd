import React from 'react';
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import MenuItem from "@material-ui/core/MenuItem";
import {makeStyles} from "@material-ui/core/styles";
import withStyles from "@material-ui/core/styles/withStyles";
import {Box} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import CloseIcon from '@material-ui/icons/Close';
import Button from "@material-ui/core/Button";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";


const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: theme.palette.background.paper,
    },
    photo: {
        width: theme.spacing(5),
        height: theme.spacing(5),
    },

    inline: {
        display: 'flex',

    },

    list: {
        display: 'flex',
        marginLeft: '20px',

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

const StyledMenuItem = withStyles(theme => ({
    root: {
        '&:focus': {
            backgroundColor: theme.palette.primary.main,
            '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
                color: theme.palette.common.white,
            },
        },
    },
}))(MenuItem);


const NotificationLoanRequest = ({id, firstname, middlename, imageUrl, lastname, reply}) => {
    const classes = useStyles();
    return (
        <Card className={classes.paper}>
            <Divider variant="li"/>
            <CardContent>
                <Grid className={classes.top}>
                    <Avatar className={classes.photo} alt="Remy Sharp" src={imageUrl}/>
                    <Typography gutterBottom variant="h5" component="h2">
                        {firstname} {middlename} {lastname}
                    </Typography>
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