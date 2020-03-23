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
import {red} from "@material-ui/core/colors";



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
    mid_name: {
        padding: theme.spacing(0.5),

    },
    Button: {
        color: 'red',
    }

}));

const FriendRequestCard = ({firstname, middlename, lastname, imageUrl}) => {
    const classes = useStyles();

    return (
        <Grid xs={12}>
            <Card className={classes.card}>
                <CardActionArea>
                    <CardContent>
                        <Grid container zeroMinWidth justify="flex-start">
                            <CardMedia>
                                <Avatar className={classes.photo} alt="Remy Sharp" src={imageUrl}/>
                            </CardMedia>
                            <Grid className={classes.text}>
                                <Typography gutterBottom variant="h6" component="h2" display={"inline"}>
                                    {firstname}
                                </Typography>
                                <Typography className = {classes.mid_name} gutterBottom variant="h6" component="h2" display={"inline"}>
                                    {middlename}
                                </Typography>
                                <Typography gutterBottom variant="h6" component="h2" display={"inline"}>
                                    {lastname}
                                </Typography>
                            </Grid>
                        </Grid>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        Legg til
                    </Button>
                    <Button className={classes.Button} size="small" color="primary">
                        Avslå
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    );
}

export default FriendRequestCard;




























































































































































