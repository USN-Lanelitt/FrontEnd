import React, {useEffect, useState} from 'react';
import Grid from "@material-ui/core/Grid";
import LoanCard from "./loan-card";
import axios from "axios";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";

//her er det kort med alle eiendeler som skal lånes til andre (alle godkjente)

const useStyles = makeStyles(theme => ({

    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },

}));


const LoanToFriends = () => {
    const classes = useStyles();
    const [userId, setId] = useState(sessionStorage.getItem('userId'));
    const [data, setData] = useState([]);

    useEffect(() => {
        console.log("", userId, sessionStorage.getItem('userId'));
        axios.get(sessionStorage.getItem('API_URL')+'/user/'+userId+'/loans')
            .then((response) => {
                if (response.status === 200) {
                    console.log(response.data);
                    setData(response.data);
                }
            })
            .catch(e => console.log(e));
    }, [setData, userId]);

    return (
        <React.Fragment>

            <div className={classes.heroContent}>
                <Container maxWidth="sm">
                    <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                        Mine utlånte eiendeler
                    </Typography>
                </Container>
            </div>
            <Grid container spacing={3} justify="center">
            {
                data.map(loan => (
                        <Grid item key={loan.id}>
                            <LoanCard
                                firstname={loan.users.firstName}
                                middlename={loan.users.middleName}
                                lastname={loan.users.lastName}
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

        </React.Fragment>
    );
};

export default LoanToFriends;