import React, {useEffect, useState} from 'react';
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import FriendRequestCard from "../../components/friend/friend-requestCard";
import Divider from "@material-ui/core/Divider";
import axios from "axios";
import LoanRequests from "../../components/loan/loan-requests";
import {notificationRefreshFriendRequest} from "./notification-refresh";
import {useTranslation} from "react-i18next";
import NotificationLoanDenied from "../../components/notification/notification-loan-denied";
import NotificationLoanAccepted from "../../components/notification/notification-loan-accepted";
import ConfirmDialog from "../../components/profile/confirm-dialog";
import LoanGetSendtRequests from "../../components/loan/loan-getSendtRequests";
import Progress from "../../components/progress";

/*Her er den siden med notifikasjon i sidebaren - Mirsa*/


let statuss = 0;
let statusTittel = "";
let statusBesk = "";


const useStyles = makeStyles(theme => ({
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


        },[setData, userId]);

    const accept = (friendId) => {
        setShowConfirmDialog(true);
        setFriendId(friendId);
        statusTittel = "Godkjenn forespørsel?";
        statusBesk = "Ønsker du å legge til denne vennen?";
        statuss = 1;
    };

    const denied = (friendId) => {
        setShowConfirmDialog(true);
        setFriendId(friendId);
        statusTittel = "Avslå forespørsel?";
        statusBesk = "Ønsker du å avslå denne vennen?";
        statuss = 2;
    };

    function reply() {
        console.log("replyrequest", userId, sessionStorage.getItem('userId'));
        axios.post('/user/' + userId + '/friendRequest/' + friendId + '/' +statuss)
            .then((response) => {
                notificationRefreshFriendRequest (userId, setData);
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
            <Container>
                <Typography className={classes.text} variant="h5" align="center" color="textSecondary" paragraph>
                    {t('notification.1')}
                    <Divider/>
                </Typography>
            </Container>

            <ConfirmDialog title={statusTittel}
                           message={statusBesk}
                           onConfirm={reply}
                           onNotConfirm={onReplyCancel}
                           confirmButtonText="Ja"
                           notConfirmButtonText="Nei"
                           open={showConfirmDialog}
            />
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
                                onDenied={() => denied(item.user1.id)}
                                onAccept={() => accept(item.user1.id)}
                                refresh={() => notificationRefreshFriendRequest(userId, setData)}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Container>

            <Container>


                <Typography className={classes.text} variant="h5" align="center" color="textSecondary" paragraph>
                    {t('notification.2')}
                    <Divider/>
                </Typography>

                <LoanRequests/>

                <Typography className={classes.text} variant="h5" align="center" color="textSecondary" paragraph>
                    {t('notification.5')}
                <Divider/>
            </Typography>

                <LoanGetSendtRequests/>

                <Typography className={classes.text} variant="h5" align="center" color="textSecondary" paragraph>
                    {t('notification.3')}
                    <Divider/>
                </Typography>

                <NotificationLoanAccepted/>

                <Typography className={classes.text} variant="h5" align="center" color="textSecondary" paragraph>
                    {t('notification.4')}
                    <Divider/>
                </Typography>

                <NotificationLoanDenied/>

            </Container>
        </React.Fragment>
    );
};

export default Notification;
