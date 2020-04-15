import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Copyright from "../../components/home/Copyright";
import RatingList from "../../components/rating/ratings-list";
import FormControl from "@material-ui/core/FormControl";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import Box from "@material-ui/core/Box";
import withStyles from "@material-ui/core/styles/withStyles";
import FormLabel from "@material-ui/core/FormLabel";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    icons: {
        marginRight: theme.spacing(2),
    },
    root: {
        display: 'flex',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    toolbar: theme.mixins.toolbar,
    icon: {
        marginRight: theme.spacing(2),
    },
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(4, 0, 6),
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
    cardContent: {
        flexGrow: 1,
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    },
}));




export default function Ratings() {
    const classes = useStyles();
    const [value, setValue] = React.useState('');

    const handleRadioChange = (event) => {
        setValue(event.target.value);
        if (value === 'fått') {
            console.log('fått');

        } else
            console.log('gitt');
    };

    return (
        <React.Fragment>
            <main>
                <div className={classes.heroContent}>
                    <Container maxWidth="sm">
                        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                            Vurderinger
                        </Typography>
                    </Container>
                </div>
                    <FormControl component="fieldset">
                        <RadioGroup row aria-label="position" name="position" defaultValue="fått" value={value} onChange={handleRadioChange}>
                            <FormControlLabel value="fått" control={<Radio color="primary" />} label="Vurderinger fått" />
                            <FormControlLabel value="gitt" control={<Radio color="primary" />} label="Vurderinger gitt" />
                        </RadioGroup>
                    </FormControl>
                <Container className={classes.cardGrid}>
                    <Grid container spacing={12}>
                        <RatingList/>
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
