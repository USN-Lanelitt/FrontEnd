import React, {useEffect, useState} from 'react';
import FriendRequest from "./friend-request";
import Grid from "@material-ui/core/Grid";
import data from "./data";
import app from "../../fire";
import axios from "axios";

const FriendRequestList = () => {

    const [id, setId] = useState(sessionStorage.getItem('userId'));
    const [data, setData] = useState([]);


    useEffect(() => {
        console.log("hello from Notification", id, sessionStorage.getItem('userId'));
        axios.get('/user/'+id+'/friendRequests')
            .then(result => {
                console.log(result.data);
                setData(result.data);
            })
            .catch(e => console.log(e));
    }, [setData, id]);





    return (

        <Grid container spacing={4}>
            {data.map(item => (
                <Grid item key={item} xs={12}>

                    <FriendRequest
                        firstname={item.firstName}
                        lastname={item.lastName}
                        middlename={item.middleName}
                        imageUrl={item.imageUrl}
                    />
                </Grid>


            ))}
        </Grid>


    );
};

export default FriendRequestList;