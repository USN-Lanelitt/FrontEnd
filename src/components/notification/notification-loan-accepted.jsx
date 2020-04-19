import React, {useEffect, useState} from 'react';
import Grid from "@material-ui/core/Grid";
import LoanRequestNotification from "./loan-request-notification";
import {makeStyles} from "@material-ui/core/styles";
import axios from "axios";
import NotificationLoanRequest from "./notificatoin-loan-request";

const useStyles = makeStyles(theme => ({

}));

const NotificationLoanAccepted = () => {
    const classes = useStyles();
    const [userId, setId] = useState(sessionStorage.getItem('userId'));
    const [data, setData] = useState([]);

    useEffect(()=>{
        getAcceptedLoanRequests();
    })

    const getAcceptedLoanRequests = () => {
        console.log("getAcceptedRequests", userId, sessionStorage.getItem('userId'));
        axios.get(sessionStorage.getItem('API_URL') + '/user/' + userId + '/loanAccepted')
            .then((response) => {

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
                        /* onDenied={() => denied(loan.user1.id)}*/

                    />
                </Grid>
            ))}
        </Grid>
    );
};

export default NotificationLoanAccepted;

