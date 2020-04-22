import React, {useEffect, useState} from 'react';
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import FriendAssets from "./friend-assets";
import axios from "axios";
import {useParams} from "react-router";
import FriendProfileCard from "./friend-profile-card";
import sendMessage from "../chat/send-message";
import deleteFriend from "./delete-friend";
import sendRequest from "./send-friend-request";

const FriendProfile = () => {
    const [userId, setId] = useState(sessionStorage.getItem('userId'));
    const [user, setUser] = useState();
    const {id} = useParams();

     useEffect(() => {
        console.log("getUser", sessionStorage.getItem('userId'));
        axios.get('/getUser/' + id)
            .then(result => {
                console.log(result.data);
                setUser(result.data);
            })
            .catch(e => console.log(e));
     },[setUser,userId]);

    return (
        <div>
             <Grid container direction="row" justify="center" alignItems="center">
                 <Grid>
                    <FriendProfileCard
                        user={user}
                        getChat={() => sendMessage(userId, id)}
                        deleteFriend={() => deleteFriend(userId, id)}
                        sendRequest={() => sendRequest(userId, id)}
                    />
                 </Grid>
             </Grid>
            <CssBaseline/>
            <FriendAssets/>
        </div>
    );
};

export default FriendProfile;
