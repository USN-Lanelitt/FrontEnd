import React, {useEffect, useState} from "react";
import axios from "axios";
import Box from "@material-ui/core/Box";
import Avatar from "@material-ui/core/Avatar";
import {makeStyles} from "@material-ui/core/styles";

export default function GetUser (userId2, setUser) {
    console.log("getUserObject", sessionStorage.getItem('userId'));
    axios.get('/getUser/'+ userId2)
        .then((response) => {
            if (response.status === 200) {
                console.log(response.data);
                setUser(response.data);
            }
        })
        .catch(e => console.log(e));

};
