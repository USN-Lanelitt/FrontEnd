/**
 * John-Berge
 */

import React, {useEffect, useState} from 'react';
import {Container} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import AssetCard from "./asset-card";
import axios from "axios";

const AssetsList = ({searchTherm}) => {
   const [assetBySearch, setAssetBySearch] = useState([]);

    useEffect( () => {
        getAssetsByCategory();
    }, []);


    const getAssetsByCategory = () => {
        axios.get("/assets/search/" + sessionStorage.getItem("userId") + "/" + searchTherm)
            .then(result => {
                setAssetBySearch(result.data)
            })
            .catch(error => console.log(error))

    }
    return (
        <Container>

            <Grid container spacing={3} justify="center">

                {
                    assetBySearch.map(asset => (
                            <Grid item>
                                <AssetCard asset={asset}/>
                            </Grid>
                        )
                    )
                }

            </Grid>

        </Container>
    );
};

export default AssetsList;
