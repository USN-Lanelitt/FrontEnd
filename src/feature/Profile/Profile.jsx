/**
 * Linda Loftsgarden
 */

import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Copyright from "../../components/home/Copyright";
import MyAssetContainer from "../../components/profile/my-asset-container";
import {useTranslation} from "react-i18next";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    icons: {
        marginRight: theme.spacing(2),
    },
    root: {
        display: 'flex',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    toolbar: theme.mixins.toolbar,
    icon: {
        marginRight: theme.spacing(2),
    },
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(4, 0, 2),
    },
    heroButtons: {
        marginTop: theme.spacing(4),
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
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    },
}));

export default function Profile() {
    const {t} = useTranslation();
    const classes = useStyles();


    return (
        <React.Fragment>
            <CssBaseline/>

            <div className={classes.heroContent}>
                <Container maxWidth="sm">
                    <Typography component="h2"
                                variant="h2"
                                align="center"
                                color="textPrimary"
                                gutterBottom>
                        {t('profile.1').toUpperCase()}
                    </Typography>

                </Container>
            </div>

            <Container className={classes.cardGrid}>

                <Grid container spacing={12}>
                    <MyAssetContainer/>
                </Grid>
            </Container>
            <footer className={classes.footer}>
                <Typography variant="h6" align="center" gutterBottom>
                    Lånelitt
                </Typography>
                <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                    ProgTeam Lånelitt
                </Typography>
                <Copyright/>
            </footer>
        </React.Fragment>
    );
}
