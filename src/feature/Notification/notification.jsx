import React, {useEffect, useState} from 'react';
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import FriendRequestCard from "../../components/friend/friend-requestCard";
import Divider from "@material-ui/core/Divider";
import app from "../../fire";
import axios from "axios";
import ConfirmDialog from "../../components/profile/confirm-dialog";


//siden på mobil, (en hel side)
let statuss=0;
let statusTittel="";
let statusBesk="";
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
    const [data, setData] = useState([]);
    const [friendId, setFriendId] = useState(null);
    const [userId, setId] = useState(sessionStorage.getItem('userId')); //min id
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
        statusTittel="Godkjenn forespørsel?";
        statusBesk="Ønsker du å godkjenne denne vennen?";
        statuss=1;
    };

    const denied = (friendId) => {
        setShowConfirmDialog(true);
        setFriendId(friendId);
        statusTittel="Slett forespørsel?";
        statusBesk="Ønsker du å slette denne vennen?";
        statuss=2;
    };

    function reply() {
        console.log("replyrequest", userId, sessionStorage.getItem('userId'));
        axios.post('/user/' + userId + '/friendRequest/' + friendId + '/' +statuss)
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

            <Container>

                <ConfirmDialog title={statusTittel}
                               message={statusBesk}
                               onConfirm ={reply}
                               onNotConfirm={onReplyCancel}
                               confirmButtonText="Ja"
                               notConfirmButtonText="Nei"
                               open={showConfirmDialog}
                />

                <Grid container spacing={4}>
                    {data.map(item => (
                        <Grid item key={item} xs={12} sm={6} md={4}>

                            <FriendRequestCard
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
            </Container>

            <Container maxWidth="sm">
                <Typography className={classes.text} variant="h5" align="center" color="textSecondary" paragraph>

                    Låneforespørsler
                    <Divider/>
                </Typography>


            </Container>


        </React.Fragment>
    );
};

export default Notification;