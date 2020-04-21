import React, {useEffect, useState} from 'react';
import Grid from "@material-ui/core/Grid";
import LoanRequestNotification from "./loan-request-notification";
import axios from "axios";
import LoanCard from "./loan-card";
import LoanReplyCard from "./loan-reply-card";
import FriendRequest from "../friend/friend-request";
import ConfirmDialog from "../profile/confirm-dialog";
import {notificationRefresh, notificationRefresh1} from "../../feature/Notification/notification-refresh";

//her er den listen i notification

let statuss = 0;
let statusTittel = "";
let statusBesk = "";

const LoanRequests = () => {
    const [userId, setId] = useState(sessionStorage.getItem('userId'));
    const [data, setData] = useState([]);
    const [loanId, setLoanId] = useState(null);

    useEffect(() => {
        console.log("", userId, sessionStorage.getItem('userId'));
        axios.get('/user/'+userId+'/loanRequest')
            .then((response) => {
                notificationRefresh1 (userId, setData)
                if (response.status === 200) {
                    console.log(response.data);
                    setData(response.data);
                }
            })
            .catch(e => console.log(e));
    }, [setData, userId]);

    function ReplyLoan (loanId,statuss) {
        console.log("", userId, sessionStorage.getItem('userId'));
        axios.post('/user/'+userId+'/loanRequest/'+loanId+'/'+statuss)
            .then((response) => {
                notificationRefresh1 (userId, setData)
                if (response.status === 200) {
                    console.log(response.data);
                }
            })
            .catch(e => console.log(e));
    }
    return (
        <Grid container spacing={4}>
            {data.map(user => (
                <Grid item key={user.id}>
                    <LoanReplyCard
                        firstname={user.users.firstName}
                        middlename={user.users.middleName}
                        lastname={user.users.lastName}
                        assetname={user.assets.assetName}
                        assetImages={"https://source.unsplash.com/random"}
                        selectedDate={user.dateStart}
                        selectedDate2={user.dateEnd}
                        onDenied={() => ReplyLoan(user.id,2)}
                        onAccept={() => ReplyLoan(user.id,1)}
                        refresh={() => notificationRefresh1(userId, setData)}
                    />
                </Grid>
            ))}
        </Grid>
    );
};

export default LoanRequests;

