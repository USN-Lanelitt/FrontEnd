import axios from "axios";


export default function getChatUsers(userId, setChatUsers) {
console.log("getChatUsers", sessionStorage.getItem('userId'));
axios.get('/users/getChats/' + userId)
    .then(result => {
        console.log(result.data);
        setChatUsers(result.data);
    })
    .catch(e => console.log(e));
}