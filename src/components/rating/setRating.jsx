import axios from "axios";


export default function setRating(userId, assetId, newRating) {
    console.log("getChat", userId, sessionStorage.getItem('userId'));
    axios.get('/assets/'+assetId+'/rateAsset/'+userId+'/'+newRating)
        .then(result => {
            console.log(result.data);
        })
        .catch(e => console.log(e));
};