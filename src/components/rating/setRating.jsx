/*Nicole har jobbet med denne siden*/

import axios from "axios";

export default function setRating(userId, loanId, newRating, comment) {
    console.log("rateAsset", sessionStorage.getItem('userId'));
    axios.post('/assets/'+loanId+'/rateAsset/'+userId+'/'+newRating, {
        comment:comment
        })
        .catch(e => console.log(e));
}
