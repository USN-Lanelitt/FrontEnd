import React, {useEffect, useState} from 'react';
import Box from "@material-ui/core/Box";
import axios from "axios";
import ReportTable from "./report-table";

const ReportList = () => {
    const [reports, setReports] = useState([]);

    useEffect(() => {
        console.log("getreports", sessionStorage.getItem('userId'));
        axios.get('/getReports')
        .then((response) => {
            if (response.status === 200) {
                console.log(response.data);
                setReports(response.data);
            }
        })
        .catch((e) => {
            console.log(e);
        });

    },[]);

    return (
        <div>
                <Box m={4} display="flex" alignItems="center" flexDirection="column">
                    <ReportTable reports={reports}/>
                </Box>

        </div>
    );
};

export default ReportList;
