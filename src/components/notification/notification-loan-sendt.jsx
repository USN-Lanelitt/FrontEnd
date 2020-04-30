import React from 'react';
import Grid from "@material-ui/core/Grid";
import NotificationLoanSendtCard from "./notification-loan-send-card";


//her er den listen i notification iconet/*Laget av Mirsa*/

const NotificationLoanSendt = ({data}) => {

    return (
        <Grid container spacing={4}>
            {data.map(loan => (
                <Grid item key={loan.id} xs={12}>

                    <NotificationLoanSendtCard
                        id={loan.id}
                        firstname={loan.assets.users.firstName}
                        middlename={loan.assets.users.middleName}
                        imageUrl={loan.assets.users.imageUrl}
                        lastname={loan.assets.users.lastName}
                        selectedDate={loan.dateStart}
                        selectedDate2={loan.dateEnd}
                    />
                </Grid>
            ))}
        </Grid>
    );
};

export default NotificationLoanSendt;

