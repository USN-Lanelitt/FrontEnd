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
import Box from "@material-ui/core/Box";
import {useTranslation} from "react-i18next";

const useStyles = makeStyles(theme => ({
    card: {
        padding: theme.spacing(1),
        width: '400px',

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

const FriendRequestCard = ({id, firstname, middlename, lastname, imageUrl, onDenied, onAccept}) => {
    const classes = useStyles();
    const { t } = useTranslation();

    return (

        <Card className={classes.card}>
            <Box>

                    <CardActionArea component={Link} to={"/FriendProfile/" + id} style={{backgroundColor: 'transparent'}}>
                    <CardContent>

                            <Box display="flex" flexDirection="row">
                                <Box display="flex" flexDirection="row">
                                    <CardMedia>
                                        <Avatar className={classes.photo} alt="Remy Sharp" src={imageUrl}/>
                                    </CardMedia>
                                    <Grid className={classes.text}>
                                        <Typography gutterBottom variant="h6" component="h2" display={"inline"}>
                                            {firstname} {middlename} {lastname}
                                        </Typography>
                                    </Grid>
                                </Box>

                            </Box>
                    </CardContent>
                </CardActionArea>
                <Box display="flex" flexDirection="row">
                    <CardActions>
                        <Button onClick={onAccept} size="small" color="primary">
                            {t('friendRequestCard.1')}
                        </Button>
                        <Button className={classes.Button} onClick={onDenied} size="small" color="primary">
                            {t('friendRequestCard.2')}
                        </Button>

                    </CardActions>
                </Box>
            </Box>

</Card>

)
    ;
}

export default FriendRequestCard;




























































































































































