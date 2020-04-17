import axios from "axios";


export default function friendCheck(userId, userId2, setFriendStatus) {
    console.log("", userId, sessionStorage.getItem('userId'));
    axios.get(sessionStorage.getItem('API_URL')+'/user/'+userId+'/'+ userId2)
        .then(result => {
            console.log(result.data);
            setFriendStatus(result.data);
        })
        .catch(e => console.log(e));
};
