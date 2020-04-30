/**
 * John-Berge
 */

import React, {useState} from 'react';
import AssetsList from "./assets-search-list";
import {makeStyles} from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import {useParams} from "react-router";
import Box from "@material-ui/core/Box";
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles(theme => ({
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(5, 0, 4)
    },
    cardGrid: {
        paddingBottom: theme.spacing(8),
    },

}));

const AssetSearch = () => {
    const classes = useStyles();
    const {search} = useParams();
    const [searchTherm, setSearchTherm] = useState([]);
    const { t, i18n } = useTranslation();

    return (
        <div>
            <div className={classes.heroContent}>
                <Container>
                    <Typography component="h2" variant="h2" align="center" color="textPrimary" gutterBottom>
                        <h3>{t('home.4')}</h3>
                    </Typography>
                </Container>
            </div>
            <CssBaseline />
                <Container className={classes.cardGrid}>
                   <Box m={5}>
                    <hr/>
                   </Box>
                    <Grid >
                        <AssetsList searchTherm={search}/>
                    </Grid>
                </Container>
        </div>
    );
};
export default AssetSearch;