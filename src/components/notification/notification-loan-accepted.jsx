import React, {useEffect, useState} from 'react';
import Grid from "@material-ui/core/Grid";
import axios from "axios";
import NotificationLoanRequest from "./notificatoin-loan-request";
import {
    notificationFriendRequest,
    notificationRefreshLoanAccepted
} from "../../feature/Notification/notification-refresh";
import FriendRequest from "../friend/friend-request";

const NotificationLoanAccepted = () => {
    const [userId, setId] = useState(sessionStorage.getItem('userId'));
    const [data, setData] = useState([]);

    useEffect(()=>{
        getAcceptedLoanRequests();
   }, []);

    const getAcceptedLoanRequests = () => {
        console.log("getAcceptedRequests", userId, sessionStorage.getItem('userId'));
        axios.get( '/user/' + userId + '/loanAccepted')
            .then((response) => {
                notificationRefreshLoanAccepted(userId, setData)
                if (response.status === 200) {
                    console.log(response.data);
                    setData(response.data);
                }
            })
            .catch(error => console.log(error))
    };

    return (
        <Grid container spacing={4}>
            {data.map(loan => (
                <Grid item key={loan.id} xs={12}>

                    <NotificationLoanRequest
                        firstname={loan.assets.users.firstName}
                        middlename={loan.assets.users.middleName}
                        lastname={loan.assets.users.lastName}
                        imageUrl={loan.assets.users.assetImages}
                        loanStatus={loan.statusLoan.status}
                        selectedDate={loan.dateStart}
                        selectedDate2={loan.dateEnd}
                        refresh={() => notificationRefreshLoanAccepted(userId, setData)}

                    />
                </Grid>
            ))}
        </Grid>
    );
};

export default NotificationLoanAccepted;


