/*Nicole har jobbet med denne siden*/

import React from "react";
import AssetAmount from "./asset-amount";
import ReportAmount from "./raport-amount";
import UserAmount from "./user-amount";
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles({
    table: {
        maxWidth: 600,
    },

});

const AmountTable = () => {
    const classes = useStyles();
    return (
        <div>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">

                    <TableBody>

                        <TableRow>
                            <TableCell component="th" scope="row">
                                <UserAmount/>
                                {"\n"}
                                Users
                            </TableCell>
                            <TableCell>
                                <AssetAmount/>
                                {"\n"}
                                Assets
                            </TableCell>
                            <TableCell>
                                <ReportAmount/>
                                {"\n"}
                                Reports
                            </TableCell>
                            <TableCell>

                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>

        </div>


    );
};

export default AmountTable;