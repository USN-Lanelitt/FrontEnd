import React, {useEffect, useState} from 'react';
import FriendCard from "../../components/friend/friend-card";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import axios from "axios";
import app from "../../fire";
import ConfirmDialog from "../../components/profile/confirm-dialog";
import sendMessage from "../../components/chat/send-message";
import getFriend from "../../components/friend/friend-profile";


const useStyles = makeStyles(theme => ({

    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(5, 0, 4),
    },

}));

const FriendAll = () => {
    const classes = useStyles();
    const user = app.auth().currentUser;
    const [userId, setId] = useState(sessionStorage.getItem('userId'));
    const [data, setData] = useState([]);
    const [friendId, setFriendId] = useState(null);
    const [showConfirmDialog, setShowConfirmDialog] = useState(false);
    const [selectedChat, setSelectedChat] = useState([]);

    useEffect(() => {
            AllFriends();
    },[setData, userId]);

    function AllFriends(){
        console.log("hello from AllFriends", userId, sessionStorage.getItem('userId'));
        axios.get(sessionStorage.getItem('API_URL')+'/user/' + userId + '/friends')
            .then(result => {
                console.log(result.data);
                setData(result.data);
            })
            .catch(e => console.log(e));
    }

    const remove = (friendId) => {
        setShowConfirmDialog(true);
        setFriendId(friendId);
    };

    function onDeleteFriendComfirm() {
        console.log("deletefriend", userId, sessionStorage.getItem('userId'));
        axios.post(sessionStorage.getItem('API_URL')+'/user/' + userId + '/friend/' + friendId + '/delete')
            .then((response) => {
                if (response.status === 200) {
                    console.log(response.data);
                }

            })
            .catch(e => console.log(e));
        setShowConfirmDialog(false);
        AllFriends();
    }

    function onDeleteFriendCancel() {
        setShowConfirmDialog(false);
    }

    return (
        <React.Fragment>
            <div className={classes.heroContent}>
                <Container maxWidth="sm">
                    <Typography component="h2" variant="h2" align="center" color="textPrimary" gutterBottom>
                        Mine Venner
                    </Typography>
                </Container>
            </div>
            <Container>

                <ConfirmDialog title="Slette venn?"
                               message="Ønsker du å slette denne vennen?"
                               onConfirm ={onDeleteFriendComfirm}
                               onNotConfirm={onDeleteFriendCancel}
                               confirmButtonText="Ja"
                               notConfirmButtonText="Nei"
                               open={showConfirmDialog}
                />

                <Grid container spacing={4}>
                    {data.map(item => (
                        <Grid item key={item.user2.id} xs={12} sm={6} md={4}>

                            <FriendCard
                                id={item.user2.id}
                                firstname={item.user2.firstName}
                                lastname={item.user2.lastName}
                                middlename={item.user2.middleName}
                                imageUrl={item.user2.profileImage}
                                friendId={item.user2.id}
                                onRemove={() => remove(item.user2.id)}
                                getChat={() => sendMessage(userId, item.user2.id)}


                            />
                        </Grid>

                    ))}
                </Grid>

            </Container>
        </React.Fragment>


    );

};
export default FriendAll;