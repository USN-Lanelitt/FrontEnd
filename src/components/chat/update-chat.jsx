/*Nicole har jobbet med denne siden*/

import axios from "axios";

export default function updateChat(setSelectedChat) {
    console.log("getChat", userId, sessionStorage.getItem('userId'));
    axios.get('/users/chat/' + userId + '/' + userId2)
        .then(result => {
            console.log(result.data);
            setSelectedChat(result.data);
        })
        .catch(e => console.log(e));
}