import React, {useEffect, useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from "@material-ui/core/Container";
import FormControl from "@material-ui/core/FormControl";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import Box from "@material-ui/core/Box";
import {useTranslation} from "react-i18next";
import {Redirect, useParams} from "react-router";
import MyRatings from "../../components/rating/my-ratings-size-check";
import ReceivedRatings from "../../components/rating/received-size-check";
import NewRatings from "../../components/rating/new-ratings-size-check";
import CheckWinSize from "../../components/div/check-win-size";
import MyRatingsMobile from "../../components/rating/mobile/my-ratings-mobile";
import MyRatingsDesktop from "../../components/rating/desktop/my-ratings-desktop";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    buttons: {
        marginRight: theme.spacing(2),
    },
}));

export default function Ratings() {
    const { t } = useTranslation();
    const {pageNr} = useParams();
    const classes = useStyles();
    const [show, setShow] = React.useState();
    const [value, setValue] = React.useState(pageNr);
    const { width } = CheckWinSize()
    const breakpoint = 620;

    useEffect(() => {
        if (value === '1') {
            setShow(<ReceivedRatings/>);
        } else if (value === '2') {
            setShow(<MyRatings/>);
        } else
            setShow(<NewRatings/>);
    },[setShow, 1]);

    const handleRadioChange = (event) => {
        setValue(event.target.value);
        if (event.target.value === '1') {
            setShow(<ReceivedRatings/>);
        } else if (event.target.value === '2') {
            setShow(<MyRatings/>);
        } else
            setShow(<NewRatings/>);
    };

    function handleChange1() {
        setShow(<ReceivedRatings/>);
    }
    function handleChange2() {
        setShow(<MyRatings/>);
    }
    function handleChange3() {
        setShow(<NewRatings/>);
    }

    return (
        <React.Fragment>
            {width > breakpoint
            &&
                <Container maxWidth="sm">
                    <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                        {t('ratings.1')}
                    </Typography>
                </Container>
            }

            {width < breakpoint
            &&
                <Box style={{marginButton: 20}}>
                    <ButtonGroup  size="small" color="primary" aria-label="small outlined button group">
                        <Button type="submit" onClick={handleChange1}>
                            {t('ratings.2')}
                        </Button>
                        <Button type="submit" onClick={handleChange2}>
                            {t('ratings.3')}
                        </Button>
                        <Button type="submit" onClick={handleChange3}>
                            {t('ratings.4')}
                        </Button>
                    </ButtonGroup>
                </Box>
            }


            <Container maxWidth="sm">
                {width > breakpoint
                &&
                <Box style={{paddingLeft: 30}} display="flex" aligns="center">
                    <FormControl component="fieldset" align="center">
                        <RadioGroup row aria-label="position" name="position" value={value}
                                    onChange={handleRadioChange}>
                            <FormControlLabel value='1' control={<Radio color="primary"/>} label={t('ratings.2')}/>
                            <FormControlLabel value='2' control={<Radio color="primary"/>} label={t('ratings.3')}/>
                            <FormControlLabel value='3' control={<Radio color="primary"/>} label={t('ratings.4')}/>
                        </RadioGroup>
                    </FormControl>
                </Box>
                }
                    {show}
            </Container>
        </React.Fragment>
    );
}
