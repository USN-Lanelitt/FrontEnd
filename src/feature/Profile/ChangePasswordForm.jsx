import React, {useCallback, useState} from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Grid from "@material-ui/core/Grid";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import {makeStyles} from "@material-ui/core/styles";
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import clsx from 'clsx';
import axios from "axios";
import app from "../../fire";


const useStyles = makeStyles(theme => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    input: {
        display: 'hidden',
    },
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    large: {
        width: theme.spacing(10),
        height: theme.spacing(10),
    },
}));
const user = app.auth().currentUser;

const ChangePasswordForm = ({history}) => {
    const handleUpdate = useCallback(async event => {
        event.preventDefault();
        let credential;
        // Henter verdier som er utfylt i tekst feltene på form skjema
        const {currentPassword, newPassword} = event.target.elements;
        // Sender ut info til API Url. Rekkefølge: 1.Symfony -> 2.Firebase.

        // Bruker må re-autentiseres for å kunne endre passord/epost og bli godkjent på Firebase. (Sikkerhetstiltak)
        // Prompt the user to re-provide their sign-in credentials
        user.reauthenticateWithCredential(credential).then(function () {
            // User re-authenticated.
        }).catch(function (error) {
            // An error happened.
        });
        axios.post('/url', {
            currentPassword: currentPassword.value,
            newPassword: newPassword.value
        })
            .then(res => {
                    //Symfony
                    console.log(res);
                    console.log(res.data);
                }
            )
            .then(
                //Firebase
                user.updatePassword(newPassword).then(function () {
                    // Update successful.
                })
            )
            .catch(function (error) {
                // An error happened.
                console.log(error)
            });
    }, [history]);

    const [open, setOpen] = React.useState(false);
    const [values, setValues] = useState({
        showPassword: false,
    });

    const classes = useStyles();
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleClickShowPassword = () => {
        setValues({...values, showPassword: !values.showPassword});
    };

    const handleMouseDownPassword = event => {
        event.preventDefault();
    };

    const handleChange = prop => event => {
        setValues({...values, [prop]: event.target.value});
    };

    return (
        <div>
            <Button variant="contained" color="primary" onClick={handleClickOpen}>
                Endre Passord
            </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Endre Passord</DialogTitle>
                <DialogContent onSubmit={handleUpdate}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <FormControl className={clsx(classes.margin, classes.textField)}
                                         fullWidth>
                                <InputLabel htmlFor="outlined-adornment-password" required>Nåværende
                                    passord</InputLabel>
                                <Input
                                    name="currentPassword"
                                    id="outlined-adornment-password"
                                    type={values.showPassword ? 'text' : 'password'}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                                edge="end"
                                            >
                                                {values.showPassword ? <Visibility/> : <VisibilityOff/>}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                    labelWidth={70}
                                />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl className={clsx(classes.margin, classes.textField)}
                                         fullWidth>
                                <InputLabel htmlFor="outlined-adornment-password" required>Ny Passord</InputLabel>
                                <Input
                                    name="newPassword"
                                    id="newPassword"
                                    type={values.showPassword ? 'text' : 'password'}
                                    onChange={handleChange}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                                edge="end"
                                            >
                                                {values.showPassword ? <Visibility/> : <VisibilityOff/>}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                    labelWidth={70}
                                />
                            </FormControl>
                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Avbrutt
                    </Button>
                    <Button type="submit" onClick={handleClose} color="primary">
                        Lagre
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default ChangePasswordForm;
