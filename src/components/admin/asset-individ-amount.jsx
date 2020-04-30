/*Nicole har jobbet med denne siden*/

import React, {useState} from "react";
import axios from "axios";

const AssetAmount  = () => {
    const [userId, setId] = useState(sessionStorage.getItem('userId'));
    const [assetNr, setAssetNr] = useState();
    axios.get('/assets/ AssetAmount/'+userId)
        .then((response) => {
            if (response.status === 200) {
                setAssetNr(response.data);
            }
        })
        .catch((e) => {
            console.log(e);
        }, [setAssetNr], [userId]);

    console.log('antall asset');
    console.log(assetNr);
    return (
        <div>
            {assetNr}
        </div>
    );
};

export default AssetAmount;
