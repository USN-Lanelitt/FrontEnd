import React, {useEffect, useState} from 'react';
import Grid from "@material-ui/core/Grid";
import axios from "axios";
import RatingCardMobile from "./rating-card-mobile";

const ReceivedRatingsMobile = () => {
    const [userId, setId] = useState(sessionStorage.getItem('userId'));
    const [data, setData] = useState([]);

    useEffect(() => {
        console.log("myAssetsRating", sessionStorage.getItem('userId'));
        axios.get('/myAssetsRating/' + userId)
            .then((response) => {
                if (response.status === 200) {
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
                                <RatingCardMobile
                                    userId2={loan.loans.users.id}
                                    firstname={loan.loans.users.firstName}
                                    middlename={loan.loans.users.middleName}
                                    lastname={loan.loans.users.lastName}
                                    assetname={loan.loans.assets.assetName}
                                    selectedDate={loan.loans.dateStart}
                                    selectedDate2={loan.loans.dateEnd}
                                    comment={loan.commentFromBorrower}
                                    rating={loan.ratingAsset}
                                    type={1}
                                />
                            </Grid>
                        )
                    )
                }
            </Grid>
        </React.Fragment>
    );
};

export default ReceivedRatingsMobile;
