import axios from "axios";

export default function showChat(userId, userId2, setSelectedChat) {
    console.log("getChat", userId, sessionStorage.getItem('userId'));
    axios.get('/users/chat/' + userId + '/' + userId2)
        .then(result => {
            console.log(result.data);
            setSelectedChat(result.data);
        })
        .catch(e => console.log(e));
}