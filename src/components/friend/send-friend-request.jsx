import axios from "axios";
import React from "react";

/* laget av Nicole*/

export default function sendRequest(userId, userId2, setShowStatusMessage, setStatusMessage, setStatusMessageSeverity) {

    console.log("friendRequest", sessionStorage.getItem('userId'));
    axios.post('/user/' + userId + '/request/' + userId2)
        .then((response) => {
            if (response.status === 200) {
                console.log(response.data);
            }
            setShowStatusMessage(true);
            setStatusMessage("Sendt venneforespørsel!")
            setStatusMessageSeverity("success");
        })
        .catch(e => {
            console.log(e);
            setShowStatusMessage(true);
            setStatusMessage("Ups, dette gikk ikke helt etter planen!");
        });
}