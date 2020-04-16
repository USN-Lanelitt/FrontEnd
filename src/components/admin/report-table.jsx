import React, {useState} from 'react';
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import Button from "@material-ui/core/Button";
import ConfirmDialog from "../user/confirm-dialog";
import {Visibility} from "@material-ui/icons";
import {useTranslation} from "react-i18next";


const ReportTable = ({reports}) => {
    const { t } = useTranslation();
    const [title, setTitle] = React.useState(false);
    const [text, setText] = React.useState(false);
    const [showConfirmDialog, setShowConfirmDialog] = useState(false);
    console.log('reportModal');

    const onShow = (subject, comment) => {
        setShowConfirmDialog(true);
        setTitle(subject);
        setText(comment);
        console.log('reportshow');
    };

    function onClose() {
        setShowConfirmDialog(false);
        console.log('reportclose');
    }

    return (
        <TableContainer component={Paper}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>{t('report-table.1')}</TableCell>
                        <TableCell>{t('report-table.2')}</TableCell>
                        <TableCell>{t('report-table.3')}</TableCell>
                        <TableCell>{t('report-table.4')}</TableCell>
                        <TableCell>{t('report-table.5')}</TableCell>
                        <TableCell>{t('report-table.6')}</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        reports.map((report) =>
                            (<TableRow key={report.id}>
                                <TableCell component="th" scope="row">
                                    <Visibility onClick={() => onShow(report.subject, report.comment)}/>
                                </TableCell>
                                <TableCell> {report.id}</TableCell>
                                <TableCell>{report.reporter.id}</TableCell>
                                <TableCell>{report.reported.id}</TableCell>
                                <TableCell>{report.subject}</TableCell>
                                <TableCell>{report.timestamp}</TableCell>
                                <TableCell>
                                    <ConfirmDialog
                                        title={title}

                                        message={text}
                                        onConfirm={onClose}
                                        confirmButtonText="Lukk"
                                        open={showConfirmDialog}
                                    />
                                </TableCell>
                            </TableRow>)
                        )
                    }
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default ReportTable;
