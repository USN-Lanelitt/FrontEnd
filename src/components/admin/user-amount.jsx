import React, {useState} from "react";
import axios from "axios";
import ReportAmount from "./raport-amount";

const UserAmount  = () => {
    const [userId, setId] = useState(sessionStorage.getItem('userId'));
    const [userNr, setUserNr] = useState();
    axios.get('/users/amount')
        .then((response) => {
            if (response.status === 200) {
                setUserNr(response.data);
            }
        })
        .catch((e) => {
            console.log(e);
        }, [setUserNr], [userId]);

    console.log('antall brukere');
    console.log(userNr);

    return (
        <div>
            {userNr}
        </div>
    );
};

export default UserAmount;

