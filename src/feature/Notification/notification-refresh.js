import axios from "axios";
import MyAssetsList from "../../components/profile/my-assets-list";

 export const notificationRefresh = (userId, setData) =>{
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
    axios.get('/user/' + userId + '/loanDenied')
        .then((response) => {
            if (response.status === 200) {
                console.log(response.data);
                setData(response.data);
            }
        })
        .catch(error => console.log(error));

}