import React, {useState} from 'react';
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Fade from "@material-ui/core/Fade";
import Modal from "@material-ui/core/Modal";
import axios from "axios";
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import ReportIcon from "@material-ui/icons/Report";
import useInput from "../../components/div/use-input";
import {useTranslation} from "react-i18next";
import StatusMessage from "../../components/profile/status-message";

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    card: {
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(4, 4, 3),
        width: 300,
        height: 400,
    },
    textfield: {
        width: '100%',
        marginBottom: 20,
        marginTop: 25,
    },
    textarea: {
        width: '100%',
        marginBottom: 20,
    },
    button: {
        width: 475,
        padding: 0,
    },
}));

const AssetReport = ({userId2}) => {
    const classes = useStyles();
    const {t} = useTranslation();
    const [userId, setId] = useState(sessionStorage.getItem('userId'));
    const {value: subject, bind: bindSubject} = useInput('');
    const {value: comment, bind: bindComment} = useInput('');
    const [open, setOpen] = React.useState(false);
    const [showStatusMessage, setShowStatusMessage] = useState(false);
    const [statusMessage, setStatusMessage] = useState("");
    const [statusMessageSeverity, setStatusMessageSeverity] = useState("info");

    function report() {
        console.log("report", userId, sessionStorage.getItem('userId'));
        axios.post('/user/' + userId + '/report/' + userId2, {
            subject: subject,
            comment: comment
        }).then((response) => {
            if (response.status === 200) {
                setShowStatusMessage(true);
                setStatusMessage("Rapportert!")
                setStatusMessageSeverity("success");
            }
        })
            .catch(error => {
                console.log(error)
                setShowStatusMessage(true);
                setStatusMessage("Ups, dette gikk ikke helt etter planen!");})
            .
                finally(() => setOpen(false));
                ;

    }

    const handleOpen = () => {
        setOpen(true);
    };

    const handleSubmit = () => {
        setOpen(false);
    };

    const body = (
        <Fade in={open}>
            <Card className={classes.card}>
                <Typography component="h1" variant="h5">
                    {t('assetReport.3')}
                </Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <TextField
                        label={t('assetReport.1')}
                        variant="outlined"
                        size="small"
                        className={classes.textfield}
                        {...bindSubject}
                    />
                    <TextField
                        multiline
                        rows={10}
                        label={t('assetReport.2')}
                        variant="outlined"
                        className={classes.textarea}
                        {...bindComment}
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={() => report()}
                    >
                        Send
                    </Button>
                </form>
            </Card>
        </Fade>
    );

    return (
        <>
            <StatusMessage show={showStatusMessage} message={statusMessage} severity={statusMessageSeverity}
                           onClose={setShowStatusMessage}/>
            <Button type="submit"
                    variant="contained"
                    startIcon={<ReportIcon/>}
                    onClick={handleOpen}
                    variant="text"
                    color="primary"
            >
                {t('assetOwner.2')}
            </Button>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                closeAfterTransition
            >
                {body}
            </Modal>
        </>
    );
};

export default AssetReport;