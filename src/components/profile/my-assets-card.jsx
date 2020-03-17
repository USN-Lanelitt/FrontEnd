import React from 'react';
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
import EditIcon from '@material-ui/icons/Edit';
import Button from "@material-ui/core/Button";

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

const MyAssetsCard = ({title, description, imageUrl, rating}) => {
    const classes = useStyles();


    return (
        <div>
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
                                    {title}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    {description}
                                </Typography>
                                <Box component="fieldset" borderColor="transparent" display="flex">
                                    <Rating name="read-only" value={4} readOnly/>
                                </Box>

                            </Box>
                        </Box>
                    </CardContent>
                </CardActionArea>
                <Box display="flex" flexDirection="row">
                <CardActions>

                        <Box>
                            <IconButton aria-label="delete">
                                <DeleteIcon/>
                            </IconButton>
                            <IconButton aria-label="edit">
                                <EditIcon/>
                            </IconButton>
                        </Box>
                        <Box>
                            <Button>Publiser</Button>
                        </Box>

                </CardActions>
                </Box>
            </Card>
        </div>

    );
};

export default MyAssetsCard;