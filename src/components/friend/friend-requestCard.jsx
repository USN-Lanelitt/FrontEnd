import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardMedia from "@material-ui/core/CardMedia";
import Avatar from '@material-ui/core/Avatar';
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles(theme => ({
    card: {
        padding: theme.spacing(1),
    },
    photo: {
        width: theme.spacing(7),
        height: theme.spacing(7),

    },
    text: {
        padding: theme.spacing(2),

    },
    Button: {
        color: 'red',
    }
}));

const FriendRequestCard = ({id,firstname, middlename, lastname, imageUrl, onDenied, onAccept}) => {
    const classes = useStyles();

    return (

            <Card className={classes.card}>
                <CardActionArea>
                    <CardContent>
                        <Grid container zeroMinWidth justify="flex-start">
                            <CardMedia>

                                <Avatar className={classes.photo} alt="Remy Sharp" src={imageUrl}/>
                            </CardMedia>
                            <Grid className={classes.text}>
                                <Typography gutterBottom variant="h6" component="h2" display={"inline"}>
                                    {firstname} {middlename} {lastname}
                                </Typography>
                            </Grid>
                        </Grid>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button onClick= {onAccept} size="small" color="primary">
                        Legg til
                    </Button>
                    <Button className={classes.Button} onClick= {onDenied} size="small" color="primary">
                        Avslå
                    </Button>
                </CardActions>
            </Card>

    );
}

export default FriendRequestCard;




























































































































































