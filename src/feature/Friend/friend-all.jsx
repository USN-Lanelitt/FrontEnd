import React, {useEffect, useState} from 'react';
import FriendCard from "../../components/friend/friend-card";
import data from "../../components/friend/data";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import {Link} from "react-router-dom";
import {makeStyles} from "@material-ui/core/styles";
import axios from "axios";
import app from "../../fire";


const useStyles = makeStyles(theme => ({

heroContent: {
    backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
},

}));

const FriendAll = () => {
    const user = app.auth().currentUser;
    const [id, setId] = useState(sessionStorage.getItem('userId'));
    const [data, setData] = useState([]);


    useEffect(() => {

        console.log("hello from AllFriends", id, sessionStorage.getItem('userId'));
        axios.get('/user/'+id+'/friends')
            .then(result => {
                console.log(result.data);
                setData(result.data);
            })
            .catch(e => console.log(e));
    }, [setData, id]);

    const classes = useStyles();
        return (
            <React.Fragment>
                <div className={classes.heroContent}>
                    <Container maxWidth="sm">
                        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                            Mine Venner
                        </Typography>
                    </Container>
                </div>

            <Grid container spacing={4}>
            {data.map(item => (
                <Grid item key={item} xs={12} sm={6} md={4}>

                <FriendCard
                    firstname={item.firstname}
                    lastname={item.lastname}
                    middlename={item.middlename}
                    imageUrl={item.imageUrl}
                />
                </Grid>


            ))}
            </Grid>

            </React.Fragment>


        );

    };
export default FriendAll;