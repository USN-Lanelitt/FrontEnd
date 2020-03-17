import React, {Fragment, useState} from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import ImgMediaCard from "./friend-card";
import {makeStyles} from "@material-ui/core/styles";
import FriendAll from "../../Pages/Friend/friend-all";

const useStyles = makeStyles(theme => ({

}));
/*
const [values, setValues] = useState({
    fornavn: '',
    midnavn:'',
    etternavn:'',
});

 */

export default function FriendRequest() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Fragment>
            <Button variant="outlined" color="secondary" onClick={handleClickOpen}>
                Mine venner
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >

                <DialogContent>
                    <FriendAll/>
                </DialogContent>

            </Dialog>
        </Fragment>

    );
}
