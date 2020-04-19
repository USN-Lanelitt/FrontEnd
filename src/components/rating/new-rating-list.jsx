import React, {useEffect, useState} from 'react';
import Grid from "@material-ui/core/Grid";
import axios from "axios";
import NewRatingCard from "./new-rating-card";

const NewRatingsList = () => {
    const [userId, setId] = useState(sessionStorage.getItem('userId'));
    const [data, setData] = useState([]);

    useEffect(() => {
        console.log("unratedLoans", sessionStorage.getItem('userId'));
        axios.get('/unratedLoans/'+userId)
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
                                <NewRatingCard
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
        </React.Fragment>
    );
};

export default NewRatingsList;