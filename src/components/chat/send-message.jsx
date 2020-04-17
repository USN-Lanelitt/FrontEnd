import axios from "axios";

export default function sendMessage(userId, userId2) {
        /* getChat funksjonen*/
    console.log(sessionStorage.getItem('API_URL')+"sendMessage", sessionStorage.getItem('userId'));
    axios.get(sessionStorage.getItem('API_URL')+'/users/chat/'+userId+'/'+userId2)
        .then(result => {
            console.log(result.data);
        })
        .catch(e => console.log(e));
}