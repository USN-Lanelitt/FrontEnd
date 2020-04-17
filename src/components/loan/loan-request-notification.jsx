import React from 'react';
import Grid from "@material-ui/core/Grid";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import MenuItem from "@material-ui/core/MenuItem";
import {makeStyles} from "@material-ui/core/styles";
import withStyles from "@material-ui/core/styles/withStyles";
import {Link} from "react-router-dom";

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

const LoanRequestNotification = ({id,firstname, middlename, lastname, loanStatus}) => {
    const classes = useStyles();
    return (
        <React.Fragment>
            <StyledMenuItem>
                <Grid className={classes.list}>
                    <ListItemText gutterBottom variant="h6" component="h7" display={"inline"}>
                        {firstname} {middlename} {lastname}
                    </ListItemText>
                    </Grid>
                    <Divider variant = "inset" />
                    <ListItemText gutterBottom variant="h6" component="h7" display={"grid"}>
                      {loanStatus} lånet
                    </ListItemText>

            </StyledMenuItem>
            <Divider variant = "inset" component = "li" />
        </React.Fragment>
    );
};

export default LoanRequestNotification;