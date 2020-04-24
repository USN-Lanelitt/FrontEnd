import React, {useEffect, useState} from 'react';
import FriendRequest from "./friend-request";
import Grid from "@material-ui/core/Grid";
import axios from "axios";
import ConfirmDialog from "../profile/confirm-dialog";
import {notificationFriendRequest} from "../../feature/Notification/notification-refresh";


let statuss = 0;
let statusTittel = "";
let statusBesk = "";

const FriendRequestList = ({data}) => {
    const [friendId, setFriendId] = useState(null);
    const [userId, setId] = useState(sessionStorage.getItem('userId')); //min id
    const [showConfirmDialog, setShowConfirmDialog] = useState(false);


    const accept = (friendId) => {
        setShowConfirmDialog(true);
        setFriendId(friendId);
        statusTittel = "Godkjenn forespørsel?";
        statusBesk = "Ønsker du å godkjenne forespørselen?";
        statuss = 1;
    };

    const denied = (friendId) => {
        setShowConfirmDialog(true);
        setFriendId(friendId);
        statusTittel = "Avslå forespørsel?";
        statusBesk = "Ønsker du å avslå forespørselen?";
        statuss = 2;
    };

    function reply() {
        console.log("replyrequest", userId, sessionStorage.getItem('userId'));
        axios.post('/user/' + userId + '/friendRequest/' + friendId + '/' + statuss)
            .then((response) => {
                notificationFriendRequest(userId, friendId, statuss)
                if (response.status === 200) {
                    console.log(response.data);
                }

            })
            .catch(e => console.log(e));
        setShowConfirmDialog(false);
    }

    function onReplyCancel() {
        setShowConfirmDialog(false);
    }


    return (
        <Grid container spacing={4}>
            <ConfirmDialog title={statusTittel}
                           message={statusBesk}
                           onConfirm={reply}
                           onNotConfirm={onReplyCancel}
                           confirmButtonText="Ja"
                           notConfirmButtonText="Nei"
                           open={showConfirmDialog}
            />

            {data.map(item => (
                <Grid item key={item.user1.id} xs={12}>

                    <FriendRequest
                        id={item.user1.id}
                        firstname={item.user1.firstName}
                        lastname={item.user1.lastName}
                        middlename={item.user1.middleName}
                        imageUrl={item.user1.profileImage}
                        friendId={item.user1.id}
                        onDenied={() => denied(item.user1.id)}
                        onAccept={() => accept(item.user1.id)}
                        refresh={() => notificationFriendRequest(userId, friendId, statuss)}
                    />
                </Grid>
            ))}
        </Grid>


    );
};

export default FriendRequestList;
