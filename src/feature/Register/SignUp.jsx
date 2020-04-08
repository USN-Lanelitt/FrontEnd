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
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import BrukerVilkar from '../../components/register/termsandconditions';
import Copyright from '../../components/home/Copyright';
import axios from 'axios';


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
    const handleSignUp = useCallback(async event => {
        event.preventDefault();
        const {firstname, middlename, birthdate, lastname, phone, email, password} = event.target.elements;
        if (firstname.value.length === 0 || lastname.value.length === 0 || password.value.length < 6) {
            alert("Alle feltene som er merket med * må fylles ut og passord må inneholde minst 6 tegn");
        } else {
            let iCode = 0;
            axios.post('/api/register', {
                firstname: firstname.value,
                middlename: middlename.value,
                lastname: lastname.value,
                birthdate: birthdate.value,
                phone: phone.value,
                email: email.value,
                password: password.value
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
                            alert(error);
                        }
                    } else {
                        alert('FEIL: feil ved registrering');
                    }
                })
                .catch(e => console.log(e));
        }
    }, [history]);

    const [values, setValues] = useState({
        firstnameField: '',
        showPassword: false,
    }); console.log(values.firstnameField);

    const [selectedDate, setSelectedDate] = React.useState(new Date('2020-04-05'));

    const handleDateChange = date => {
        setSelectedDate(date);
    };

    const classes = useStyles();

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
                                onChange={handleChange('firstnameField')}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                name="middlename"
                                autoComplete="middlename"
                                variant="outlined"
                                fullWidth
                                id="sMiddlename"
                                label="Mellomnavn"
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
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                name="phone"
                                variant="outlined"
                                fullWidth
                                id="iMobile"
                                label="Telefon (valgfri)"
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
                                name="email"
                                variant="outlined"
                                required
                                fullWidth
                                id="sEmail"
                                label="Epost"
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
                    >Opprett konto
                    </Button>
                    <Grid container justify="flex-end">
                        <Grid item>
                            <Link href="/login" variant="body2" style={{textDecoration: "none"}}>
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