import React, {useEffect, useState} from 'react';
import Grid from "@material-ui/core/Grid";
import LoanRequestNotification from "./loan-request-notification";
import FriendRequestCard from "../friend/friend-requestCard";
import axios from "axios";
import {notificationRefresh} from "../../feature/Notification/notification-refresh";


let statuss=0;
let statusTittel="";
let statusBesk="";

const LoanGetDeniedRequests = ({data}) => {
    const [userId, setId] = useState(sessionStorage.getItem('userId'));

    return (
        <Grid container spacing={4} >
            {data.map(loan => (
                    <Grid item key={loan.id} xs={12}>

                        <LoanRequestNotification
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

export default LoanGetDeniedRequests;