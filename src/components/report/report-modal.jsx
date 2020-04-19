import React, {useState} from 'react';
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Fade from "@material-ui/core/Fade";
import Modal from "@material-ui/core/Modal";
import axios from "axios";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import useInput from "../div/use-input";

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
        width:'100%',
        marginBottom: 20,
        marginTop: 25,
    },
    textarea: {
        width:'100%',
        marginBottom: 20,
    },
    button:{
        width: 475,
        padding:0,
    },
}));

const ReportModal = ({userId2}) => {
    const classes = useStyles();

    const [userId, setId] = useState(sessionStorage.getItem('userId'));
    const { value:subject, bind:bindSubject} = useInput('');
    const { value:comment, bind:bindComment} = useInput('');
    const [open, setOpen] = React.useState(false);

    function report() {
        console.log("report", userId, sessionStorage.getItem('userId'));
        axios.post('/user/'+ userId +'/report/' + userId2, {
            subject:subject,
            comment:comment
        }).then((response) => {
            if (response.status === 200) {
                console.log(response.data);
            }
        })
        .catch(e => console.log(e));
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
                    Rapporter sak
                </Typography>
                <form className={classes.form}  onSubmit={handleSubmit}>
                    <TextField
                        label="Emne"
                        variant="outlined"
                        size="small"
                        className={classes.textfield}
                        {...bindSubject}
                    />
                    <TextField
                        multiline
                        rows={10}
                        label="Kommentar"
                        variant="outlined"
                        className={classes.textarea}
                        {...bindComment}
                    />
                    <Button
                        type="submit"
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
        <div>
            <Box display="flex" justifyContent="flex-end"  className={classes.button} >
                <Button
                    type="submit"
                    color="primary"
                    style={{padding:2}}
                    onClick={handleOpen}
                >
                    <Box style={{margin:0}} fontSize={10}>
                        RAPPORTER
                    </Box>
                </Button>
            </Box>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                closeAfterTransition
            >
                {body}
            </Modal>
        </div>
    );
};

export default ReportModal;