import React, {useState} from 'react';
import Button from "@material-ui/core/Button";
import {CircularProgress} from "@material-ui/core";
import Box from "@material-ui/core/Box";
import axios from "axios";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import ReportTable from "./report-table";

const ReportList = () => {
    const [reports, setReports] = useState([]);
    const [loading, setLoading] = useState(false);

    function getReports() {
        console.log("getreports", sessionStorage.getItem('userId'));
        setLoading(true);
        axios.get('/getReports')
        .then((response) => {
            if (response.status === 200) {
                console.log(response.data);
                setReports(response.data);
                setLoading(false);
            }
        })
        .catch((e) => {
            console.log(e);
        });

        console.log('antall rapporter');
        console.log(reports.length);
    }

    return (
        <div>
            <h2>Rapporterte saker</h2>
            <Box m={2}>
                <ButtonGroup color="primary" variant="contained">
                    <Button onClick={() => getReports()}>Hent saker</Button>
                    <Button onClick={() => setReports([])}>Fjern</Button>
                </ButtonGroup>
            </Box>

            <Box m={4} display="flex" alignItems="center" flexDirection="column">
                {loading ? <CircularProgress size={60}/> : <ReportTable reports={reports}/>}
            </Box>

        </div>
    );
};

export default ReportList;
