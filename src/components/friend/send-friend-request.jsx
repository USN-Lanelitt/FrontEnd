import axios from "axios";
import {Box} from "@material-ui/core";
import React, {useState} from "react";



export  default function sendRequest(userId, id, setShowStatusMessage, setStatusMessage, setStatusMessageSeverity) {

    console.log("friendRequest", sessionStorage.getItem('userId'));
    axios.post('/user/'+ userId +'/request/'+ id)
        .then((response) => {
            if (response.status === 200) {
                console.log(response.data);
            }
            console.log("TESTING");
                setShowStatusMessage(true);
                setStatusMessage("Sendt venneforespørsell!")
                setStatusMessageSeverity("success");
            console.log("TESTING2");

        })
        .catch(e => {
            console.log(e);
            setShowStatusMessage(true);
            setStatusMessage("Ups, dette gikk ikke helt etter planen!");
        });
}