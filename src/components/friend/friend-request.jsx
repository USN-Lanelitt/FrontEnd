import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Grid from "@material-ui/core/Grid";
import MenuItem from '@material-ui/core/MenuItem';
import withStyles from "@material-ui/core/styles/withStyles";
import Button from "@material-ui/core/Button";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";

/*Laget av Mirsa*/


const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        maxWidth: '1ch',
        backgroundColor: theme.palette.background.paper,
    },

    list: {
        display: 'flex',
        padding: theme.spacing(2),
    },

    photo: {
        width: theme.spacing(5),
        height: theme.spacing(5),
    },

    Button: {
        color: 'red',
    },

    button: {
        display: 'grid',
        marginRigth: '-22px',
    },

    accepdbt: {
        color: 'Black',
    },

    dividerFullWidth: {
        margin: `5px 0 0 ${theme.spacing(2)}px`,
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

const FriendRequest = ({id, firstname, middlename, lastname, imageUrl, onDenied, onAccept}) => {
    const classes = useStyles();
    const {t} = useTranslation();

    return (
        <React.Fragment>
            <StyledMenuItem component={Link} to={"/FriendProfile/" + id}
                            style={{textDecoration: "none", color: "black"}}>
                <Divider variant="li"/>
                <Grid className={classes.list}>

                    <ListItemAvatar>
                        <Avatar className={classes.photo} alt="Remy Sharp" src={"profileImage/"+imageUrl}/>
                    </ListItemAvatar>

                    <ListItemText gutterBottom variant="h4" component="h7" display={"inline"}>
                        {firstname} {middlename} {lastname}
                    </ListItemText>
                </Grid>
                <Divider variant="li"/>
                <ListItemSecondaryAction className={classes.button}>
                    <Button className={classes.accepdbt} onClick={onAccept} size="small" color="primary">
                        {t('friendRequest.1')}
                    </Button>
                    <Button className={classes.Button} onClick={onDenied} size="small" color="primary">
                        {t('friendRequest.2')}
                    </Button>
                </ListItemSecondaryAction>


            </StyledMenuItem>
            <Divider variant="li"/>

        </React.Fragment>

    );

}


export default FriendRequest;

