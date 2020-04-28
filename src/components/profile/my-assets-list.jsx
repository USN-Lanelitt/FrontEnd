import React, {useEffect, useState} from 'react';
import {Container} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import MyAssetsCard from "./my-assets-card";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add"
import makeStyles from "@material-ui/core/styles/makeStyles";
import axios from "axios";
import {Link} from "react-router-dom";
import ConfirmDialog from "./confirm-dialog";
import {fetchAssets} from "./asset-repository";
import Progress from "../progress";

        


const useStyles = makeStyles(theme => ({
    fab: {
        position: "fixed",
        bottom: theme.spacing(4),
        right: theme.spacing(4),

    }
}));

const MyAssetsList = () => {

    const classes = useStyles();
    const [userId, setId] = useState(sessionStorage.getItem('userId'));
    const [assets, setAssets] = useState([]);
    const [assetId, setAssetId] = useState(null);
    const [showConfirmDialog, setShowConfirmDialog] = useState(false);

    useEffect(() => {
        console.log("fetchassets", sessionStorage.getItem('userId'));
        fetchAssets(userId, setAssets);
    }, [setAssets, userId]);

    const remove = (assetId) => {
        setShowConfirmDialog(true);
        setAssetId(assetId);
    };

    function onDeleteAssetConfirm() {
        axios.delete('/assets/removeAsset/' + assetId)
            .then(result => {
                fetchAssets(userId, setAssets);
                console.log(result);
            })
            .catch(error => console.log(error));
        setShowConfirmDialog(false);
    }

    function onDeleteAssetCancel() {
        setShowConfirmDialog(false);
    }

    if (assets.length === 0) return <Progress/>

    return (
        <Container>

            <ConfirmDialog title="Slette eiendel?"
                           message="Ønsker du å slette denne eiendelen?"
                           onConfirm={onDeleteAssetConfirm}
                           onNotConfirm={onDeleteAssetCancel}
                           confirmButtonText="Ja"
                           notConfirmButtonText="Nei"
                           open={showConfirmDialog}
            />
            <Grid container spacing={4} justify="center">
                {
                    assets.map(asset => (
                            <Grid item>
                                <MyAssetsCard asset={asset}

                                              imageUrl={
                                                  asset.assetImages.length > 0 ?
                                                      "AssetImages/"+asset.assetImages[0].imageUrl :
                                                      ""
                                              }
                                              onRemove={() => remove(asset.id)}
                                              refresh={() => fetchAssets(userId, setAssets)}

                                />
                            </Grid>
                        )
                    )
                }

            </Grid>

            <Fab color="primary" aria-label="add" className={classes.fab} component={Link} to="new/asset">
                <AddIcon/>
            </Fab>
        </Container>

    )
        ;
};

export default MyAssetsList;
