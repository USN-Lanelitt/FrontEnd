import React, {useEffect, useState} from 'react';
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import data from "../../components/friend/data";
import FriendRequestCard from "../../components/friend/friend-requestCard";
import Divider from "@material-ui/core/Divider";
import AssetsList from "../Assets/assets-list";
import app from "../../fire";
import axios from "axios";


//siden på mobil, (en hel side)

const useStyles = makeStyles(theme => ({

    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
    text: {
        padding: theme.spacing(6),
    }

}));

const Notification = () => {
    const classes = useStyles();
    const user = app.auth().currentUser;
    const [id, setId] = useState(sessionStorage.getItem('userId'));
    const [data, setData] = useState([]);

    useEffect(() => {
        console.log("hello from Notification", id, sessionStorage.getItem('userId'));
        axios.get('/user/' + id + '/friendRequests')
            .then(result => {
                console.log(result.data);
                setData(result.data);
            })
            .catch(e => console.log(e));
    }, [setData, id]);

    return (
        <React.Fragment>
            <div className={classes.heroContent}>
                <Container maxWidth="sm">
                    <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                        Varsler
                    </Typography>
                </Container>
            </div>
            <Container maxWidth="sm">
                <Typography className={classes.text} variant="h5" align="center" color="textSecondary" paragraph>
                    Venneforespørsler
                    <Divider/>
                </Typography>
            </Container>
            <Grid container spacing={4}>

                {data.map(item => (
                    <Grid item key={item} xs={12} sm={6} md={4}>

                        <FriendRequestCard
                            firstname={item.firstName}
                            lastname={item.lastName}
                            middlename={item.middleName}
                            imageUrl={item.imageUrl}
                        />
                    </Grid>
                ))}
            </Grid>

            <Container maxWidth="sm">
                <Typography className={classes.text} variant="h5" align="center" color="textSecondary" paragraph>

                    Låneforespørsler
                    <Divider/>
                </Typography>
                <AssetsList/>

            </Container>


        </React.Fragment>
    );
};

export default Notification;