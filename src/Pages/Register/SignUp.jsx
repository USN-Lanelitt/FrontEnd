import React, { useState, useCallback } from 'react';
import { withRouter } from "react-router";
import app from "../../fire";
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
import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import BrukerVilkar from '../../components/register/termsandconditions';
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

const SignUp = ({ history }) => {
    const handleSignUp = useCallback(async event => {
        event.preventDefault();
        const { email, password } = event.target.elements;
        try {
            await app
                .auth()
                .createUserWithEmailAndPassword(email.value, password.value);
            history.push("/login");
        } catch (error) {
            alert(error);
        }
    }, [history]);


    const classes = useStyles();

    const [values, setValues] = useState({
        firstname: '',
        middlename: '',
        lastname: '',
        phone: '',
        birthdate: '',
        email: '',
        password: '',
        showPassword: false,
    });


    const handleChange = prop => event => {
        setValues({ ...values, [prop]: event.target.value });
    };

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
                    <LockOutlinedIcon/>
                </Avatar>
                <Typography component="h1" variant="h5">
                    Opprett konto
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
                                id="sFirstname"
                                label="Fornavn"
                                autoFocus
                                onChange={handleChange('firstname')}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                name="middlename"
                                autoComplete="middlename"
                                variant="outlined"
                                required
                                fullWidth
                                id="sMiddlename"
                                label="Mellomnavn"
                                autoFocus
                                onChange={handleChange('middlename')}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                name="lastname"
                                variant="outlined"
                                required
                                fullWidth
                                id="sLastname"
                                label="Etternavn"
                                onChange={handleChange('lastname')}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                name="phone"
                                variant="outlined"
                                fullWidth
                                id="iMobile"
                                label="Telefon (valgfri)"
                                onChange={handleChange('phone')}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                name="birthdate"
                                variant="outlined"
                                fullWidth
                                type="date"
                                id="birthdate"
                                onChange={handleChange('birthdate')}
                                />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                name="email"
                                variant="outlined"
                                required
                                fullWidth
                                id="sEmail"
                                label="Epost"
                                onChange={handleChange('email')}

                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined"
                                         fullWidth>
                                <InputLabel htmlFor="outlined-adornment-password" required>Passord</InputLabel>
                                <OutlinedInput
                                    name="password"
                                    id="outlined-adornment-password"
                                    type={values.showPassword ? 'text' : 'password'}
                                    onChange={handleChange('password')}
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
                                control={<Checkbox value="allowExtraEmails" color="primary"/>}
                                label="Jeg ønsker å motta nyheter på mail"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControlLabel
                                control={<Checkbox value="termsAndConditions" color="primary"/>}
                                label={<BrukerVilkar/>}
                            />

                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        //onClick={() => Register()}
                    >Opprett konto
                    </Button>
                    <Grid container justify="flex-end">
                        <Grid item>
                                <Link href="/login" variant="body2" style={{ textDecoration: "none" }}>
                                    Har allerede en konto? Logg på!
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