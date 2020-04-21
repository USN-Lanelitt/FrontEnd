import React, {useState} from 'react';
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import {useTranslation} from "react-i18next";


const LogTable = ({logs}) => {
    const { t } = useTranslation();

    return (
        <TableContainer component={Paper}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Logg</TableCell>
                    </TableRow>
                </TableHead>
 {/*               <TableBody>
                    {
                        logs.map((log) =>
                            (<TableRow key={log}>
                                <TableCell> {log}</TableCell>
                            </TableRow>)
                        )
                    }
                </TableBody>*/}
            </Table>
        </TableContainer>
    );
};

export default LogTable;
