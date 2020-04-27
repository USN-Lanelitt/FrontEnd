import axios from "axios";

function sendMessage(userId, userId2, message, setSelectedChat) {
        console.log("sendMessage", userId, sessionStorage.getItem('userId'));
        axios.post('/users/writeMessage/' + userId + '/' + userId2, {
            message: message
        })
            .then(result => {
                console.log(result.data);
                setSelectedChat(result.data);
            })
            .catch(e => console.log(e));
}

function updateChat(userId, userId2, setSelectedChat) {
    console.log("getChat", userId, sessionStorage.getItem('userId'));
    axios.get('/users/chat/' + userId + '/' + userId2)
        .then(result => {
            console.log(result.data);
            setSelectedChat(result.data);
        })
        .catch(e => console.log(e));
}

export {sendMessage, updateChat};