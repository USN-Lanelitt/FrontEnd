import React, {useCallback, useState} from 'react';
import {makeStyles, withStyles} from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import IconButton from '@material-ui/core/IconButton';
import CardContent from '@material-ui/core/CardContent';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import CloseIcon from '@material-ui/icons/Close';
import Copyright from '../../components/home/Copyright';
import axios from "axios";
import app from "../../fire";
import EditTwoToneIcon from '@material-ui/icons/EditTwoTone';
import ProfileCard from "../../components/profile/profile-card";
import DateFnsUtils from "@date-io/date-fns";
import {KeyboardDatePicker, MuiPickersUtilsProvider} from "@material-ui/pickers";
import FormControl from "@material-ui/core/FormControl";
import clsx from "clsx";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";


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

const styles = theme => ({
    root: {
        margin: 0,
        padding: theme.spacing(2),
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    },
});

const DialogContent = withStyles(theme => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiDialogContent);

const DialogActions = withStyles(theme => ({
    root: {
        margin: 0,
        padding: theme.spacing(1),
    },
}))(MuiDialogActions);

const DialogTitle = withStyles(styles)(props => {
    const {children, classes, onClose, ...other} = props;

    return (
        <MuiDialogTitle disableTypography className={classes.root} {...other}>
            <Typography variant="h6">{children}</Typography>
            {onClose ? (
                <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                    <CloseIcon/>
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
});

const user = app.auth().currentUser;

const EditProfile = ({history}) => {
    const handleUpdate = useCallback(async event => {
        event.preventDefault();
        let credential;
        // Henter verdier som er utfylt i tekst feltene på form skjema
        const {nickname, phone, birthdate, address1, address2, zipcode, city, email, currentPassword, newPassword} = event.target.elements;
        // Sender ut info til API Url. Rekkefølge: 1.Symfony -> 2.Firebase.
        axios.post('/url', {
            nickname: nickname.value,
            phone: phone.value,
            birthdate: birthdate.value,
            address1: address1.value,
            address2: address2.value,
            zipcode: zipcode.value,
            city: city.value,
            email: email.value,
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
                // Bruker må re-autentiseres for å kunne endre passord/epost og bli godkjent på Firebase. (Sikkerhetstiltak)
                // Prompt the user to re-provide their sign-in credentials
                user.reauthenticateWithCredential(credential).then(function () {
                    // User re-authenticated.
                }).catch(function (error) {
                    // An error happened.
                })
            )
            .then(
                //Firebase
                user.updatePassword(newPassword.value).then(function() {
                    // Update successful.
                  })
            )
            .catch(function (error) {
                // An error happened.
                console.log(error)
            });
    }, [history]);

    const classes = useStyles();

    const [open, setOpen] = React.useState(false);

    const [values, setValues] = useState({
        showCurrentPassword: false,
        showNewPassword: false,
        validUserInput: false
    });

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const handleValidUserInput = props => event => {
        setValues({...values, validUserInput: !values.validUserInput});
    };

    const handleClickShowCurrentPassword = () => {
        setValues({...values, showCurrentPassword: !values.showCurrentPassword});
    };

    const handleClickShowNewPassword = () => {
        setValues({...values, showNewPassword: !values.showNewPassword});
    };

    const handleMouseDownPassword = event => {
        event.preventDefault();
    };

    const [selectedDate, setSelectedDate] = React.useState(new Date('2020-12-31'));

    const handleDateChange = date => {
        setSelectedDate(date);
        console.log(selectedDate);
    };

    const handleImageUpload = e => {
        const [file] = e.target.files;
        if (file) {
            console.log(file);
            let data = new FormData();
            data.append('file', file, file.fileName);
            data.append('userId', sessionStorage.getItem('userId'));

            axios.post('/profileimageUpload', data, {
                headers: {
                    'accept': 'application/json',
                    'Accept-Language': 'en-US,en;q=0.8',
                    'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
                }
            })
                .then((response) => {
                    //handle success
                    if (response.status == 200) { // 200 at api har gått bra
                        var aData = response.data;
                        if (aData['code'] == 200) {// da har lagring av bilde gått bra
                            console.log('Bildeopplasting ok');
                            console.log(aData['image']);
                            sessionStorage.setItem('profileImage', aData['image']);
                        } else if (aData['code'] == 400) {
                            alert('Feil ved bildeopplasting');
                        }
                    }
                }).catch((error) => {
                //handle error
            });
        }
    };


    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline/>
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <EditTwoToneIcon/>
                </Avatar>
                <Typography component="h1" variant="h5">
                    Rediger Profil Informasjon
                </Typography>

                <form onSubmit={handleUpdate} className={classes.form} noValidate>
                    <Grid container spacing={2}>
                        <Grid container
                              direction="row"
                              justify="center"
                              alignItems="center">
                            <CardContent>
                                <IconButton onClick={handleClickOpen}>
                                    <ProfileCard/>
                                </IconButton>
                                <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
                                    <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                                        Endre Profilbilde
                                    </DialogTitle>
                                    <DialogContent dividers>
                                        <Avatar src={"profileimages/" + sessionStorage.getItem('profileImage')}
                                                className={classes.large}/>
                                        <div className={classes.root}>

                                            <input type="file" accept="image/*" onChange={handleImageUpload}
                                                   multiple="false"/>

                                            <label htmlFor="contained-button-file">
                                                <Button variant="contained" color="primary" component="span">
                                                    Velg bilde
                                                </Button>
                                            </label>
                                        </div>
                                    </DialogContent>
                                    <DialogActions>
                                        <Button autoFocus onClick={handleClose} color="primary">
                                            Lagre
                                        </Button>
                                    </DialogActions>
                                </Dialog>
                            </CardContent>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                name="nickname"
                                fullWidth
                                autoFocus
                                id="nickname"
                                label="Visningsnavn"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                name="phone"
                                fullWidth
                                id="phone"
                                label="Telefon"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <KeyboardDatePicker
                                    name="birthdate"
                                    margin="normal"
                                    id="date-picker-dialog"
                                    label="Fødselsdato"
                                    fullWidth
                                    format="dd.MM.yyyy"
                                    value={selectedDate}
                                    onChange={handleDateChange}
                                    KeyboardButtonProps={{
                                        'aria-label': 'change date',
                                    }}
                                />
                            </MuiPickersUtilsProvider>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                name="address1"
                                required
                                fullWidth
                                id="sAddress"
                                label="Adresse"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                name="address2"
                                required
                                fullWidth
                                id="sAddress2"
                                label="Adresse 2"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                name="zipcode"
                                required
                                fullWidth
                                id="iZipcode"
                                label="Postkode"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                name="city"
                                required
                                fullWidth
                                id="sCity"
                                label="By"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                            >Lagre Endring
                            </Button>
                        </Grid>
                    </Grid>

                    <Grid container justify="flex-end">
                        <Grid item>
                        </Grid>
                    </Grid>
                </form>
            </div>
            <div className={classes.paper}>
                <Typography component="h1" variant="h5">
                    Endre Passord
                </Typography>

                <form onSubmit={handleUpdate} className={classes.form} noValidate>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <FormControl className={clsx(classes.margin, classes.textField)}
                                         fullWidth>
                                <InputLabel htmlFor="outlined-adornment-password" required>Nåværende
                                    passord</InputLabel>
                                <Input
                                    name="currentPassword"
                                    id="currentPassword"
                                    type={values.showCurrentPassword ? 'text' : 'password'}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowCurrentPassword}
                                                onMouseDown={handleMouseDownPassword}
                                                edge="end"
                                            >
                                                {values.showCurrentPassword ? <Visibility/> : <VisibilityOff/>}
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
                                    type={values.showNewPassword ? 'text' : 'password'}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowNewPassword}
                                                onMouseDown={handleMouseDownPassword}
                                                edge="end"
                                            >
                                                {values.showNewPassword ? <Visibility/> : <VisibilityOff/>}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                    labelWidth={70}
                                />
                            </FormControl>
                        </Grid>

                        <Grid item xs={12}>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                            >Lagre
                            </Button>
                        </Grid>
                    </Grid>

                    <Grid container justify="flex-end">
                        <Grid item>
                        </Grid>
                    </Grid>
                </form>
            </div>
            <Box mt={5}>
                <Copyright/>
            </Box>
        </Container>
    );
};
export default EditProfile;