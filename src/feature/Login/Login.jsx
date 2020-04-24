import React, { useCallback, useState, useContext } from 'react';
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
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { withRouter, Redirect } from "react-router-dom";
import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import app from "../../fire";
import { AuthContext } from "../../Auth";
import Copyright from '../../components/home/Copyright';
import axios from "axios";
import { useTranslation } from 'react-i18next';

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

const Login = ({ history }) => {
    const { t } = useTranslation();
    const handleLogin = useCallback(async event => {
        event.preventDefault();
        const { email, password } = event.target.elements;
        if (email.value.length === 0 || password.value.length === 0) {
            alert("Alle feltene må fylles ut.");
        }
        else {
            let iCode = 0;
            axios.get('/api/login/' + email.value + '/' + password.value)
                .then(res=>{
                    console.log(res);
                    console.log(res.data);
                    iCode = parseInt(res.data['code']);
                    if (typeof res.data[0] !== 'undefined') {
                        // sette all info i sessionStorage. Felter som er undefiend, sette som blank

                        sessionStorage.setItem('userId', res.data[0]['id']);
                        sessionStorage.setItem('profileImage', res.data[0]['profileImage']);
                        sessionStorage.setItem('firstname', res.data[0]['firstname']);
                        sessionStorage.setItem('middlename', res.data[0]['middlename']);
                        if (typeof res.data[0]['middlename'] === 'undefined')
                            sessionStorage.setItem('middlename', '');
                        sessionStorage.setItem('lastname', res.data[0]['lastname']);
                        sessionStorage.setItem('phone', res.data[0]['phone']);
                        if (typeof res.data[0]['phone'] === 'undefined' || res.data[0]['phone'] === null)
                            sessionStorage.setItem('phone', '');
                        sessionStorage.setItem('nickname', res.data[0]['nickname']);
                        if (typeof res.data[0]['nickname'] === 'undefined')
                            sessionStorage.setItem('nickname', '');
                        sessionStorage.setItem('address', res.data[0]['address']);
                        if (typeof res.data[0]['address'] === 'undefined' || res.data[0]['address'] === null)
                            sessionStorage.setItem('address', '');
                        sessionStorage.setItem('address2', res.data[0]['address2']);
                        if (typeof res.data[0]['address2'] === 'undefined' || res.data[0]['address2'] === null)
                            sessionStorage.setItem('address2', '');
                        sessionStorage.setItem('zipcode', res.data[0]['zipcode']);
                        if (typeof res.data[0]['zipcode'] === 'undefined' || res.data[0]['zipcode'] === null)
                            sessionStorage.setItem('zipcode', '');
                        sessionStorage.setItem('city', res.data[0]['city']);
                        if (typeof res.data[0]['city'] === 'undefined' || res.data[0]['city'] === null)
                            sessionStorage.setItem('city', '');
                        sessionStorage.setItem('newsletter', (res.data[0]['newsletter'] == 1));
                    }
                })
                .then(()=>{
                    if (iCode === 200) {
                        try {
                            //alert(sessionStorage.getItem('userId'));
                            app
                                .auth()
                                .signInWithEmailAndPassword(email.value, password.value);
                            history.push("/");
                        } catch (error) {
                            alert("Feil brukernavn og passord");

                        }
                    }
                    else {
                        alert('FEIL ved innlogging');
                    }
                })
                .catch(e=>console.log(e));
        }
        }, [history]);

    const classes = useStyles();
    const [values, setValues] = useState({
        showPassword: false,
    });

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleMouseDownPassword = event => {
        event.preventDefault();
    };

    const { currentUser } = useContext(AuthContext);
    if (currentUser) {
        return <Redirect to="/" />;
    }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    {t('login.1')}
                </Typography>
                <form onSubmit={handleLogin} className={classes.form} noValidate>
                    <TextField
                        name="email"
                        variant="outlined"
                        margin="normal"
                        id="sEmail"
                        label={t('login.2')}
                        type="text"
                        required
                        fullWidth
                    />
                    <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined" fullWidth>
                        <InputLabel htmlFor="outlined-adornment-password" required>{t('login.3')}</InputLabel>
                        <OutlinedInput
                            name="password"
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
                                        {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>

                            }
                            labelWidth={70}
                        />
                    </FormControl>
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label={t('login.4')}
                    />

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        {t('login.7')}
                    </Button>

                    <Grid container>
                        <Grid item xs>
                            <Link href="#" variant="body2">
                                {t('login.5')}
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href="/signup" variant="body2">
                                {t('login.6')}
                            </Link>
                        </Grid>
                    </Grid>

                </form>
            </div>
            <Box mt={8}>
                <Copyright />
            </Box>
        </Container>
    );
};
export default withRouter(Login);


