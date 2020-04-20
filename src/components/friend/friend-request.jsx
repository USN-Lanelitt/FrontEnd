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
import CardActionArea from "@material-ui/core/CardActionArea";

//VenneVarselListe

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        maxWidth: '10ch',
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
        display: 'Grid',
        padding: theme.spacing(1),
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

const FriendRequest = ({id,firstname, middlename, lastname, imageUrl, onDenied, onAccept}) => {
    const classes = useStyles();

    return (
        <React.Fragment>
            <StyledMenuItem >
                <Divider variant = "li"/>
                <Grid className={classes.list} component = {Link} to={"/FriendProfile/" + id} style={{backgroundColor: "transparent"}}>

                    <ListItemAvatar>
                        <Avatar className={classes.photo} alt="Remy Sharp" src={imageUrl}/>
                    </ListItemAvatar>

                        <ListItemText gutterBottom variant="h4" component="h7" display={"inline"}>
                            {firstname} {middlename} {lastname}
                        </ListItemText>
                </Grid>
                <Divider variant = "li" />
                <ListItemSecondaryAction className={classes.button}>
                    <Button className={classes.accepdbt} Click= {onAccept} size="small" color="primary">
                        Godta
                    </Button>
                    <Button className={classes.Button} onClick= {onDenied} size="small" color="primary">
                        Avslå
                    </Button>
                </ListItemSecondaryAction>


        </StyledMenuItem>
            <Divider variant = "li" />

        </React.Fragment>

    );

}


export default FriendRequest;

