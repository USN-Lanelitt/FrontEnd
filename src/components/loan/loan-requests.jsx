import React, {useEffect, useState} from 'react';
import Grid from "@material-ui/core/Grid";
import LoanRequestNotification from "./loan-request-notification";
import axios from "axios";
import LoanCard from "./loan-card";
import LoanReplyCard from "./loan-reply-card";


//her er den listen i notification

const LoanRequestList = () => {
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
                        assetname={loan.assets.assetName}
                        description={loan.assets.description}
                        assetImage={loan.assets.assetImages}
                        loanStatus={loan.statusLoan.status}
                        selectedDate={loan.dateStart}
                        selectedDate2={loan.dateEnd}
                        onDenied={() => denied(item.user1.id)}
                        onAccept={() => accept(item.user1.id)}
                    />

                </Grid>
            ))}
        </Grid>
    );
};

export default LoanRequestList;

