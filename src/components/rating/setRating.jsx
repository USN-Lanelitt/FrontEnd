import axios from "axios";


export default function setRating(userId, loanId, newRating, comment, setRedirect) {
    console.log("rateAsset", sessionStorage.getItem('userId'));
    axios.post('/assets/'+loanId+'/rateAsset/'+userId+'/'+newRating, {
        comment:comment
        })
        .then(result => {
            console.log(result.data);
            setTimeout(() => setRedirect(true), 1000) ;
        })
        .catch(e => console.log(e));
}
