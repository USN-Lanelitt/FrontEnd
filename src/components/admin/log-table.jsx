import React, {useState} from 'react';
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import {useTranslation} from "react-i18next";
import {makeStyles} from "@material-ui/core/styles";
import {Box} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    outer: {
        width: '80%',
        height: '500px'
    },
    inner:{
        width: '100%',
        height: '440px',
        display: "flex",
        justifyContent: 'space-evenly',

    },
    list: {
        padding: '0px',
        height: '100%',
        overflow: "auto",
    }
}));

const LogTable = ({log}) => {
    const { t } = useTranslation();
    const classes = useStyles();

    return (
        <TableContainer className={classes.outer} component={Paper}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow display="flex" alignItems="center">
                        <TableCell m={1} gutterBottom >Logg</TableCell>
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
