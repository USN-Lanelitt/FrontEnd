import React, {useEffect, useState} from 'react';
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import FriendAssets from "./friend-assets";
import axios from "axios";
import {useParams} from "react-router";
import FriendProfileCard from "./friend-profile-card";
import sendMessageNewChat from "../chat/send-message-new-chat";
import deleteFriend from "./delete-friend";
import sendRequest from "./send-friend-request";

const FriendProfile = () => {
    const [userId, setId] = useState(sessionStorage.getItem('userId'));
    const [user, setUser] = useState();
    const [showStatusMessage, setShowStatusMessage] = useState(false);
    const [statusMessage, setStatusMessage] = useState("");
    const [statusMessageSeverity, setStatusMessageSeverity] = useState("info");
    const [open, setOpen] = React.useState(false);
    const {userId2} = useParams();

     useEffect(() => {
        console.log("getUser", sessionStorage.getItem('userId'));
        axios.get('/getUser/' + userId2)
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
                        getChat={() => sendMessageNewChat(userId, userId2)}
                        deleteFriend={() => deleteFriend(userId, userId2, setShowStatusMessage, setStatusMessage, setStatusMessageSeverity, setOpen)}
                        sendRequest={() => sendRequest(userId, userId2, setShowStatusMessage, setStatusMessage, setStatusMessageSeverity, setOpen)}
                    />
                 </Grid>
             </Grid>
            <CssBaseline/>
            <FriendAssets/>
        </div>
    );
};

export default FriendProfile;
