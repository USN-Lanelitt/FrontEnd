import React, {useEffect, useState} from 'react';
import Grid from "@material-ui/core/Grid";
import axios from "axios";
import LoanSendRequestNotificationCard from "./loan-send-request-notificationCard";
import {notificationRefreshLoanSendt} from "../../feature/Notification/notification-refresh";
import Box from "@material-ui/core/Box";

/*Her er det kortet der du ser de sendte forespørsenene om lån du har sendt  i "varsel" i sidebaren. Programmert av Mirsa*/

const LoanGetSendtRequests = () => {
    const [userId, setId] = useState(sessionStorage.getItem('userId'));
    const [data, setData] = useState([]);

    useEffect(() => {
        getSendtRequests();
    }, []);

    const getSendtRequests = () => {
        console.log("", userId, sessionStorage.getItem('userId'));
        axios.get('/user/' + userId + '/loanSent')
            .then((response) => {
                notificationRefreshLoanSendt(userId, setData);
                if (response.status === 200) {
                    console.log(response.data);
                    setData(response.data);
                }
            })
            .catch(e => console.log(e));
    };
    return (
        <Grid>
            {data.map(loan => (
                <Grid item key={loan}>
                    <LoanSendRequestNotificationCard
                        firstname={loan.assets.users.firstName}
                        middlename={loan.assets.users.middleName}
                        lastname={loan.assets.users.lastName}
                        assetname={loan.assets.assetName}
                        description={""}
                        assetImages={loan.assets.assetImages[0].imageUrl}
                        selectedDate={loan.dateStart}
                        selectedDate2={loan.dateEnd}
                        refresh={() => notificationRefreshLoanSendt(userId, setData)}
                    />
                </Grid>
            ))}
        </Grid>
    );
};

export default LoanGetSendtRequests;