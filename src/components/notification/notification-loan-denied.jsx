import React, {useEffect, useState} from 'react';
import Grid from "@material-ui/core/Grid";
import axios from "axios";
import NotificationLoanRequest from "./notificatoin-loan-request";

const NotificationLoanDenied = () => {
    const [userId, setId] = useState(sessionStorage.getItem('userId'));
    const [data, setData] = useState([]);



    useEffect(()=>{
        getDeniedLoanRequests();
    })

    const getDeniedLoanRequests = () => {
        console.log("getDeniedRequests", userId, sessionStorage.getItem('userId'));
        axios.get('/user/' + userId + '/loanDenied')
            .then((response) => {
                console.log("hellooooo2");
                if (response.status === 200) {
                    console.log(response.data);
                    setData(response.data);
                }
            })
            .catch(error => console.log(error))
    };

    return (
        <Grid container spacing={4} >
            {data.map(loan => (
                <Grid item key={loan.id} xs={12}>

                    <NotificationLoanRequest
                        firstname={loan.assets.users.firstName}
                        middlename={loan.assets.users.middleName}
                        lastname={loan.assets.users.lastName}
                        imageUrl={loan.assets.users.assetImages}
                        loanStatus={loan.statusLoan.status}


                    />
                </Grid>
            ))}
        </Grid>
    );
};

export default NotificationLoanDenied;