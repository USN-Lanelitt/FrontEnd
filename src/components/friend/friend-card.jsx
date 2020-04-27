import React from 'react';
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
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";



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
    },

}));

const FriendCard = ({id,firstname, middlename, lastname, imageUrl, onRemove, getChat}) => {
    const classes = useStyles();
    const { t } = useTranslation();


    return (
        <Grid xs={12}>
            <Card className={classes.card}>
                <CardActionArea component = {Link} to={"/FriendProfile/" + id}  style={{backgroundColor: 'transparent'}}>
                    <CardContent>
                        <Grid container zeroMinWidth justify="flex-start">
                            <CardMedia>
                                <Avatar className={classes.photo} alt="Remy Sharp" src={imageUrl}/>
                            </CardMedia>
                            <Grid className={classes.text} >
                                <Typography gutterBottom variant="h6" component="h2" display={"inline"} >
                                    {firstname} {middlename} {lastname}
                                </Typography>
                            </Grid>
                        </Grid>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button className={classes.Button} onClick= {onRemove} size="small" color="primary">
                        {t('freind-card.1')}
                    </Button>
                    <Button onClick= {getChat} component={Link} to={"/chatSelected/" + id} size="small" color="primary">
                        {t('freind-card.2')}
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    );
}

export default FriendCard;




























































































































































