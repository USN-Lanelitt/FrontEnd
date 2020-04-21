import axios from "axios";

export default function deleteFriend(userId, id) {
    console.log("deleteFriend", sessionStorage.getItem('userId'));
    axios.post('/user/'+ userId +'/friend/'+ id + '/delete')
        .then((response) => {
            if (response.status === 200) {
                console.log(response.data);
            }
        })
        .catch(e => console.log(e));
}