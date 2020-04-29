import React from 'react';
import Card from "@material-ui/core/Card";
import {makeStyles} from "@material-ui/core/styles";
import {CardContent} from "@material-ui/core";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import {useTranslation} from "react-i18next";

//her er det kort med ventende forespørsel/avist - kort - Mirsa

const useStyles = makeStyles(theme => ({
    paper: {

        display: 'flex',
        flexDirection: 'row',
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

    Button: {
        color: 'red',
    },


}));

const LoanReplyCard = ({firstname, middlename, lastname, assetname, description, assetImages, selectedDate, selectedDate2, onDenied, onAccept}) => {
    const classes = useStyles();
    const { t } = useTranslation();

    return (
        <Card className={classes.paper}>
            <CardContent>
                <Grid className={classes.top}>
                    <Typography gutterBottom variant="h5" component="h2">
                        {firstname} {middlename} {lastname}
                    </Typography>

                    <Box className={classes.status} display="flex" justifyContent="center">
                        <Button size="small" color="grey">
                            Venter
                        </Button>
                    </Box>

                </Grid>
                <CardMedia
                    component="img"
                    alt="bilde"
                    height="200"
                    image={assetImages}
                />

                <Typography gutterBottom variant="h5" component="h2">
                    {assetname}

                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {description}

                </Typography>
                <Box>
                    <Typography variant="subtitle1" component="h2" paddingTop="10px">
                        {selectedDate} - {selectedDate2}

                    </Typography>
                </Box>
                    <Button onClick= {onAccept} size="small" color="primary">
                        {t('loan-replay-card.1')}
                    </Button>
                    <Button className={classes.Button} onClick={onDenied} size="small" color="primary">
                        {t('loan-replay-card.2')}
                    </Button>
            </CardContent>
        </Card>
    );
};

export default LoanReplyCard;