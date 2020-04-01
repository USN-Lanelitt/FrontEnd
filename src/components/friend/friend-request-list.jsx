import React, {useEffect, useState} from 'react';
import FriendRequest from "./friend-request";
import Grid from "@material-ui/core/Grid";
import data from "./data";
import app from "../../fire";
import axios from "axios";
import MyAssetsCard from "../profile/my-assets-card";
import {Container} from "@material-ui/core";
import ConfirmDialog from "../profile/confirm-dialog";

const FriendRequestList = () => {
    const [data, setData] = useState([]);
    const [userId, setId] = useState(sessionStorage.getItem('userId')); //min id
    const [friendId, setFriendId] = useState(null);
    const [showConfirmDialog, setShowConfirmDialog] = useState(false);


    useEffect(() => {
        console.log("getuserrequest", userId, sessionStorage.getItem('userId'));
        axios.get('/user/' + userId + '/friendRequests')
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
    };

    const denied = (friendId) => {
        setShowConfirmDialog(true);
        setFriendId(friendId);
    };

    function reply(status) {
        console.log("replyrequest", userId, sessionStorage.getItem('userId'));
        axios.post('/user/' + userId + '/friendRequest/' + friendId + '/' + status)
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
            {data.map(item => (
                <Grid item key={item} xs={12}>
                    <Container>

                        <ConfirmDialog title="Godkjenn forespørsel ?"
                                       message="Ønsker du å godkjenne denne vennen?"
                                       onConfirm={reply(1)}
                                       onNotConfirm={onReplyCancel}
                                       confirmButtonText="Ja"
                                       notConfirmButtonText="Nei"
                                       open={showConfirmDialog}
                        />



                        <FriendRequest
                            firstname={item.user1.firstName}
                            lastname={item.user1.lastName}
                            middlename={item.user1.middleName}
                            imageUrl={item.user1.profileImage}
                            friendId={item.user1.id}
                            onDenied={() => denied(item.user1.id)}
                            onAccept={() => accept(item.user1.id)}

                        />
                    </Container>
                </Grid>

                ))}
                </Grid>

                );
            };

            export default FriendRequestList;