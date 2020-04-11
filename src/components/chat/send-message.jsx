import axios from "axios";

export default function sendMessage(message, userId, userId2) {
    console.log("sendMessage", sessionStorage.getItem('userId'));
    axios.post('/users/writeMessage/'+userId+'/'+userId2, {
        message: message
    })
        .then(result => {
            console.log(result.data);
        })
        .catch(e => console.log(e));
}