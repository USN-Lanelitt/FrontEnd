/**
 * Linda Loftsgarden
 */

import React, {useEffect, useState} from 'react';
import AssetsList from "./assets-list";
import {makeStyles} from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import {useParams} from "react-router";
import Box from "@material-ui/core/Box";
import axios from "axios";

const useStyles = makeStyles(theme => ({
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(4, 0, 2),
    },
    cardGrid: {
        paddingBottom: theme.spacing(8),
    },

}));


const AssetContainer = () => {
    const classes = useStyles();
    const {id} = useParams();
    const [assetType, setAssetType] = useState('Kategori');

    useEffect(() => {
        axios.get("/assets/type/" + id)
            .then(result => {
                console.log('assetType:', result.data.assetType)
                if (result.data) {
                    setAssetType(result.data.assetType);
                }
            })
            .catch(error => console.log(error))
    }, [id]);


    return (
        <div>
            <div className={classes.heroContent}>
                <Container>
                    <Typography component="h2" variant="h2" align="center" color="textPrimary" gutterBottom>
                        {assetType && assetType.toUpperCase()}
                    </Typography>
                </Container>
            </div>
            <CssBaseline/>
            <Container className={classes.cardGrid}>

                <Box m={5}>
                    <hr/>
                </Box>
                <Grid>
                    <AssetsList categoryId={id}/>
                </Grid>
            </Container>
        </div>

    );
};

export default AssetContainer;