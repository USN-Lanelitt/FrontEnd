/**
 * Linda Loftsgarden
 */
import React from 'react';
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import MyAssetsList from "./my-assets-list";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    icon: {
        marginRight: theme.spacing(2),
    },
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(15, 0, 6)
    },
    heroButtons: {
        marginTop: theme.spacing(4),
    },
    cardGrid: {
        paddingBottom: theme.spacing(8),
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },

}));


const MyAssetContainer = () => {
    const classes = useStyles();


    return (
        <React.Fragment>
            <Container className={classes.cardGrid}>
                <hr/>
                <Grid container spacing={12}>
                    <MyAssetsList/>
                </Grid>
            </Container>


        </React.Fragment>
    );
};

export default MyAssetContainer;