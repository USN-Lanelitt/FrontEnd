import axios from "axios";

export  default function sendRequest(userId, id) {
    console.log("friendRequest", sessionStorage.getItem('userId'));
    axios.post('/user/'+ userId +'/request/'+ id)
        .then((response) => {
            if (response.status === 200) {
                console.log(response.data);
            }
        })
        .catch(e => console.log(e));
}