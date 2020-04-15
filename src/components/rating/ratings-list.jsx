import React, {useEffect, useState} from 'react';
import Grid from "@material-ui/core/Grid";
import axios from "axios";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import RatingCard from "./rating-card";


const useStyles = makeStyles(theme => ({
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
}));

const RatingList = () => {
    const classes = useStyles();
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
        <React.Fragment>
            <Grid container spacing={3} justify="center">
                {
                    data.map(loan => (
                            <Grid item key={loan.id}>
                                <RatingCard
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

export default RatingList;