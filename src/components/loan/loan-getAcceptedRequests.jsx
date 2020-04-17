import React, {useEffect, useState} from 'react';
import Grid from "@material-ui/core/Grid";
import LoanRequestNotification from "./loan-request-notification";
import axios from "axios";
import {notificationRefresh1} from "../../feature/Notification/notification-refresh";
import {useParams} from "react-router";


//her er den listen i notification iconet

const LoanGetAcceptedRequests = () => {
    const [userId, setId] = useState(sessionStorage.getItem('userId'));
    const [dataAccept, setDataAccept] = useState([]);


    useEffect( () => {
        getAcceptedRequests();
    }, [setDataAccept,userId]);


    const getAcceptedRequests = () => {
        console.log("getAcceptedRequests", userId, sessionStorage.getItem('userId'));
        axios.get(sessionStorage.getItem('API_URL')+'/user/'+userId+'/loanAccepted')
            .then((response) => {

                if (response.status === 200) {
                    console.log(response.data);
                    setDataAccept(response.data);
                }
            })
            .catch(error => console.log(error))


    }


    return (
        <Grid container spacing={4}>
            {
                dataAccept.map(loan => (
                <Grid item key={loan.id} xs={12}>

                    <LoanRequestNotification
                        firstname={loan.assets.users.firstName}
                        middlename={loan.assets.users.middleName}
                        lastname={loan.assets.users.lastName}
                        loanStatus={loan.statusLoan.status}

                    />
                </Grid>
            ))}
        </Grid>
    );
};

export default LoanGetAcceptedRequests;

