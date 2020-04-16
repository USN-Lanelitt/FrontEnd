import axios from "axios";


export default function setRating(userId, loanId, newRating) {
        console.log("rateAsset", sessionStorage.getItem('userId'));
        axios.post(sessionStorage.getItem('API_URL')+'/assets/'+loanId+'/rateAsset/'+userId+'/'+newRating)
            .then(result => {
                console.log(result.data);

            })
            .catch(e => console.log(e));
};