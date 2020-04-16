import React, {useEffect, useState} from 'react';
import Button from "@material-ui/core/Button";
import {CircularProgress} from "@material-ui/core";
import Box from "@material-ui/core/Box";
import axios from "axios";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import ReportTable from "./report-table";

const ReportList = () => {
    const [reports, setReports] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        console.log("getreports", sessionStorage.getItem('userId'));
        setLoading(true);
        axios.get(sessionStorage.getItem('API_URL')+'/getReports')
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
