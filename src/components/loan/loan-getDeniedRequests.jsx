import React, {useEffect, useState} from 'react';
import axios from "axios";
import Grid from "@material-ui/core/Grid";
import LoanRequestNotification from "./loan-request-notification";

const LoanGetDeniedRequests = () => {
    const [userId, setId] = useState(sessionStorage.getItem('userId'));
    const [dataDenied, setDataDeniend] = useState([]);


    useEffect( () => {
        getDeniedRequests();



    }, [setDataDeniend,userId]);

    const getDeniedRequests = () => {
        console.log("getDeniedRequests", userId, sessionStorage.getItem('userId'));
        axios.get('/user/'+userId+'/loanDenied')
            .then((response) => {
                console.log("hellooooo2");
                if (response.status === 200) {
                    console.log(response.data);
                    setDataDeniend(response.data);
                }
            })
            .catch(error => console.log(error))
        console.log("hellooooo3");
    }

    return (
        <Grid container spacing={4} >
            {
                dataDenied.map(loan => (
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

export default LoanGetDeniedRequests;