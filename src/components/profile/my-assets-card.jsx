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

const useStyles = makeStyles((theme) => ({
    card: {
        height: 250,
        maxWidth: 465,
    },
    image: {
        width: "30%",
        height: 150,
        marginRight: theme.spacing(2),
    }

}));


const MyAssetsCard = ({asset, imageUrl, onRemove, refresh}) => {
    const { t } = useTranslation();
    const classes = useStyles();
    const [userId, setId] = useState(sessionStorage.getItem('userId'));
    const [assetId, setAssetId] = useState('');
    const [rating, setRating] = useState(null);
    const [published, setPublished] = useState(false);
    const [statusMessage, setStatusMessage] = useState("");
    const [statusMessageSeverity, setStatusMessageSeverity] = useState("info");
    const [showStatusMessage, setShowStatusMessage] = useState(false);


    const onlyFriends = () => {
        asset.public = !asset.public;
        console.log(JSON.stringify(asset));
        axios.put(sessionStorage.getItem('API_URL')+"/assets/editAsset/" + userId + "/" + asset.id, asset)
            .then(result => refresh())
            .catch(error => console.log(error))
    }

    useEffect(() => {
        getRatings(asset.id, setRating)
        console.log(rating);
    }, []);

    const publishAsset = () => {
        axios.post(sessionStorage.getItem('API_URL')+/setPublished/ + userId + "/" + asset.id + "/" + published)
            .then(result => {
                console.log(result);
                setPublished(true);
                setShowStatusMessage(true);
                setStatusMessage("Eiendelen ble publisert!")
                setStatusMessageSeverity("success");
            })
            .catch(error => {
                console.log(error);
                setShowStatusMessage(true);
                setStatusMessage("Ups, dette gikk ikke helt etter planen!");
            });
    };



    return (
        <div>
            <StatusMessage show={showStatusMessage} message={statusMessage} severity={statusMessageSeverity}
                           onClose={setShowStatusMessage}/>
            <Card className={classes.card}>
                <CardActionArea>

                    <CardContent>
                        <Box display="flex" flexDirection="row">
                            <CardMedia
                                className={classes.image}
                                component="img"
                                alt="bilde"
                                image={imageUrl}
                            />
                            <Box diplay="flex" flexDirectrion="column">
                                <Typography gutterBottom variant="h5" component="h2">
                                    {asset.assetName}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    {asset.description}
                                </Typography>
                                <Box component="fieldset" borderColor="transparent" display="flex">
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
                            <IconButton aria-label="delete" onClick={onRemove}>
                                <DeleteIcon/>
                            </IconButton>
                        </Box>

                        <Box>
                            <Button onClick={onlyFriends}
                                    startIcon={<VisibilityIcon/>}>
                                {asset.public ? 'Offentlig' : 'Bare venner'}
                            </Button>

                            <Button onClick={publishAsset}>
                                {setPublished ? 'publisert' : 'publiser'}
                            </Button>
                        </Box>

                    </Box>
                </CardActions>
            </Card>
        </div>

    );
};

export default MyAssetsCard;