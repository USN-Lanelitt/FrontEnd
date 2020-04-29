/**
 * Linda Loftsgarden
 */

import React, {useEffect, useState} from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Rating from "@material-ui/lab/Rating";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from '@material-ui/icons/Delete';
import Button from "@material-ui/core/Button";
import axios from "axios";
import VisibilityIcon from "@material-ui/icons/Visibility";
import {getRatings} from "../rating/getRating";
import StatusMessage from "./status-message";
import {useTranslation} from "react-i18next";
import {Link} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    card: {

        maxWidth: 345
    },
    image: {
        width: "30%",
        height: 150,
        marginRight: theme.spacing(2),
    },


}));


const MyAssetsCard = ({asset, imageUrl, onRemove, refresh}) => {
    const {t} = useTranslation();
    const classes = useStyles();
    const [userId, setId] = useState(sessionStorage.getItem('userId'));
    const [assetId, setAssetId] = useState('');
    const [rating, setRating] = useState(null);
    const [published, setPublished] = useState(asset.published);
    const [statusMessage, setStatusMessage] = useState("");
    const [statusMessageSeverity, setStatusMessageSeverity] = useState("info");
    const [showStatusMessage, setShowStatusMessage] = useState(false);


    const onlyFriends = () => {
        asset.public = !asset.public;
        console.log(JSON.stringify(asset));
        axios.put("/assets/editAsset/" + userId + "/" + asset.id, asset)
            .then(result => refresh())
            .catch(error => console.log(error))
    }

    useEffect(() => {
        getRatings(asset.id, setRating)
        console.log(rating);
    }, []);

    const publishAsset = () => {
        axios.post('/setPublished/' + userId + "/" + asset.id + "/" + (asset.published ? 0 : 1))

            .then(result => {
                console.log(result);
                setPublished(true);
                setShowStatusMessage(true);
                setStatusMessage(asset.published ? t("my-asset-card.7") : t("my-asset-card.1"));
                setStatusMessageSeverity("success");
                refresh();
            })
            .catch(error => {
                console.log(error);
                setShowStatusMessage(true);
                setStatusMessage(t("my-asset-card.2"));
            });
    };

    return (
        <div>
            <StatusMessage show={showStatusMessage} message={statusMessage} severity={statusMessageSeverity}
                           onClose={setShowStatusMessage}/>
            <Card className={classes.card}>
                <CardActionArea component={Link} to={"/assetSite/" + asset.id}>

                    <CardMedia
                        component="img"
                        alt="bilde"
                        height="200"
                        image={asset.assetImages.length > 0 ? "../AssetImages/" + asset.assetImages[0].imageUrl : 'https://source.unsplash.com/random'}
                    />
                    <CardContent>
                        <Box display="flex" flexDirection="row">

                            <Box diplay="flex" flexDirectrion="column">
                                <Box ml={1}>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {asset.assetName}
                                    </Typography>
                                </Box>
                                <Box m={1}>
                                    <Typography variant="body2" color="textSecondary">
                                        {asset.description.length > 50 ? asset.description.substring(0, 50) + '...' : asset.description}
                                    </Typography>
                                </Box>
                                <Box component="fieldset" borderColor="transparent" display="flex" p={0}>
                                    <Rating name="read-only" precision={0.5} value={rating} readOnly/>
                                </Box>
                            </Box>

                        </Box>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Box display="flex" flexDirection="row" alignItems="center" width={1}
                         justifyContent="space-between">
                        <Box>
                            <IconButton aria-label="delete" onClick={onRemove} color="primary">
                                <DeleteIcon/>
                            </IconButton>
                        </Box>
                        <Box>
                            <Button className={classes.button}
                                    variant="outlined"
                                    onClick={onlyFriends}
                                    startIcon={<VisibilityIcon/>}
                                    color="primary">
                                {asset.public ? (t("my-asset-card.3")) : (t("my-asset-card.4"))}
                            </Button>
                        </Box>
                        <Box>

                            <Button variant="outlined"
                                    onClick={publishAsset}
                                    color="primary">
                                {asset.published ? (t("my-asset-card.5")) : (t("my-asset-card.6"))}
                            </Button>
                        </Box>


                    </Box>
                </CardActions>
            </Card>
        </div>

    );
};

export default MyAssetsCard;
