import React, {useEffect, useState} from 'react';
import Grid from "@material-ui/core/Grid";
import axios from "axios";
import Container from "@material-ui/core/Container";
import NewRatingsCardMobile from "./new-ratings-card-mobile";

const NewRatingsMobile = () => {
    const [userId, setId] = useState(sessionStorage.getItem('userId'));
    const [data, setData] = useState([]);

    useEffect(() => {
        console.log("unratedLoans", sessionStorage.getItem('userId'));
        axios.get('/unratedLoans/'+userId)
            .then((response) => {
                if (response.status === 200) {
                    setData(response.data);
                }
            })
            .catch(e => console.log(e));
    }, [setData, userId]);

    return (
        <React.Fragment>
            <Container>
                <Grid container spacing={3} justify="center">
                    {
                        data.map(loan => (
                                <Grid item key={loan.id}>
                                    <NewRatingsCardMobile
                                        loanId={loan.id}
                                        firstname={loan.assets.users.firstName}
                                        middlename={loan.assets.users.middleName}
                                        lastname={loan.assets.users.lastName}
                                        assetId={loan.assets.id}
                                        assetname={loan.assets.assetName}
                                        selectedDate={loan.dateStart}
                                        selectedDate2={loan.dateEnd}
                                    />
                                </Grid>
                            )
                        )
                    }
                </Grid>
            </Container>
        </React.Fragment>
    );
};

export default NewRatingsMobile;
