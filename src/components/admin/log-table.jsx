/*Nicole har jobbet med denne siden sammen med John*/

import React, {useState} from 'react';
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import {makeStyles} from "@material-ui/core/styles";
import {Box} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    outer: {
        minWidth: '700px',
        height: '500px'
    },
    inner:{
        minWidth: '100%',
        height: '440px',
        display: "flex",
        justifyContent: 'space-evenly',

    },
    list: {
        minWidth: '100%',
        padding: '1%',
        height: '100%',
        overflow: "auto",
    }
}));

const LogTable = ({log}) => {
    const classes = useStyles();

    return (

        <TableContainer className={classes.outer} component={Paper}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow display="flex" alignItems="center">
                        <TableCell m={1} gutterBottom >Log</TableCell>
                    </TableRow>
                </TableHead>
                <Box className={classes.inner}>
                <TableBody className={classes.list}>
                    {log.map((logs) =>
                        <TableRow>{logs}</TableRow>
                    )}
                </TableBody></Box>

            </Table>
        </TableContainer>

    );
};

export default LogTable;
