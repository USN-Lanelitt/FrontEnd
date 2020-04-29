/**
 * Linda Loftsgarden
 */

import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}



export default function StatusMessage({show,message, severity, onClose}) {



    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        onClose(false)
    };

    return (
        <>
            <Snackbar open={show} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
                <Alert onClose={handleClose} severity={severity}>
                    {message}
                </Alert>
            </Snackbar>
        </>
    );
}