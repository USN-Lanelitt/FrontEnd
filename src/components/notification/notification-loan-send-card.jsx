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
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import {useTranslation} from "react-i18next";
import {Link} from "react-router-dom";

/*Laget av Mirsa*/

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        maxWidth: '40',
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

const NotificationLoanSendtCard = ({id, firstname, middlename, imageUrl, lastname, selectedDate, selectedDate2, reply}) => {
    const classes = useStyles();
    const { t } = useTranslation();
    return (
        <React.Fragment>
            <StyledMenuItem  component = {Link} to={"/Notification/"}>
                <Divider variant="li"/>
                <Grid className={classes.list}>
                    <Box mt={1}>
                        <ListItemAvatar>
                            <Avatar className={classes.photo} ml={2} alt="Remy Sharp" src={"AssetImages/"+imageUrl}/>
                        </ListItemAvatar>
                    </Box>
                    <Box display='flex' flexDirection="column">
                        <Box display='flex' flexDirection="column" >
                            <ListItemText gutterBottom variant="h4" component="h7" display={"flex"}>
                                Forespørsel sendt til
                            </ListItemText>  <ListItemText gutterBottom variant="h4" component="h7" display={"flex"}>
                                {firstname} {middlename} {lastname}
                            </ListItemText>
                        </Box>
                        <Box display='flex' flexDirection="row">
                            <Typography gutterBottom variant="subtitle1" component="h2">
                                {selectedDate} - {selectedDate2}
                            </Typography>
                        </Box>
                    </Box>
                </Grid>
                <Divider variant="li"/>
                <ListItemSecondaryAction className={classes.button}>
                    <Button onClick={reply}>
                        <CloseIcon/>
                    </Button>
                </ListItemSecondaryAction>


            </StyledMenuItem>
            <Divider variant="li"/>

        </React.Fragment>


    );
};

export default NotificationLoanSendtCard;