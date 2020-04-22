import React, {useEffect, useState} from 'react';
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import {makeStyles} from "@material-ui/core/styles";
import AssetCard from "../../feature/Assets/asset-card";
import axios from "axios";
import {useParams} from "react-router";
import {Box} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    cardGrid: {
        paddingBottom: theme.spacing(8),
    },


}));

const FriendAssets = () => {
    const classes = useStyles();
    const [friendassets, setfriendassets] = useState([]);
    const [userId, setId] = useState(sessionStorage.getItem('userId'));
    const {id} = useParams();

    useEffect(() => {
        getUserAssets();

    }, []);
    const getUserAssets = () => {
        axios.get('/assets/getUsersAssets/' + userId + '/' + id)
            .then(result => setfriendassets(result.data))
            .catch(error => console.log(error))
    }


    return (
        <Container>

            <main>
                <Container className={classes.cardGrid}>
                    <Box m={5}>
                        <h3>Lån</h3>
                        <hr/>
                    </Box>
                    <Grid container spacing={3} justify="center">

                        {
                            friendassets.map(asset => (
                                    <Grid item>
                                        <AssetCard asset={asset}/>
                                    </Grid>
                                )
                            )
                        }

                    </Grid>
                </Container>
            </main>
        </Container>

    )
        ;
};

export default FriendAssets;
