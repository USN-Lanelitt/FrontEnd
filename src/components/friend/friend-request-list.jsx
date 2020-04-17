import React, {useEffect, useState} from 'react';
import FriendRequest from "./friend-request";
import Grid from "@material-ui/core/Grid";
import axios from "axios";
import ConfirmDialog from "../profile/confirm-dialog";


let statuss = 0;
let statusTittel = "";
let statusBesk = "";

const FriendRequestList = () => {

    const [data, setData] = useState([]);
    const [friendId, setFriendId] = useState(null);
    const [userId, setId] = useState(sessionStorage.getItem('userId')); //min id
    const [showConfirmDialog, setShowConfirmDialog] = useState(false);


    useEffect(() => {
        console.log("getuserrequest", userId, sessionStorage.getItem('userId'));
        axios.get(sessionStorage.getItem('API_URL')+'/user/' + userId + '/friendRequests')
            .then((response) => {
                if (response.status === 200) {
                    console.log(response);
                    setData(response.data);
                }
            })
            .catch(e => console.log(e));
    }, [setData, userId]);

    const accept = (friendId) => {
        setShowConfirmDialog(true);
        setFriendId(friendId);
        statusTittel = "Godkjenn forespørsel?";
        statusBesk = "Ønsker du å godkjenne denne vennen?";
        statuss = 1;
    };

    const denied = (friendId) => {
        setShowConfirmDialog(true);
        setFriendId(friendId);
        statusTittel = "Slett forespørsel?";
        statusBesk = "Ønsker du å slette denne vennen?";
        statuss = 2;
    };

    function reply() {
        console.log("replyrequest", userId, sessionStorage.getItem('userId'));
        axios.post(sessionStorage.getItem('API_URL')+'/user/' + userId + '/friendRequest/' + friendId + '/' + statuss)
            .then((response) => {
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

                    />
                </Grid>
            ))}
        </Grid>


    );
};

export default FriendRequestList;