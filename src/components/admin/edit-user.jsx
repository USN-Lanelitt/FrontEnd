import axios from "axios";

function editUser(id, nickname, firstname, middlename, lastname, email, usertype, active, newsSubscription) {
    console.log("editUser ", id, sessionStorage.getItem('userId'));
    axios.post('/user/'+id+'/edit', {
        nickname: nickname,
        firstname: firstname,
        middlename: middlename,
        lastname: lastname,
        email: email,
        usertype: usertype,
        active: active,
        newsSubscription: newsSubscription,
        }).then((response) => {
            if (response.status === 200) {
                console.log(response.data);
            }
        })
        .catch(e => console.log(e));
}

export default editUser;
