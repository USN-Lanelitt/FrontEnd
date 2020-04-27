import axios from "axios";

export  default function sendRequest(userId, userId2, setShowStatusMessage, setStatusMessage, setStatusMessageSeverity) {
    console.log("friendRequest", sessionStorage.getItem('userId'));
    axios.post('/user/'+ userId +'/request/'+ userId2)
        .then((response) => {
            if (response.status === 200) {
                setShowStatusMessage(true);
                setStatusMessage("Rapportert!")
                setStatusMessageSeverity("success");
            }
        })
        .catch(error => {
            console.log(error)
            setShowStatusMessage(true);
            setStatusMessage("Ups, dette gikk ikke helt etter planen!");})
    ;

}