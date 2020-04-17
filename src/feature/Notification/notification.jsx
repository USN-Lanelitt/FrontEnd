import React, {useEffect, useState} from 'react';
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import FriendRequestCard from "../../components/friend/friend-requestCard";
import Divider from "@material-ui/core/Divider";
import axios from "axios";
import ConfirmDialog from "../../components/profile/confirm-dialog";
import LoanRequests from "../../components/loan/loan-requests";
import {notificationRefresh} from "./notification-refresh";
import {useTranslation} from "react-i18next";


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
    const { t } = useTranslation();
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


    function reply(friendId, statuss) {
        console.log("replyrequest", userId, sessionStorage.getItem('userId'));
        axios.post('/user/' + userId + '/friendRequest/' + friendId + '/' +statuss)
            .then((response) => {
                notificationRefresh (userId, setData)
                if (response.status === 200) {
                    console.log(response.data);
                }

            })
            .catch(e => console.log(e));
        setShowConfirmDialog(false);
    }

    return (
        <React.Fragment>
            <div className={classes.heroContent}>
                <Container maxWidth="sm">
                    <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                        {t('notification.1')}
                    </Typography>
                </Container>
            </div>
            <Container>
                <Typography className={classes.text} variant="h5" align="center" color="textSecondary" paragraph>
                    {t('notification.2')}
                    <Divider/>
                </Typography>
            </Container>

            <Container>
                <Grid container spacing={4}>
                    {data.map(item => (
                        <Grid item key={item}>
                            <FriendRequestCard
                                id={item.user1.id}
                                firstname={item.user1.firstName}
                                lastname={item.user1.lastName}
                                middlename={item.user1.middleName}
                                imageUrl={item.user1.profileImage}
                                friendId={item.user1.id}
                                onDenied={() => reply(item.user1.id,2)}
                                onAccept={() => reply(item.user1.id,1)}
                                refresh={() => notificationRefresh(userId, setData)}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Container>

            <Container >
                <Typography className={classes.text} variant="h5" align="center" color="textSecondary" paragraph>
                    {t('notification.3')}
                    <Divider/>
                </Typography>
                <LoanRequests/>
            </Container>
        </React.Fragment>
    );
};

export default Notification;
