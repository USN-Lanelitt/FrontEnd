import React, {useEffect, useState} from 'react';
import Grid from "@material-ui/core/Grid";
import LoanRequestNotification from "./loan-request-notification";
import axios from "axios";
import LoanCard from "./loan-card";
import LoanReplyCard from "./loan-reply-card";


//her er den listen i notification

const LoanRequests = ({firstname, middlename, lastname, assetname, assetImages, selectedDate, selectedDate2}) => {
    const [userId, setId] = useState(sessionStorage.getItem('userId'));
    const [data, setData] = useState([]);

    useEffect(() => {
        console.log("", userId, sessionStorage.getItem('userId'));
        axios.get('/user/’+userId+’/loanRequest')
            .then((response) => {
                if (response.status === 200) {
                    console.log(response.data);
                    setData(response.data);
                }
            })
            .catch(e => console.log(e));
    }, [setData, userId]);
    return (

        <Grid container spacing={3} justify="center">
            {data.map(user => (
                <Grid item key={user}>
                    <LoanReplyCard
                        firstname={user.users.firstName}
                        middlename={user.users.middleName}
                        lastname={user.users.lastName}
                        assetname={user.assets.assetName}
                        selectedDate={user.dateStart}
                        selectedDate2={user.dateEnd}

                    />

                </Grid>
            ))}
        </Grid>
    );
};

export default LoanRequests;

