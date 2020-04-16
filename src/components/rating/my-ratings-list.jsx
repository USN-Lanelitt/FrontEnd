import React, {useEffect, useState} from 'react';
import Grid from "@material-ui/core/Grid";
import axios from "axios";
import MyRatingsCard from "./my-ratings-card";

const MyRatingsList = () => {
    const [userId, setId] = useState(sessionStorage.getItem('userId'));
    const [data, setData] = useState([]);

    useEffect(() => {
        console.log("unratedLoans", sessionStorage.getItem('userId'));
        axios.get(sessionStorage.getItem('API_URL')+'/myRating/'+userId)
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
            <Grid container spacing={3} justify="center">
                {
                    data.map(loan => (
                            <Grid item key={loan.id}>
                                <MyRatingsCard
                                    loanId={loan.id}
                                    firstname={loan.loans.assets.users.firstName}
                                    middlename={loan.loans.assets.users.middleName}
                                    lastname={loan.loans.assets.users.lastName}
                                    assetId={loan.loans.assets.id}
                                    assetname={loan.loans.assets.assetName}
                                    selectedDate={loan.loans.dateStart}
                                    selectedDate2={loan.loans.dateEnd}
                                    comment={loan.commentFromBorrower}
                                    rating={loan.ratingAsset}
                                />
                            </Grid>
                        )
                    )
                }
            </Grid>
        </React.Fragment>
    );
};

export default MyRatingsList;