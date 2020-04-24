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
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";
import CircularProgress from "@material-ui/core/CircularProgress";
import AssetReport from "./asset-report";


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
                console.log('assetsite', result.data);
                setAsset(result.data);
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
                            asset.assetImages.length > 0 ?
                                asset.assetImages.map(image =>
                                    <Paper>
                                        <img src={image.imageUrl}/>
                                    </Paper>
                                ) : <img src="https://source.unsplash.com/ukzHlkoz1IE"/>
                        }
                    </Carousel>
                </Box>
            </Box>

            <Box display='flex' justifyContent='center'>
                <Box width={'70%'}>
                    <Paper elevation="0">
                        <Box display='flex' flexDirection='column'>
                            <Box component="fieldset" borderColor="transparent" ml={3}>
                                <Rating name="read-only" precision={0.5} value={rating} readOnly/>
                            </Box>
                            <Box display='flex' flexDirection='row'>
                                <Box ml={5}>
                                    <Button type="submit"
                                            variant="contained"
                                            color="primary"
                                            component={Link} to={"/LoanRequestSend/" + asset.users.id + "/" + asset.id}>
                                        {t('assetOwner.1')}
                                    </Button>
                                </Box>

                            </Box>
                            <Box display='flex' flexDirection='column'>


                            </Box>
                        </Box>

                        <Box display='flex' flexDirection='column' justifyContent='flex-start' m={5}>
                            <Typography gutterBottom variant="h5" component="h2">
                                {asset && asset.assetName}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {asset && asset.description}
                            </Typography>

                        </Box>
                        <Box display='flex' justifyContent='center' m={5}>
                            <Grid container direction="column" justify="center" alignItems="center">
                                <Grid>
                                    <AssetOwnerInfo
                                        asset={asset}
                                    >
                                        <AssetReport userId2={asset.users.id}/>
                                    </AssetOwnerInfo>
                                </Grid>
                                <Grid>

                                </Grid>

                            </Grid>

                        </Box>
                        <Box display="flex" justifyContent="center">
                        </Box>
                    </Paper>
                </Box>
            </Box>

        </div>

    );
};

export default AssetSite;
