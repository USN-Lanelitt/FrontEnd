import React, {useEffect, useState} from 'react';
import Grid from "@material-ui/core/Grid";
import LoanRequestNotification from "./loan-request-notification";
import axios from "axios";


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
            {data.map(item => (
                <Grid item key={item} xs={12}>

                    <LoanRequestNotification
                        firstname={item.user1.firstName}
                        lastname={item.user1.lastName}
                        middlename={item.user1.middleName}
                        imageUrl={item.user1.profileImage}
                        friendId={item.user1.id}
                        onDenied={() => denied(item.user1.id)}
                        onAccept={() => accept(item.user1.id)}

                    />
                </Grid>
            ))}
        </Grid>
    );
};

export default LoanRequestList;

