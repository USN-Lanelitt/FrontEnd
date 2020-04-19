import React, {useState} from 'react';
import Grid from "@material-ui/core/Grid";
import LoanRequestNotification from "./loan-request-notification";
import {makeStyles} from "@material-ui/core/styles";

//her er den listen i notification iconet
let statuss = 0;
let statusTittel = "";
let statusBesk = "";

const useStyles = makeStyles(theme => ({

}));

const LoanGetAcceptedRequests = ({data}) => {
    const classes = useStyles();
    const [userId, setId] = useState(sessionStorage.getItem('userId'));



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
                       /* onDenied={() => denied(loan.user1.id)}*/

                    />
                </Grid>
            ))}
        </Grid>
    );
};

export default LoanGetAcceptedRequests;

