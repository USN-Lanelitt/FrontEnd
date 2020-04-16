import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Copyright from "../../components/home/Copyright";
import FormControl from "@material-ui/core/FormControl";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import MyRatingsList from "../../components/rating/my-ratings-list";
import ReceivedRatingsList from "../../components/rating/received-ratings-list-";
import NewRatingsList from "../../components/rating/new-rating-list";
import Box from "@material-ui/core/Box";

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
    const [show, setShow] = React.useState(<ReceivedRatingsList/>);
    const [value, setValue] = React.useState('fått');

    const handleRadioChange = (event) => {
        setValue(event.target.value);
        if (event.target.value === 'fått') {
            setShow(<ReceivedRatingsList/>);
        } else if (event.target.value === 'gitt') {
            setShow(<MyRatingsList/>);
        } else
            setShow(<NewRatingsList/>);
    };

    return (
        <React.Fragment>
            <main>
                <div className={classes.heroContent}>
                    <Container maxWidth="sm">
                        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                            Vurderinger
                        </Typography>
                    <FormControl component="fieldset">
                        <RadioGroup row aria-label="position" name="position" value={value} onChange={handleRadioChange}>
                            <FormControlLabel  value='fått' control={<Radio color="primary" />} label="Vurderinger fått" />
                            <FormControlLabel  value='gitt' control={<Radio color="primary" />} label="Vurderinger gitt" />
                            <FormControlLabel  value='ny' control={<Radio color="primary" />} label="Nye vurderinger" />
                        </RadioGroup>
                    </FormControl>
                    </Container>
                </div>
                <Container className={classes.cardGrid}>
                    <Grid container spacing={12}>
                        {show}
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
