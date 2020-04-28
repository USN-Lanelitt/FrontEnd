import axios from "axios";

export default function deleteFriend(userId, userId2, setShowStatusMessage, setStatusMessage, setStatusMessageSeverity) {
    console.log("deleteFriend", sessionStorage.getItem('userId'));
    axios.delete('/user/'+ userId +'/friend/'+ userId2 + '/delete')
        .then((response) => {
            if (response.status === 200) {
                console.log(response.data);
            }
                setShowStatusMessage(true);
                setStatusMessage("Venn slettet!")
                setStatusMessageSeverity("success");
        })
        .catch(error => {
            console.log(error)
            setShowStatusMessage(true);
            setStatusMessage("Ups, dette gikk ikke helt etter planen!");})
    ;

}