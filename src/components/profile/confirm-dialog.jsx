/**
 * Linda Loftsgarden
 */

import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function ConfirmDialog({
                                          title,
                                          message,
                                          onConfirm,
                                          onNotConfirm,
                                          confirmButtonText = "",
                                          notConfirmButtonText = "",
                                          open
                                      }) {

    return (
        <div>
            <Dialog
                open={open}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        {message}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={onNotConfirm} color="secondary" autoFocus>
                        {notConfirmButtonText}
                    </Button>
                    <Button onClick={onConfirm} color="secondary">
                        {confirmButtonText}
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}