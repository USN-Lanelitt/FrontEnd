/*Nicole har jobbet med denne siden*/

import React, {useState} from 'react';
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import ConfirmDialog from "../user/confirm-dialog";
import {Visibility} from "@material-ui/icons";
import {makeStyles} from "@material-ui/core/styles";
import {Box} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    outer: {
        minHeight: '400px'
    },
    inner:{
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

const ReportTable = ({reports}) => {
    const [title, setTitle] = React.useState(false);
    const [text, setText] = React.useState(false);
    const [showConfirmDialog, setShowConfirmDialog] = useState(false);
    const classes = useStyles();

    const onShow = (subject, comment) => {
        setShowConfirmDialog(true);
        setTitle(subject);
        setText(comment);
    };

    function onClose() {
        setShowConfirmDialog(false);
    }

    return (
        <TableContainer className={classes.outer} component={Paper}>
            <Table aria-label="simple table">
                <TableHead>
                    <Box style={{margin:20}} fontSize={20} >
                        Reports
                    </Box>

                    <TableRow>
                        <TableCell>Actions</TableCell>
                        <TableCell>Id</TableCell>
                        <TableCell>From user</TableCell>
                        <TableCell>About user</TableCell>
                        <TableCell>Subject</TableCell>
                        <TableCell>Timestamp</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody className={classes.list}>
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
                                        confirmButtonText="Close"
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
