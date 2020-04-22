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
import FormControl from "@material-ui/core/FormControl";
import clsx from "clsx";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import HandleImageUpload from "../../components/profile/handle-image-upload";
import ProfileImageUpload from "./profile-image-upload";
import {useTranslation} from "react-i18next";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

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
    media: {
        height: "135px",
        width: "135px",
        borderRadius: "95px",
    },
    imageBox: {
        height: "135px",
        width: "350px",
    }
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
    const { t } = useTranslation();
    const handleUpdate = useCallback(async event => {
        event.preventDefault();
        let credential;
        // Henter verdier som er utfylt i tekst feltene på form skjema
        const {nickname, firstname, middlename, lastname, phone, address1, address2, zipcode, city, newsletter} = event.target.elements;
        //Sette nye verdier i sessionStorage
        sessionStorage.setItem('nickname', nickname.value);
        sessionStorage.setItem('firstname', firstname.value);
        sessionStorage.setItem('middlename', middlename.value);
        sessionStorage.setItem('lastname', lastname.value);
        sessionStorage.setItem('phone', phone.value);
        sessionStorage.setItem('address', address1.value);
        sessionStorage.setItem('address2', address2.value);
        sessionStorage.setItem('zipcode', zipcode.value);

        sessionStorage.setItem('newsletter', newsletter.checked);
        console.log(sessionStorage.getItem('newsletter'));

        // Sender ut info til API Url. Rekkefølge: 1.Symfony -> 2.Firebase.
        axios.post('/user/'+sessionStorage.getItem('userId')+'/edit', {
            nickname: nickname.value,
            firstname: firstname.value,
            middlename: middlename.value,
            lastname: lastname.value,
            phone: phone.value,
            address: address1.value,
            address2: address2.value,
            zipcode: zipcode.value,
            city: city.value,
            newsSubscription: newsletter.checked,
            usertype: '',
            active: true, // brukeren må være active for å kunne redigere sin egen profil
        })
            .then(res => {
                //Symfony
                console.log(res);
                console.log(res.data);
                sessionStorage.setItem('city', res.data['city']);
                alert('Info er lagret');
            }
        )
        .then(
            // Bruker må re-autentiseres for å kunne endre passord/epost og bli godkjent på Firebase. (Sikkerhetstiltak)
            // Prompt the user to re-provide their sign-in credentials
            /*user.reauthenticateWithCredential(credential).then(function () {
                // User re-authenticated.
            }).catch(function (error) {
                // An error happened.
            })*/
        )
        .then(
            //Firebase
            //user.updatePassword(newPassword.value).then(function() {
                //Update successful.
            //})
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
        password: ''
    });

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const handleChange = prop => event => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const [checked, setChecked] = React.useState(sessionStorage.getItem('newsletter'));
    console.log(checked);
    const handleChangeCheckboxNewsletter = (event) => {
        console.log(checked);
        setChecked(event.target.checked);
        console.log(checked);
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

    const [file, setFile] = useState({ preview: null, raw: null })

    const handleImageChange = (e) => {
        setFile({
            preview: URL.createObjectURL(e.target.files[0]),
            raw: e.target.files[0]
        })
    }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline/>
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <EditTwoToneIcon/>
                </Avatar>
                <Typography component="h1" variant="h5">
                    {t('editProfile.1')}
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
                                        {t('editProfile.2')}
                                    </DialogTitle>
                                    <DialogContent dividers>
                                        <Box display="flex" justifyContent="space-between" alignItems="flex-end" flexDirection="row"  className={classes.imageBox}>
                                            <Box className={classes.media}
                                            >
                                                {
                                                    file.preview ?
                                                        <img src={file.preview}  alt="Protocol illustration"
                                                             className={classes.media}/> :
                                                        (<img src={"https://source.unsplash.com/random"}  alt="Protocol illustration"
                                                              className={classes.media}/>)}
                                            </Box>

                                            <div>
                                                <label htmlFor="upload-button"
                                                       style={{
                                                           backgroundColor: 'blue',
                                                           color: 'white',
                                                           padding: "10px 8px 10px 8px",
                                                           borderRadius: 4,
                                                           textAlign: "center"    }}
                                                >
                                                    {t('editProfile.3')}
                                                </label>
                                                <input type="file" id="upload-button" accept="image/*" style={{ display: 'none' }} onChange={handleImageChange} />
                                            </div>
                                        </Box>
                                    </DialogContent>

                                    <DialogActions>
                                        <Button autoFocus onClick={()=>{handleClose(); ProfileImageUpload(file);}} color="primary">
                                            {t('editProfile.4')}
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
                                label={t('editProfile.5')}
                                defaultValue={sessionStorage.getItem('nickname')}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                name="firstname"
                                required
                                fullWidth
                                autoFocus
                                id="firstname"
                                label={t('editProfile.15')}
                                defaultValue={sessionStorage.getItem('firstname')}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                name="middlename"
                                fullWidth
                                autoFocus
                                id="middlename"
                                label={t('editProfile.16')}
                                defaultValue={sessionStorage.getItem('middlename')}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                name="lastname"
                                required
                                fullWidth
                                autoFocus
                                id="lastname"
                                label={t('editProfile.17')}
                                defaultValue={sessionStorage.getItem('lastname')}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                name="phone"
                                fullWidth
                                id="phone"
                                label={t('editProfile.6')}
                                defaultValue={sessionStorage.getItem('phone')}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                name="address1"
                                required
                                fullWidth
                                id="sAddress"
                                label={t('editProfile.7')}
                                defaultValue={sessionStorage.getItem('address')}

                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                name="address2"
                                required
                                fullWidth
                                id="sAddress2"
                                label={t('editProfile.8')}
                                defaultValue={sessionStorage.getItem('address2')}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                name="zipcode"
                                required
                                fullWidth
                                id="iZipcode"
                                label={t('editProfile.9')}
                                defaultValue={sessionStorage.getItem('zipcode')}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                name="city"
                                required
                                fullWidth
                                id="sCity"
                                label={t('editProfile.10')}
                                defaultValue={sessionStorage.getItem('city')}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        name="newsletter"
                                        value="allowExtraEmails"
                                        color="primary"
                                        checked={checked}
                                        onChange={handleChangeCheckboxNewsletter}
                                    />
                                }
                                label={t('register.10')}
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
                    {t('editProfile.11')}
                </Typography>

                {/*Midlertidig slått av for videreutvikling. Grunnet: Kjent feil med Firebase kode kobling. Mail sendt til Firebase support*/}
                <form onSubmit={handleUpdate} className={classes.form} noValidate>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <FormControl className={clsx(classes.margin, classes.textField)}
                                         fullWidth>
                                <InputLabel htmlFor="outlined-adornment-password" required>{t('editProfile.12')}</InputLabel>
                                <Input
                                    name="currentPassword"
                                    id="currentPassword"
                                    disabled
                                    type={values.showCurrentPassword ? 'text' : 'password'}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                disabled
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
                                <InputLabel htmlFor="outlined-adornment-password" required>{t('editProfile.13')}</InputLabel>
                                <Input
                                    name="newPassword"
                                    id="newPassword"
                                    disabled
                                    type={values.showNewPassword ? 'text' : 'password'}
                                    value={values.password}
                                    onChange={handleChange('password')}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                disabled
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
                                disabled
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                            >{t('editProfile.14')}
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
