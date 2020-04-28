import React, {useEffect, useState} from 'react';
import {Container} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import AssetCard from "./asset-card";
import axios from "axios";
import CircularProgress from "@material-ui/core/CircularProgress";
import Box from "@material-ui/core/Box";
import Progress from "../../components/progress";

const AssetsList = ({categoryId}) => {
   const [assetByCategory, setAssetByCategory] = useState([]);

    useEffect( () => {
        getAssetsByCategory();
    }, []);

    const getAssetsByCategory = () => {
        axios.get("/assets/getAssetType/" + sessionStorage.getItem("userId") + "/" + categoryId)
            .then(result => setAssetByCategory(result.data))
            .catch(error => console.log(error))

    }

    if (assetByCategory.length === 0) return <Progress/>
    return (
        <Container>

            <Grid container spacing={3} justify="center">

                {
                    assetByCategory.map(asset => (
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
