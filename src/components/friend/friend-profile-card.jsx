import React from 'react';
import Card from "@material-ui/core/Card";
import cx from "clsx";
import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";
import Box from "@material-ui/core/Box";
import {useFadedShadowStyles} from "@mui-treasury/styles/shadow/faded";
import {useGutterBorderedGridStyles} from "@mui-treasury/styles/grid/gutterBordered";
import {makeStyles, withStyles} from "@material-ui/core/styles";
import {grey} from "@material-ui/core/colors";
import Badge from "@material-ui/core/Badge";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import {CardHeader} from "@material-ui/core";
import CardMedia from "@material-ui/core/CardMedia";
import CardActionArea from "@material-ui/core/CardActionArea";


const useStyles = makeStyles(theme => ({
    card: {
        borderRadius: 12,
        minWidth: 256,
        textAlign: 'center',
    },
    margin: {
        margin: theme.spacing(1),
    },
    Button: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',

    },
    text: {
        padding: theme.spacing(2),
    },


}));


const FriendProfileCard = ({id,firstname, middlename, lastname, imageUrl}) => {
    const classes = useStyles();

    return (
        <Card>
            <CardActionArea>
                <CardContent>
                    <CardMedia>
                        <Avatar alt="Remy Sharp" src={imageUrl}/>
                    </CardMedia>
                    <Grid className={classes.text}>
                        <Typography gutterBottom variant="h6" component="h2" display={"inline"}>
                            {firstname}{middlename}{lastname}
                        </Typography>
                    </Grid>
                </CardContent>
                <Divider light/>
                <Box m={4} className={classes.Button}>
                    <CardActions>
                        <Box>
                            <Button type="submit" fullWidth variant="contained" color="primary">
                                Legg til
                            </Button>
                            <Button type="submit" fullWidth variant="contained" color="secondary">
                                Send Melding
                            </Button>
                        </Box>
                    </CardActions>
                </Box>
            </CardActionArea>
        </Card>
    );
};

export default FriendProfileCard;