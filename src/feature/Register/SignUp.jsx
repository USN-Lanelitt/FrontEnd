import React, {useCallback, useState} from 'react';
import {withRouter} from "react-router";
import app from "../../fire";
import DateFnsUtils from '@date-io/date-fns';
import 'date-fns';
import {KeyboardDatePicker, MuiPickersUtilsProvider} from '@material-ui/pickers';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import BrukerVilkar from '../../components/register/termsandconditions';
import Copyright from '../../components/home/Copyright';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import StatusMessage from "../../components/profile/status-message";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";

const useStyles = makeStyles(theme => ({
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
        width: '100%',
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));


const SignUp = ({history}) => {
    const { t } = useTranslation();
    const [showStatusMessage, setShowStatusMessage] = useState(false);
    const [showStatusMessageEmail, setShowStatusMessageEmail] = useState(false);
    const [statusMessage, setStatusMessage] = useState("");
    const [statusMessageSeverity, setStatusMessageSeverity] = useState("info");
    const handleSignUp = useCallback(async event => {
        const {firstname, middlename, birthdate, lastname, phone, email, password, terms, newsletter} = event.target.elements;
        event.preventDefault();
        if (firstname.value.length === 0 || lastname.value.length === 0 ||  email.value.length === 0 || password.value.length < 6 || terms.checked === false) {
            setShowStatusMessage(true);
            setStatusMessage(t('login.8'));
            setStatusMessageSeverity("error");
        }
        else {
            //console.log(terms.checked);
            let iCode = 0;
            axios.post('/api/register', {
                firstname: firstname.value,
                middlename: middlename.value,
                lastname: lastname.value,
                birthdate: birthdate.value,
                phone: phone.value,
                email: email.value,
                password: password.value,
                // newsletter: newsletter.checked,
                // terms: terms.checked

            })
                .then(res => {
                    console.log(res);
                    console.log(res.data);
                    iCode = parseInt(res.data['code']);
                })
                .then(() => {
                    if (iCode === 200) {
                        try {
                            app
                                .auth()
                                .createUserWithEmailAndPassword(email.value, password.value);
                            history.push("/login");
                            console.log(history)
                        } catch (error) {
                            setShowStatusMessageEmail(true);
                            setStatusMessage(t('register.11'));
                            setStatusMessageSeverity("error");
                        }
                    } else {
                        setShowStatusMessageEmail(true);
                        setStatusMessage(t('register.11'));
                        setStatusMessageSeverity("error");
                    }
                })
                .catch(e => console.log(e));
        }
    }, [history]);

    const [values, setValues] = useState({
        showPassword: false,
        firstname: '',
        lastname:'',
        email:'',
        passwordField:'',
        terms: false
    });

    const [selectedDate, setSelectedDate] = useState(new Date());

    const handleDateChange = date => {
        setSelectedDate(date);
    };

    const handleChange = prop => event => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const error = values.terms === false && showStatusMessage;
    const handleCheck = (event) => {
        setValues({ ...values, [event.target.name]: event.target.checked });
    };

    const classes = useStyles();

    const handleClickShowPassword = () => {
        setValues({...values, showPassword: !values.showPassword});
    };

    const handleMouseDownPassword = event => {
        event.preventDefault();
    };


    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline/>
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <StatusMessage show={showStatusMessage} message={statusMessage} severity={statusMessageSeverity}
                                   onClose={setShowStatusMessage}/>
                    <LockOutlinedIcon/>
                </Avatar>
                <Typography component="h1" variant="h5">
                    {t('register.1')}
                </Typography>

                <form onSubmit={handleSignUp} className={classes.form} noValidate>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                name="firstname"
                                autoComplete="firstname"
                                variant="outlined"
                                required
                                fullWidth
                                onChange={handleChange('firstname')}
                                error={values.firstname.length === 0 && showStatusMessage}
                                helperText={values.firstname.length === 0 && showStatusMessage ? t('login.8') : "" }
                                id="sFirstname"
                                label={t('register.2')}
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                name="middlename"
                                autoComplete="middlename"
                                variant="outlined"
                                fullWidth
                                id="sMiddlename"
                                label={t('register.3')}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                name="lastname"
                                variant="outlined"
                                required
                                fullWidth
                                onChange={handleChange('lastname')}
                                error={values.lastname.length === 0 && showStatusMessage}
                                helperText={values.lastname.length === 0 && showStatusMessage ? t('login.8') : "" }
                                id="sLastname"
                                label={t('register.4')}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                name="phone"
                                variant="outlined"
                                fullWidth
                                id="iMobile"
                                label={t('register.5')}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <KeyboardDatePicker
                                    name="birthdate"
                                    margin="normal"
                                    id="date-picker-dialog"
                                    label={t('register.6')}
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
                                name="email"
                                variant="outlined"
                                required
                                fullWidth
                                onChange={handleChange('email')}
                                error={showStatusMessageEmail || values.email.length === 0 && showStatusMessage }
                                helperText={values.email.length === 0 && showStatusMessage ? t('login.8') : "" || showStatusMessageEmail ? t('register.11') : ""}
                                id="sEmail"
                                label={t('register.7')}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined"
                                         fullWidth>
                                <InputLabel htmlFor="outlined-adornment-password" required>{t('register.8')}</InputLabel>
                                <OutlinedInput
                                    name="password"
                                    id="outlined-adornment-password"
                                    error={values.passwordField.length === 0 && showStatusMessage}
                                    onChange={handleChange('passwordField')}
                                    type={values.showPassword ? 'text' : 'password'}
                                    value={values.password}
                                    placeholder={t('register.9')}
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
                            <FormControlLabel
                                control={<Checkbox required={true} name="newsletter" value="allowExtraEmails" color="primary"/>}
                                label={t('register.10')}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl required onChange={handleCheck} error={error} component="fieldset">
                            <FormControlLabel
                                control={<Checkbox required={true} name="terms" value="termsAndConditions" color="primary"/>}
                                label={<BrukerVilkar/>}
                            />
                                <FormHelperText>{t('register.15')}</FormHelperText>
                            </FormControl>
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >{t('register.12')}
                    </Button>
                    <Grid container justify="flex-end">
                        <Grid item>
                            <Link href="/login" variant="body2" style={{textDecoration: "none"}}>
                                {t('register.13')}
                            </Link>
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

export default withRouter(SignUp);
