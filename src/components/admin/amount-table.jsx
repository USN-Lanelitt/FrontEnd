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
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles({
    table: {
        maxWidth: 600,
    },

});

const AmountTable = () => {
    const { t } = useTranslation();
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
                                {t('amount-table.1')}
                            </TableCell>
                            <TableCell>
                                <AssetAmount/>
                                {"\n"}
                                {t('amount-table.2')}
                            </TableCell>
                            <TableCell>
                                <ReportAmount/>
                                {"\n"}
                                {t('amount-table.3')}
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