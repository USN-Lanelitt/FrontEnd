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
import StatusMessage from "../profile/status-message";
import Progress from "../progress";

/*Mirsa og Nicole jobbet med denne siden sammen*/

const FriendProfile = () => {
    const [userId, setId] = useState(sessionStorage.getItem('userId'));
    const [user, setUser] = useState();
    const {id} = useParams();
    const [showStatusMessage, setShowStatusMessage] = useState(false);
    const [statusMessage, setStatusMessage] = useState("");
    const [statusMessageSeverity, setStatusMessageSeverity] = useState("info");

    useEffect(() => {
        console.log("getUser", sessionStorage.getItem('userId'));
        axios.get('/getUser/' + id)
            .then(result => {
                console.log(result.data);
                setUser(result.data);
            })
            .catch(e => console.log(e));
    }, [setUser, userId]);

    if (!user) return <Progress/>;

    return (
        <div>
            <Grid container direction="row" justify="center" alignItems="center">
                <Grid>
                    <StatusMessage show={showStatusMessage} message={statusMessage} severity={statusMessageSeverity}
                                   onClose={setShowStatusMessage}/>
                    <FriendProfileCard
                        user={user}
                        getChat={() => sendMessageNewChat(userId, id)}
                        deleteFriend={() => deleteFriend(userId, id, setShowStatusMessage, setStatusMessage, setStatusMessageSeverity)}
                        sendRequest={() => sendRequest(userId, id, setShowStatusMessage, setStatusMessage, setStatusMessageSeverity)}
                    />
                </Grid>
            </Grid>
            <CssBaseline/>
            <FriendAssets/>
        </div>
    );
};

export default FriendProfile;
