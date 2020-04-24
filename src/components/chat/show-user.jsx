import React, {useEffect, useState} from "react";
import axios from "axios";
import Box from "@material-ui/core/Box";
import Avatar from "@material-ui/core/Avatar";
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import {Link} from "react-router-dom";
import AssetCard from "../../feature/Assets/asset-card";
import {Container} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    smallAvatar: {
        width: '30px',
        height: '30px',
    },
}));

const ShowUser = ({userId2})  =>{
    const classes = useStyles();
    const [selectedUser, setSelectedUser] = useState('');
    const [user, setUser] = useState('');

    useEffect(() => {
        console.log("showUser", sessionStorage.getItem('userId'));
        axios.post('/getUser/'+ userId2)
            .then((response) => {
                if (response.status === 200) {
                    console.log(response.data);
                    setUser(response.data);
                }
            })
            .catch(e => console.log(e));
    }, []);

    return (
        <Grid container spacing={3} justify="center">
            {user && user.id}
        </Grid>
    )
}

export default ShowUser;