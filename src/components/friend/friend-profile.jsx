import React from 'react';
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import ProfileCard from "../profile/profile-card";
import FriendAssets from "./friend-assets";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import {CardContent} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    Button: {
        margin: theme.spacing(3, 0, 0),

    },
    root: {
        marginTop: theme.spacing(10),
    },


    }));
const FriendProfile = () => {
    const classes = useStyles();

    return (
        <React.Fragment>
            <CardContent className={classes.root}>
                <Grid container direction="row" justify="center" alignItems="center">
                    <ProfileCard/>
                     </Grid>
                <CardActions>
                    <Button className={classes.Button} type="submit" fullWidth variant="contained" color="primary" >
                        Legg til
                    </Button>
                </CardActions>
                <CardActions>
                    <Button type="submit" fullWidth variant="contained" color="secondary">
                        Send Melding
                    </Button>
                </CardActions>
                <CssBaseline/>
                <FriendAssets/>
            </CardContent>
        </React.Fragment>


    );
};

export default FriendProfile;