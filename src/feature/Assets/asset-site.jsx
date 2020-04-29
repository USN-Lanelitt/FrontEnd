/**
 * Linda Loftsgarden
 */

import React, {useEffect, useState} from 'react';
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
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";
import CircularProgress from "@material-ui/core/CircularProgress";
import AssetReport from "./asset-report";
import LocationOn from "@material-ui/icons/LocationOn";
import {getRatings} from "../../components/rating/getRating";


const AssetSite = () => {
    const {t} = useTranslation();
    const [asset, setAsset] = useState(null);
    const [rating, setRating] = useState(null);
    const {id} = useParams();


    const getAssetOwner = () => {
        axios.get('/assets/getAsset/' + id)
            .then(result => {
                console.log('assetsite', result.data);
                setAsset(result.data);
                getRatings(result.data.id, setRating)

            })
            .catch(e => console.log(e));
    };

    useEffect(() => {
        getAssetOwner();
    }, []);


    if (asset === null) return <Box display='flex' justifyContent='center'><CircularProgress/></Box>;

    return (
        <div>
            <Box display='flex' justifyContent='center'>
                <Box width={'70%'} height={1 / 4}>
                    <Carousel infiniteLoop={true}>
                        {
                            asset.assetImages.map(image =>
                                <Paper>
                                    <img src={"../AssetImages/" + image.imageUrl}/>
                                </Paper>
                            )}
                    </Carousel>
                </Box>
            </Box>

            <Box display='flex' justifyContent='center'>
                <Box width={'70%'}>
                    <Paper>

                        <Box display='flex' flexDirection='column'>

                            <Box display='flex' alignItems='center' mt={2} ml={2} justifyContent='flex-start'>
                                <Box mr={1}>
                                    <LocationOn/>
                                </Box>
                                {asset.users.zipCode && asset.users.zipCode.city}
                            </Box>
                            <Box component="fieldset" borderColor="transparent">
                                <Rating name="read-only" precision={0.5} value={rating} readOnly/>
                            </Box>

                            <Box m={3} display='flex' justifyContent='center'>
                                <Box display='flex' flexDirection='column' justifyContent='center'>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {asset && asset.assetName}
                                    </Typography>
                                    <Typography variant="body2"
                                                color="textSecondary"
                                                component="p"
                                                style={{
                                                    whiteSpace: "normal",
                                                    wordWrap: "break-word"
                                                }}
                                    >
                                        {asset && asset.description}
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>

                        <Box display='flex' flexDirection='column'>

                            <Box display='flex' flexDirection='row' justifyContent='center'>
                                <Box mt={10}>
                                    <Button type="submit"
                                            variant="outlined"
                                            color="primary"
                                            component={Link}
                                            to={"/LoanRequestSend/" + asset.users.id + "/" + asset.id + "/" + asset.assetName}>
                                        {t('assetOwner.1')}
                                    </Button>
                                </Box>
                            </Box>
                        </Box>
                        <Box display='flex' justifyContent='center'>
                            <Grid container direction="column" justifyContent="center" alignItems="center">
                                <Grid>
                                    <AssetOwnerInfo
                                        asset={asset}
                                    >
                                        <AssetReport userId2={asset.users.id}/>
                                    </AssetOwnerInfo>
                                </Grid>
                            </Grid>
                        </Box>
                    </Paper>
                </Box>
            </Box>

        </div>

    );
};

export default AssetSite;
