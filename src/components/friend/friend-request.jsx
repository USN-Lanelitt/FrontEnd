import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import classes from "@mui-treasury/styles/cardHeader/contained/containedCardHeader.styles";
import {Box, MenuList} from "@material-ui/core";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import data from "./data";
import FriendRequestCard from "./friend-requestCard";
import Container from "@material-ui/core/Container";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import withStyles from "@material-ui/core/styles/withStyles";
import FriendCard from "./friend-card";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";

//VenneVarselListe

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        maxWidth: '36ch',
        backgroundColor: theme.palette.background.paper,
    },

    inline: {
        display: 'inline',
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
        display: 'Grid',
       padding: theme.spacing(1),
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

const FriendRequest = ({id,firstname, middlename, lastname, imageUrl}) => {
    const classes = useStyles();

    return (
        <React.Fragment>
            <StyledMenuItem>
                <Box className={classes.list}>

                    <ListItemAvatar>
                        <Avatar className={classes.photo} alt="Remy Sharp" src={imageUrl}/>
                    </ListItemAvatar>

                        <ListItemText gutterBottom variant="h6" component="h7" display={"inline"}>
                            {firstname} {middlename} {lastname}
                        </ListItemText>
                </Box>
                <Divider variant = "inset" />
                <ListItemSecondaryAction className={classes.button}>
                    <Button size="small" color="primary">
                        Godta
                    </Button>

                    <Button className={classes.Button} size="small" color="primary">
                        Avslå
                    </Button>
                </ListItemSecondaryAction>


        </StyledMenuItem>
            <Divider variant = "inset" component = "li" />

        </React.Fragment>

    );

}


export default FriendRequest;

