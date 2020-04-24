import React, {useEffect, useState} from 'react';
import Grid from "@material-ui/core/Grid";
import LoanCard from "./loan-card";
import axios from "axios";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import {getRatings} from "../rating/getRating";
import {useTranslation} from "react-i18next";

//her er det kort med godkjente forespørsel (alle lånene personen har) (jeg låner denne av en vennn)
const useStyles = makeStyles(theme => ({

    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },

}));

const LoanAccepted = () => {
    const classes = useStyles();
    const [userId, setId] = useState(sessionStorage.getItem('userId'));
    const [data, setData] = useState([]);
    const { t } = useTranslation();


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
        <React.Fragment>
        <div className={classes.heroContent}>

            <Container maxWidth="sm">
                <Typography component="h2" variant="h2" align="center" color="textPrimary" gutterBottom>
                    {t('loan-accepted.1')}
                </Typography>
            </Container>
        </div>
        <Grid container spacing={3} justify="center">

            {
               data.map(loan => (
                        <Grid item key={loan.id}>
                            <LoanCard
                                firstname={loan.assets.users.firstName}
                                middlename={loan.assets.users.middleName}
                                lastname={loan.assets.users.lastName}
                                assetname={loan.assets.assetName}
                                assetImage={loan.assets.assetImages}
                                loanStatus={loan.statusLoan.status}
                                selectedDate={loan.dateStart}
                                selectedDate2={loan.dateEnd}
                                assetId={loan.assets.id}
                                />

                        </Grid>
                    )
                )
            }

        </Grid>
        </React.Fragment>

    );
};

export default LoanAccepted;
