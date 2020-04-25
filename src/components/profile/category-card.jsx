import React from 'react';
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Link} from "react-router-dom";

const useStyles = makeStyles({
    card: {
        maxWidth: 345,
    },
    title: {
        display: "flex",
        justifyContent: "center",

    }
});

const CategoryCard = ({id, title, imageUrl}) => {
    const classes = useStyles();
    return (
        <div>
            <Card className={classes.card}>
                <CardActionArea component={Link} to={"/assets/" + id}>
                    <CardMedia
                        component="img"
                        alt="bilde"
                        height="200"
                        image={imageUrl}
                    />
                    <CardContent>
                        <Typography className={classes.title} gutterBottom variant="h5" component="h2">
                            {title}
                        </Typography>

                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    );
};

export default CategoryCard;