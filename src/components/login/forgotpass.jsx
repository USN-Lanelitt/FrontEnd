import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';
import Link from "@material-ui/core/Link";
import {useTranslation} from "react-i18next";

// ------ Farhad ------

export default function ForgotPassword() {
    const { t } = useTranslation();
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Link href="#" variant="body2">
                <Typography variant="outlined" color="primary" onClick={handleClickOpen}>

                </Typography>
            </Link>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">{t('forgotpass.2')}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        {t('forgotpass.3')}
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label={t('forgotpass.4')}
                        type="email"
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        {t('forgotpass.5')}
                    </Button>
                    <Button onClick={handleClose} color="primary">
                        {t('forgotpass.6')}
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
