import React from 'react';
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import makeStyles from "@material-ui/core/styles/makeStyles";


const useStyles = makeStyles({
    card: {
        maxWidth: 345,
    },
});


const CategoryCard = ({title, description, imageUrl}) => {
    const classes = useStyles();
    return (
        <div>
            <Card className={classes.card}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt="bilde"
                        height="140"
                        image={imageUrl}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        Se alle
                    </Button>
                    <Button size="small" color="primary">
                        button
                    </Button>
                </CardActions>
            </Card>
        </div>
    );
};

export default CategoryCard;