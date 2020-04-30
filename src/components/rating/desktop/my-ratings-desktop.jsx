/*Nicole har jobbet med denne siden*/

import React, {useEffect, useState} from 'react';
import Grid from "@material-ui/core/Grid";
import axios from "axios";
import Container from "@material-ui/core/Container";
import RatingCardDesktop from "./rating-card-desktop";

const MyRatingsDesktop = () => {
    const [userId, setId] = useState(sessionStorage.getItem('userId'));
    const [data, setData] = useState([]);

    useEffect(() => {
        console.log("myRating", sessionStorage.getItem('userId'));
        axios.get('/myRating/' + userId)
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
                                <Grid item key={loan.id} >
                                    <RatingCardDesktop
                                        userId2={loan.loans.assets.users.id}
                                        firstname={loan.loans.assets.users.firstName}
                                        middlename={loan.loans.assets.users.middleName}
                                        lastname={loan.loans.assets.users.lastName}
                                        assetname={loan.loans.assets.assetName}
                                        selectedDate={loan.loans.dateStart}
                                        selectedDate2={loan.loans.dateEnd}
                                        comment={loan.commentFromBorrower}
                                        rating={loan.ratingAsset}
                                        type={0}
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

export default MyRatingsDesktop;
