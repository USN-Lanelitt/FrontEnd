import React from 'react';
import FriendRequest from "./friend-request";
import Grid from "@material-ui/core/Grid";
import data from "./data";

const FriendRequestList = () => {
    return (

        <Grid container spacing={4}>
            {data.map(item => (
                <Grid item key={item} xs={12}>

                    <FriendRequest
                        firstname={item.firstname}
                        lastname={item.lastname}
                        middlename={item.middlename}
                        imageUrl={item.imageUrl}
                    />
                </Grid>


            ))}
        </Grid>


    );
};

export default FriendRequestList;