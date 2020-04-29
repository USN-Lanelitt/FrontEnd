import React from 'react';
import Grid from "@material-ui/core/Grid";
import LoanRequestNotification from "./loan-request-notification";

/*Laget av Mirsa*/

const LoanGetAcceptedRequests = ({data}) => {

    return (
        <Grid container spacing={4}>
            {data.map(loan => (
                <Grid item key={loan.id} xs={12}>

                    <LoanRequestNotification
                        firstname={loan.assets.users.firstName}
                        middlename={loan.assets.users.middleName}
                        lastname={loan.assets.users.lastName}
                        imageUrl={loan.assets.users.assetImages}
                        loanStatus={loan.statusLoan.status}
                        selectedDate={loan.dateStart}
                        selectedDate2={loan.dateEnd}
                    />
                </Grid>
            ))}
        </Grid>
    );
};

export default LoanGetAcceptedRequests;

