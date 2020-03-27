import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Copyright from '../../components/home/Copyright';
import TextField from '@material-ui/core/TextField';
import HomeMenu from "../../components/home/home-menu";


const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(15, 0, 6)
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));


export default function Home() {
  const classes = useStyles();


  return (
      <React.Fragment>
        <CssBaseline/>
        <main>
          <div className={classes.heroContent}>
            <Container maxWidth="sm">
              <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                Lånelitt
              </Typography>
              <Typography variant="h5" align="center" color="textSecondary" paragraph>
                Hjemmeside
              </Typography>
            </Container>
          </div>

          <Container className={classes.cardGrid}>
            <div>
              <TextField
                  id="outlined-full-width"
                  label="Søk"
                  style={{margin: 8}}
                  placeholder="Spade"
                  helperText="Hva trenger du å låne?"
                  fullWidth
                  margin="normal"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="outlined"
              />
            </div>
            <h3>Kategori</h3>
            <hr/>
            <Grid container spacing={12}>
              <HomeMenu/>
            </Grid>
          </Container>
        </main>
        <footer className={classes.footer}>
          <Typography variant="h6" align="center" gutterBottom>
            Lånelitt
          </Typography>
          <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
            ProgTeam Lånelitt
          </Typography>
          <Copyright/>
        </footer>
      </React.Fragment>
  );
}