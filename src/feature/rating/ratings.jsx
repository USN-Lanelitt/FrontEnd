import React, {useEffect} from 'react';
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
import withStyles from "@material-ui/core/styles/withStyles";
import FormLabel from "@material-ui/core/FormLabel";
import {useTranslation} from "react-i18next";
import Card from "@material-ui/core/Card";
import ReportModal from "../../components/report/report-modal";
import {Redirect, useParams} from "react-router";

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
    const { t } = useTranslation();
    const {pageNr} = useParams();
    const classes = useStyles();
    const [show, setShow] = React.useState();
    const [value, setValue] = React.useState(pageNr);

    useEffect(() => {
            if (value === '1') {
                setShow(<ReceivedRatingsList/>);
            } else if (value === '2') {
                setShow(<MyRatingsList/>);
            } else
                setShow(<NewRatingsList/>);
        },[setShow, 1]);

    const handleRadioChange = (event) => {
        setValue(event.target.value);
        if (event.target.value === '1') {
            setShow(<ReceivedRatingsList/>);
        } else if (event.target.value === '2') {
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
                            {t('ratings.1')}
                        </Typography>
                    </Container>
                </div>
                <Container maxWidth="sm">
                    <Box style={{paddingLeft:30}} display="flex" aligns="center">
                        <FormControl component="fieldset" align="center">
                            <RadioGroup row aria-label="position" name="position" value={value} onChange={handleRadioChange}>
                                <FormControlLabel value='1' control={<Radio color="primary" />} label={t('ratings.2')} />
                                <FormControlLabel value='2' control={<Radio color="primary" />} label={t('ratings.3')} />
                                <FormControlLabel  value='3' control={<Radio color="primary" />} label={t('ratings.4')} />
                            </RadioGroup>
                        </FormControl>
                    </Box>
                </Container>
                <Container className={classes.cardGrid}>
                    <Grid container spacing={12}>
                        {show}
                    </Grid>
                </Container>
            </main>
        </React.Fragment>
    );
}
