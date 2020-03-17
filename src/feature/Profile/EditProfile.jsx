import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import EditIcon from '@material-ui/icons/Edit';
import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import CardContent from '@material-ui/core/CardContent';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import CloseIcon from '@material-ui/icons/Close';
import Copyright from '../../components/home/Copyright';


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
    marginTop: theme.spacing(3),
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
  const { children, classes, onClose, ...other } = props;
  
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

export default function EditProfile() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };


  const [values, setValues] = useState({
    phone: '',
    birthdate: '',
    email: '',
    passord: '',
    address1: '',
    address2: '',
    zipcode: '',
    city: '',
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



  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        
        <Typography component="h1" variant="h5">
          Endre kontaktinformasjon
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid container
              direction="row"
              justify="center"
              alignItems="center">
            <CardContent>
                <IconButton onClick={handleClickOpen}>
                <Avatar src={"https://i.pravatar.cc/150?img=68"}
                    className={classes.large} />
                  <EditIcon />
              </IconButton>
                <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
                  <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                    Endre Profilbilde
        </DialogTitle>
                  <DialogContent dividers>
                    <Avatar src={"https://i.pravatar.cc/150?img=68"}
                      className={classes.large} />
                    <div className={classes.root}>
                    <input
                      accept="image/*"
                      className={classes.input}
                      id="contained-button-file"
                      multiple
                      type="file"
                    />
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
            <Grid item xs={12} sm={6}>
              <TextField
                name="phone"
                variant="outlined"
                fullWidth
                id="phone"
                label="Telefon"
                onChange={handleChange('phone')}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="birthdate"
                variant="outlined"
                required
                fullWidth
                id="birthdate"
                type="date"
                onChange={handleChange('birthdate')}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="email"
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Epost"
                onChange={handleChange('email')}

              />
            </Grid>
            <Grid item xs={12}>
              <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined" fullWidth>
                <InputLabel htmlFor="outlined-adornment-password" required>Ny Passord</InputLabel>
                <OutlinedInput
                  name="confirmPassword"
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
                        {values.showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>

                  }
                  labelWidth={70}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="address"
                variant="outlined"
                required
                fullWidth
                id="sAddress"
                label="Adresse"
                onChange={handleChange('address1')}

              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="address2"
                variant="outlined"
                required
                fullWidth
                id="sAddress2"
                label="Adresse 2"
                onChange={handleChange('address2')}

              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="zipcode"
                variant="outlined"
                required
                fullWidth
                id="iZipcode"
                label="Postkode"
                onChange={handleChange('zipcode')}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="city"
                variant="outlined"
                required
                fullWidth
                id="sCity"
                label="By"
                onChange={handleChange('city')}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >Lagre Endring
                    </Button>
          <Grid container justify="flex-end">
            <Grid item>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}