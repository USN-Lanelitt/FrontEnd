/*Nicole har jobbet med denne siden*/

import axios from "axios";

export default function sendMessageNewChat(userId, userId2) {
        /* getChat funksjonen*/
    console.log("sendMessageNewChat", sessionStorage.getItem('userId'));
    axios.get('/users/chat/'+userId+'/'+userId2)
        .then(response => {
            if (response.status === 200) {
                console.log(response.data);
            }
        })
        .catch(e => console.log(e));
}
