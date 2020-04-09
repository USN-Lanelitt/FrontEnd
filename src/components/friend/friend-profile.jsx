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
import FriendProfileCard from "./friend-profile-card";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles(theme => ({
    Button: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',

    }

    }));
const FriendProfile = () => {
    const classes = useStyles();

    return (
        <React.Fragment>
            <CardContent>
                <Grid container direction="row" justify="center" alignItems="center">
                    <FriendProfileCard/>
                     </Grid>
                <Box m={4} className={classes.Button}>
                <CardActions>
                    <Box>
                    <Button  type="submit" fullWidth variant="contained" color="primary" >
                        Legg til
                    </Button>
                    <Button type="submit" fullWidth variant="contained" color="secondary">
                        Send Melding
                    </Button>
                    </Box>
                </CardActions>
                </Box>
                <CssBaseline/>
                <FriendAssets/>
            </CardContent>
        </React.Fragment>


    );
};

export default FriendProfile;