import React, {useEffect, useState} from 'react';
import Grid from "@material-ui/core/Grid";
import LoanCard from "./loan-card";
import axios from "axios";

//her er det kort med godkjente forespørsel (alle lånene personen har) (jeg låner denne av en vennn)

const LoanAccepted = () => {
    const [userId, setId] = useState(sessionStorage.getItem('userId'));
    const [data, setData] = useState([]);

    useEffect(() => {
        console.log("", userId, sessionStorage.getItem('userId'));
        axios.get('/user/'+userId+'/loanAccepted')
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

            {
               data.map(loan => (
                        <Grid item key={loan.id}>
                            <LoanCard
                                firstname={loan.assets.users.firstName}
                                middlename={loan.assets.users.middleName}
                                lastname={loan.assets.users.lastName}
                                assetname={loan.assets.assetName}
                                description={loan.assets.description}
                                assetImage={loan.assets.assetImages}
                                loanStatus={loan.statusLoan.status}
                                selectedDate={loan.dateStart}
                                selectedDate2={loan.dateEnd}
                                />

                        </Grid>
                    )
                )
            }

        </Grid>


    );
};

export default LoanAccepted;