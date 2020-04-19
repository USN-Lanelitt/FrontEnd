import React, {useEffect, useState} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {Paper} from "@material-ui/core";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from 'react-responsive-carousel';
import Box from "@material-ui/core/Box";
import {useTranslation} from "react-i18next";
import AssetOwnerInfo from "./asset-owner-info";
import Grid from "@material-ui/core/Grid";
import axios from "axios";
import {useParams} from "react-router";
import Typography from "@material-ui/core/Typography";
import Rating from "@material-ui/lab/Rating";

const useStyles = makeStyles(theme => ({
    button: {
        display: 'flex',
        flexDirection: 'column',
        margin: theme.spacing(1),
    },
    input: {
        display: 'none',
    },
}));

const images = [
    {
        imageUrl: "https://source.unsplash.com/ukzHlkoz1IE",
    },
    {
        imageUrl: "https://source.unsplash.com/ukzHlkoz1IE",
    },
    {
        imageUrl: "https://source.unsplash.com/ukzHlkoz1IE",
    },
    {
        imageUrl: "https://source.unsplash.com/ukzHlkoz1IE",
    }
];

const AssetSite = () => {
    const {t} = useTranslation();
    const classes = useStyles();

    const [userId, setId] = useState(sessionStorage.getItem('userId'));
    const [asset, setAsset] = useState(null);
    const [rating, setRating] = useState(null);
    const {id} = useParams();

    const getAssetOwner = () => {
        axios.get('/assets/getAsset/' + id)
            .then(result => {
                console.log(result.data);
                setAsset(result.data);
            })
            .catch(e => console.log(e));
    };

    useEffect(() => {
        getAssetOwner();
    }, []);


    return (
        <div>
            <Box display='flex' justifyContent='center'>
                <Box width={'70%'} height={1 / 4}>
                    <Carousel infiniteLoop={true}>
                        {
                            images.map(image =>
                                <Paper>
                                    <img src={image.imageUrl}/>
                                </Paper>
                            )
                        }
                    </Carousel>
                </Box>
            </Box>

            <Box display='flex' justifyContent='center'>
                <Box width={'70%'}>
            <Paper elevation="0">

                        <Box component="fieldset" borderColor="transparent" ml={2}>
                            <Rating name="read-only" precision={0.5} value={rating} readOnly/>
                        </Box>
                        <Box display='flex' flexDirection='row'>
                            <Box display='flex' flexDirection='column' justifyContent='flex-start' m={5} width={2 / 3}>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {asset && asset.assetName}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    {asset && asset.description}
                                </Typography>

                            </Box>
                            <Box display='flex' justifyContent='flex-end' m={5} width={1 / 3}>
                                <Grid container direction="row" justify="center" alignItems="center">
                                    <Grid>
                                        <AssetOwnerInfo
                                            asset={asset}
                                        />
                                    </Grid>
                                </Grid>
                            </Box>
                        </Box>

            </Paper>
                </Box>
            </Box>

        </div>

    );
};

export default AssetSite;
