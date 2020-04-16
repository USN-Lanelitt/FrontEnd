import React, {useEffect} from 'react';
import Card from "@material-ui/core/Card";
import {makeStyles} from "@material-ui/core/styles";
import {CardContent} from "@material-ui/core";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

//her er det kort med ventende forespørsel/avist - kort

const useStyles = makeStyles(theme => ({
    paper: {
        marginTop: theme.spacing(10),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        maxWidth: 645,

    },
    top: {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: theme.spacing(2),
    },
    status: {
        padding: theme.spacing(0.5),

    }
}));

const LoanCard = ({firstname, middlename, lastname, assetname, description, assetImages, loanStatus, selectedDate, selectedDate2}) => {
    const classes = useStyles();

    return (
        <Card className={classes.paper}>
            <CardContent>
                <Grid className={classes.top}>
                    <Typography gutterBottom variant="h5" component="h2">
                        {firstname}{middlename}{lastname}
                    </Typography>

                    <Box className={classes.status} border={1} display="flex" justifyContent="center">
                        <Button size="small" color="primary">
                            {loanStatus}
                        </Button>
                    </Box>

                </Grid>
                <CardMedia
                    component="img"
                    alt="bilde"
                    height="200"
                    width="300"
                />
                {assetImages}
                <Typography gutterBottom variant="h5" component="h2">
                    {assetname}

                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {description}

                </Typography>
                <Box>
                    <Typography gutterBottom variant="subtitle1" component="h2">
                        {selectedDate} - {selectedDate2}

                    </Typography>
                </Box>
            </CardContent>
        </Card>
    );
};

export default LoanCard;