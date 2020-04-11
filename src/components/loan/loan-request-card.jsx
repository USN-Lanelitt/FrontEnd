import React, {useState} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import LoanCard from "./loan-card";


//her er det kort med ventende forespørsel/avist - kort



const LoanRequestCard = ({firstname, middlename, lastname, title, description, imageUrl, status, selectedDate, selectedDate2}) => {

    const [data, setData] = useState([]);


    return (
        <Grid container spacing={3} justify="center">

            {
               data.map(item => (
                        <Grid item>
                            <LoanCard
                                firstname={item.firstname}
                                middlename={item.middlename}
                                lastname={item.lastname}
                                title={item.title}
                                description={item.description}
                                imageUrl={item.imageUrl}
                                status={item.status}
                                selectedDate={item.selectedDate}
                                selectedDate2={item.selectedDate2}/>
                        </Grid>
                    )
                )
            }

        </Grid>


    );
};

export default LoanRequestCard;