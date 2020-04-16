import axios from "axios";

export const fetchAssets = (userId, setAssets) => {
    axios.get(sessionStorage.getItem('API_URL')+"/assets/getMyAsset/" + userId)
        .then(result => {
            if (result.status === 200) {
                console.log(result.data);
                setAssets(result.data);
            }
        })
        .catch(e => console.log(e));
}