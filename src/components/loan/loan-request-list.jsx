import React, {useEffect, useState} from 'react';
import Grid from "@material-ui/core/Grid";
import LoanRequestNotification from "./loan-request-notification";
import axios from "axios";

//her er den listen i notification /*Laget av Mirsa*/

const LoanRequestList = () => {
    const [userId, setId] = useState(sessionStorage.getItem('userId'));
    const [data, setData] = useState([]);

    return (
        <Grid container spacing={3} justify="center">
            {data.map(user => (
                <Grid item key={user}>

                    <LoanRequestNotification
                        firstname={user.users.firstName}
                        middlename={user.users.middleName}
                        lastname={user.users.lastName}
                        assetname={user.assets.assetName}
                        dateStart={user.dateStart}
                        dateEnd={user.dateEnd}
                    />
                </Grid>
            ))}
        </Grid>
    );
};

export default LoanRequestList;

