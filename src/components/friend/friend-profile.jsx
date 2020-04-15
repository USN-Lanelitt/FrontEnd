import React, {useEffect, useState} from 'react';
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import ProfileCard from "../profile/profile-card";
import FriendAssets from "./friend-assets";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import {CardContent} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import FriendProfileCard from "./friend-profile-card";
import axios from "axios";
import {useParams} from "react-router";
import FriendCard from "./friend-card";
import sendMessage from "../chat/send-message";

const FriendProfile = () => {
    const [userId, setId] = useState(sessionStorage.getItem('userId'));
    const [user, setUser] = useState([]);
    const {id} = useParams();


        console.log("dette er id" + id);
         useEffect(() => {
            console.log("", userId, sessionStorage.getItem('userId'));
            axios.get(sessionStorage.getItem('API_URL')+'/user/'+userId+'/friend/'+id)
                .then(result => {
                    console.log(result.data);
                    setUser(result.data);
                })
                .catch(e => console.log(e));
         },[setUser,userId]);
    console.log( "nr2" + user);


    return (
        <React.Fragment>
                <Grid container direction="row" justify="center" alignItems="center">
                        {user.map(user => (
                            <Grid key={user.user2.id}>

                                <FriendProfileCard
                                    firstname={user.user2.firstName}
                                    lastname={user.user2.lastName}
                                    middlename={user.user2.middleName}
                                    imageUrl={user.user2.profileImage}

                                />
                            </Grid>
                        ))}
                    </Grid>
                <CssBaseline/>
                <FriendAssets/>
        </React.Fragment>


    );
};

export default FriendProfile;