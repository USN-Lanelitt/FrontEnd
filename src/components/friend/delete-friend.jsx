import axios from "axios";

export default function deleteFriend(userId, userId2, setShowStatusMessage, setStatusMessage, setStatusMessageSeverity) {
    console.log("deleteFriend", sessionStorage.getItem('userId'));
    axios.post('/user/'+ userId +'/friend/'+ userId2 + '/delete')
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