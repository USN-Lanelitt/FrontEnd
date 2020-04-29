import React from 'react';
import Grid from "@material-ui/core/Grid";
import NotificationLoanSendtCard from "./notification-loan-send-card";


//her er den listen i notification iconet

const NotificationLoanSendt = ({data}) => {

    return (
        <Grid container spacing={4}>
            {data.map(loan => (
                <Grid item key={loan.id} xs={12}>

                    <NotificationLoanSendtCard
                        firstname={loan.assets.users.firstName}
                        lastname={loan.assets.users.lastName}
                        middlename={loan.assets.users.middleName}
                        imageUrl={loan.assets.users.assetImages}
                        selectedDate={loan.dateStart}
                        selectedDate2={loan.dateEnd}
                    />
                </Grid>
            ))}
        </Grid>
    );
};

export default NotificationLoanSendt;

