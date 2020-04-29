import axios from "axios";

 export const notificationRefreshFriendRequest = (userId, setData) =>{
    axios.get('/user/' + userId + '/friendRequests')
        .then((response) => {
            if (response.status === 200) {
                console.log(response);
                setData(response.data);
            }
        })
        .catch(e => console.log(e));
}

 export const notificationRefresh1 = (userId, setData) =>{
    axios.get('/user/'+userId+'/loanRequest')
        .then((response) => {
            if (response.status === 200) {
                console.log(response.data);
                setData(response.data);
            }
        })
        .catch(e => console.log(e));
}

export const notificationRefreshLoanDenien = (userId, setData) =>{
    axios.get('/user/' + userId + '/loanDenied')
        .then((response) => {
            if (response.status === 200) {
                console.log(response.data);
                setData(response.data);
            }
        })
        .catch(error => console.log(error));

}
export const notificationRefreshLoanAccepted = (userId, setData) =>{
axios.get('/user/' + userId + '/loanAccepted')
    .then((response) => {
        if (response.status === 200) {
            console.log(response.data);
            setData(response.data);
        }
    })
    .catch(error => console.log(error))
}

export const notificationFriendRequest = (userId, friendId, statuss) => {
    axios.post('/user/' + userId + '/friendRequest/' + friendId + '/' + statuss)
        .then((response) => {
            if (response.status === 200) {
                console.log(response.data);
            }

        })
        .catch(e => console.log(e));
}

export const notificationRefreshLoanSendt = (userId, setData) => {
axios.get( '/user/' + userId + '/loanAccepted')
    .then((response) => {
        if (response.status === 200) {
            console.log(response.data);
            setData(response.data);
        }
    })
    .catch(error => console.log(error))
};

 export const getAllFriends = (userId, setData) => {
     console.log("hello from AllFriends", userId, sessionStorage.getItem('userId'));
     axios.get('/user/' + userId + '/friends')
         .then(result => {
             console.log(result.data);
             setData(result.data);
         })
         .catch(e => console.log(e));

}