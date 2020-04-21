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
import Avatar from "@material-ui/core/Avatar";
import {Link} from "react-router-dom";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";


const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        maxWidth: '10ch',
        width: '100%',


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
        padding: theme.spacing(2),


    },
    button: {
        display: 'flex',
        padding: '0',

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

const LoanRequestNotification = ({id, firstname, middlename, imageUrl, lastname, loanStatus, selectedDate, selectedDate2,reply}) => {
    const classes = useStyles();
    return (
       /* <React.Fragment>
            <Box>
                <Grid className={classes.list}>
                    <Box>
                        <Avatar className={classes.photo} alt="Remy Sharp" src={imageUrl}/>
                        <Box display='flex' flexDirection="row" margin='10px'>
                            <Typography gutterBottom variant="h7" component="h7" display={"inline"}>
                                {firstname} {middlename} {lastname} {loanStatus} lånet
                            </Typography>
                            <Button className={classes.button} onClick={reply}>
                                <CloseIcon/>
                            </Button>
                        </Box>
                        <Box display='flex' flexDirection="column">
                            <Typography gutterBottom variant="subtitle1" component="h2">
                                {selectedDate} - {selectedDate2}
                            </Typography>
                    </Box>
                    </Box>

                </Grid>
                <Divider variant="li"/>
            </Box>

        </React.Fragment>*/





        <React.Fragment>
            <MenuItem>
                <Divider variant = "li"/>
                <Grid className={classes.list}>
                    <ListItemAvatar>
                        <Avatar className={classes.photo} alt="Remy Sharp" src={imageUrl}/>
                    </ListItemAvatar>
                    <Box display='flex' flexDirection="column">
                    <ListItemText gutterBottom variant="h4" component="h7" display={"inline"}>
                        {firstname} {middlename} {lastname} {loanStatus} lånet
                    </ListItemText>
                    <Box display='flex' flexDirection="row">
                        <Typography gutterBottom variant="subtitle1" component="h2">
                            {selectedDate} - {selectedDate2}
                        </Typography>
                    </Box>
                        </Box>
                </Grid>
                <Divider variant = "li" />
                <ListItemSecondaryAction className={classes.button}>
                    <Button onClick={reply}>
                        <CloseIcon/>
                    </Button>
                </ListItemSecondaryAction>

            </MenuItem>
            <Divider variant = "li" />

        </React.Fragment>






















    );
};

export default LoanRequestNotification;