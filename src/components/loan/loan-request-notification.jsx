import React from 'react';
import Grid from "@material-ui/core/Grid";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import {makeStyles} from "@material-ui/core/styles";
import withStyles from "@material-ui/core/styles/withStyles";

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
const LoanRequestNotification = (id,firstname, middlename, lastname, assetname, onDenied, onAccept) => {
    return (
        <React.Fragment>
            <StyledMenuItem>
                <Grid className={classes.list}>

                    <ListItemAvatar>
                        <Avatar className={classes.photo} alt="Remy Sharp" src={imageUrl}/>
                    </ListItemAvatar>

                    <ListItemText gutterBottom variant="h6" component="h7" display={"inline"}>
                        {firstname} {middlename} {lastname}
                    </ListItemText>
                    <ListItemText gutterBottom variant="h6" component="h7" display={"inline"}>
                        Vil låne {assetName}
                    </ListItemText>
                </Grid>
                <Divider variant = "inset" />
                <ListItemSecondaryAction className={classes.button}>
                    <Button onClick= {onAccept} size="small" color="primary">
                        Godta
                    </Button>
                    <Button className={classes.Button} onClick= {onDenied} size="small" color="primary">
                        Avslå
                    </Button>
                </ListItemSecondaryAction>


            </StyledMenuItem>
            <Divider variant = "inset" component = "li" />

        </React.Fragment>
    );
};

export default LoanRequestNotification;