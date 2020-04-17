import React, {useState} from "react";
import axios from "axios";

const ReportAmount  = () => {
    const [userId, setId] = useState(sessionStorage.getItem('userId'));
    const [reportNr, setReportNr] = useState();
    axios.get('/report/amount')
        .then((response) => {
            if (response.status === 200) {
                setReportNr(response.data);
            }
        })
        .catch((e) => {
            console.log(e);
        }, [setReportNr], [userId]);

    console.log('antall rapporter');
    console.log(reportNr);

    return (
        <div>
            {reportNr}
        </div>
    );
};

export default ReportAmount;