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
    const [showConfirmDialog, setShowConfirmDialog] = React.useState(false);


    useEffect(() => {
        console.log("", userId, sessionStorage.getItem('userId'));
        fetchAssets(userId);
    }, [setAssets, userId]);

    const fetchAssets = (userId) => {
        axios.get("/assets/getMyAsset/" + userId)
            .then(result => {
                if (result.status === 200) {
                    console.log(result.data);
                    setAssets(result.data);
                }
            })
            .catch(e => console.log(e));
    }

    const remove = (assetId) => {
        setShowConfirmDialog(true);

        setAssetId(assetId);
    };

    function onDeleteAssetConfirm() {
        axios.delete('/assets/removeAsset/' + assetId)
            .then(result => {
                fetchAssets(userId);
                console.log(result);
            })
            .catch(error => console.log(error));
        setShowConfirmDialog(false);
    }

    function onDeleteAssetCancel() {
        setShowConfirmDialog(false);
    }

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
                                <MyAssetsCard assetId={asset.id} title={asset.assetName} description={asset.description}
                                              imageUrl={"https://source.unsplash.com/random"}
                                              onRemove={() => remove(asset.id)}/>
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