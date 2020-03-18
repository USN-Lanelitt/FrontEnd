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
    const handleLogin = useCallback(async event => {
        event.preventDefault();
        const { email, password } = event.target.elements;
        if (email.value.length === 0 || password.value.length === 0) {
            alert("Alle feltene må fylles ut");
        }
        else {
            try {
                await app
                    .auth()
                    .signInWithEmailAndPassword(email.value, password.value);
                history.push("/");
            } catch (error) {
                alert("Feil brukernavn og passord");

            }
        }}, [history]);

    function UserLogin() {
            fetch('http://127.0.0.1:8000/api/login', {
                method: 'post',
                headers: {
                    'Accept': 'application/json',
                },
                body: JSON.stringify({
                    username: values.email,
                    password: values.password
                })
            })
                .then((Response) => Response.json())
                .then((Result) => {
                    console.log(Result);
                    sessionStorage.setItem('userId', Result[0]['id']);
                    sessionStorage.setItem('firstname', Result[0]['firstname']);
                    sessionStorage.setItem('middlename', Result[0]['middlename']);
                    sessionStorage.setItem('lastname', Result[0]['lastname']);
                })
        }

    const classes = useStyles();

    const [values, setValues] = useState({
        email: '',
        password: '',
        showPassword: false,
    });


    const handleChange = prop => event => {
        setValues({ ...values, [prop]: event.target.value });
    };

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
                    Logg inn
                </Typography>
                <form onSubmit={handleLogin} className={classes.form} noValidate>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="sEmail"
                        label="Epost"
                        name="email"
                        type="text"
                        onChange={handleChange('email')}

                    />
                    <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined" fullWidth>
                        <InputLabel htmlFor="outlined-adornment-password" required>Passord</InputLabel>
                        <OutlinedInput
                            name="password"
                            id="outlined-adornment-password"
                            type={values.showPassword ? 'text' : 'password'}
                            value={values.password}
                            onChange={handleChange('password')}
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
                        label="Husk meg"
                    />

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={()=> UserLogin()}
                    >
                        Logg inn
                    </Button>

                    <Grid container>
                        <Grid item xs>
                            <Link href="#" variant="body2">
                                Glemt passord?
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href="/signup" variant="body2">
                                    Har ikke konto? Opprett her
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


