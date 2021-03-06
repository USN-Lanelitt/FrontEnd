import React, {useEffect, useState} from 'react';
import Card from "@material-ui/core/Card";
import {makeStyles} from "@material-ui/core/styles";
import {CardContent} from "@material-ui/core";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Rating from "@material-ui/lab/Rating";
import {getRatings} from "../rating/getRating";
import {useTranslation} from "react-i18next";

/*Laget av Mirsa med hjelp av Finn*/

const useStyles = makeStyles(theme => ({
    paper: {
        marginTop: theme.spacing(10),
        display: 'flex',
        flexDirection: 'column',
        maxWidth: 470,
    },
    top: {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: theme.spacing(2),
    },
    status: {
        padding: theme.spacing(0.5),
    },
    image: {
        width: "50%",
        height: 200,
        marginRight: theme.spacing(2),
    },
    button: {
        color: 'green',

    }
}));

const LoanCard = ({firstname, middlename, lastname, assetname, assetImages, loanStatus, selectedDate, selectedDate2, assetId}) => {
    const classes = useStyles();
    const [rating, setRating] = useState(null);
    const {t} = useTranslation();

    useEffect(() => {
        getRatings(assetId, setRating)
        console.log(rating);
    }, []);

    return (
        <Card className={classes.paper}>
            <CardContent>
                <Grid className={classes.top}>
                    <Typography gutterBottom variant="h5" component="h2">
                        {firstname} {middlename} {lastname}
                    </Typography>

                    <Box className={classes.status} display="flex" justifyContent="center" flexDirection="row">
                        <Button className={classes.button} size="small" color="primary">
                            {loanStatus}
                        </Button>
                    </Box>
                </Grid>

                <Box display="-webkit-inline-box" flexDirection="row">
                    <CardMedia className={classes.image}
                               component="img"
                               alt="bilde"
                               height="200"
                               image={'https://source.unsplash.com/random'}
                    />

                    <Box display="flex" flexDirection="column" margin="auto">
                        <Box m={1}>
                            <Typography gutterBottom variant="h5" component="h2">
                                {assetname}
                            </Typography>
                        </Box>
                        <Box component="fieldset" p={0} borderColor="transparent">
                            <Rating name="read-only" precision={0.5} value={rating} readOnly/>
                        </Box>

                        <Box display="flex" flexDirection="column" mt={9}>
                            <Typography gutterBottom variant="subtitle2" color="textSecondary" component="h4">
                                {t('loan-card.1')}
                            </Typography>
                            <Typography gutterBottom variant="body2" color="textPrimary" component="body1"
                                        flexDirection="row">
                                {selectedDate} - {selectedDate2}
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </CardContent>

        </Card>
    );
};

export default LoanCard;