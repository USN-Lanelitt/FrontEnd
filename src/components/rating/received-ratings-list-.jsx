import React, {useEffect, useState} from 'react';
import Grid from "@material-ui/core/Grid";
import axios from "axios";
import ReceivedRatingsCard from "./received-ratings-card";

const ReceivedRatingsList = () => {
    const [userId, setId] = useState(sessionStorage.getItem('userId'));
    const [data, setData] = useState([]);

    useEffect(() => {
        console.log("unratedLoans", sessionStorage.getItem('userId'));
        axios.get('/myAssetsRating/'+userId)
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
                                <ReceivedRatingsCard
                                    loanId={loan.id}
                                    firstname={loan.loans.users.firstName}
                                    middlename={loan.loans.users.middleName}
                                    lastname={loan.loans.users.lastName}
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

export default ReceivedRatingsList;