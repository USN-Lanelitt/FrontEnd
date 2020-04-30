/*Nicole har jobbet med denne siden*/

import React from "react";
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

const ReportTitle = () => {
    const classes = useStyles();
    return (
        <div>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">

                    <TableBody>

                        <TableRow>
                            <TableCell component="th" scope="row">
                                Reports
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>

        </div>


    );
};

export default ReportTitle;