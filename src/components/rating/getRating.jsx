/*Nicole har jobbet med denne siden*/

import axios from "axios";

export const getRatings = (assetId, setRating) => {
    console.log("getRating", sessionStorage.getItem('userId'));
    axios.get('/assets/' + assetId + '/AverageRating')
        .then(result => {
            setRating(result.data);
        })
        .catch(e => console.log(e));
};
