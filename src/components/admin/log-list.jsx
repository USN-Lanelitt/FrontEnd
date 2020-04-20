import React, {useEffect, useState} from 'react';
import Box from "@material-ui/core/Box";
import axios from "axios";
import LogTable from "./log-table";

const LogList = () => {
    const [logs, setLogs] = useState([]);

    useEffect(() => {
        console.log("getlog", sessionStorage.getItem('userId'));
        axios.get('/getLogg')
            .then((response) => {
                if (response.status === 200) {
                    console.log(response.data);
                    setLogs(response.data);
                    console.log('getloggggggggg');
                }
            })
            .catch((e) => {
                console.log(e);
            });

    },[]);

    return (
        <div>
            <Box m={4} display="flex" alignItems="center" flexDirection="column">
                { logs ?  'tom' : <LogTable log={logs}/> }
            </Box>

        </div>
    );
};

export default LogList;