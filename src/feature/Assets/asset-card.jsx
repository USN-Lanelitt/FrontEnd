import React, {useEffect, useState} from 'react';
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Rating from "@material-ui/lab/Rating";
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {getRatings} from "../../components/rating/getRating";

const useStyles = makeStyles({
    card: {
        maxWidth: 345
    }
});

const AssetCard = ({asset}) => {
    const {t} = useTranslation();
    const classes = useStyles();
    const [rating, setRating] = useState(null);

    useEffect(() => {
        getRatings(asset.id, setRating)
        console.log(rating);
    }, []);

    return (
        <div>
            <Card className={classes.card}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt="bilde"
                        height="200"
                        image={asset.assetImages.length > 0 ? asset.assetImages[0] : 'https://source.unsplash.com/random'}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {asset.assetName}
                        </Typography>
                        <Rating name="read-only" precision={0.5} value={rating} readOnly/>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary" component={Link} to={"/assetSite/" + asset.id}>
                        {t('asset-card.1')}
                    </Button>
                </CardActions>
            </Card>
        </div>
    );
};

export default AssetCard;