import React from 'react';
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core/styles";
import {Paper} from "@material-ui/core";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from 'react-responsive-carousel';
import Box from "@material-ui/core/Box";
import {Link} from "react-router-dom";
import LoanRequestSend from "../../components/loan/loan-request-send";
import {useTranslation} from "react-i18next";

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
        imageUrl: "https://source.unsplash.com/random",
    },
    {
        imageUrl: "https://source.unsplash.com/random",
    },
    {
        imageUrl: "https://source.unsplash.com/random",
    },
    {
        imageUrl: "https://source.unsplash.com/random",
    }
];

const AssetSite = () => {
    const { t } = useTranslation();
    const classes = useStyles();
    return (
        <Box display='flex' justifyContent='center'>
            <Box width={'70%'} height={1/4}>
                <Carousel infiniteLoop={true}>
                    {
                        images.map(image =>
                            <Paper>
                                <img src={image.imageUrl}/>
                            </Paper>
                        )
                    }
                </Carousel>
                <Button variant="contained" color="primary" className={classes.button} component={Link} to="/LoanRequestSend">
                    {t('asset-site.1')}
                </Button>
            </Box>
        </Box>
    );
};

export default AssetSite;