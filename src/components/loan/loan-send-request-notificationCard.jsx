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


/*her er det kort med sendt forespørsel -Mirsa */

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

}));

const LoanSendRequestNotificationCard = ({firstname, middlename, lastname, assetname, description, assetImages, selectedDate, selectedDate2}) => {
    const classes = useStyles();
    const {t} = useTranslation();

    return (
            <Box display="flex" flexDirection="row">
            <Card className={classes.paper}>
                <Box display="flex" flexDirection="row">
                    <CardContent>
                        <Grid className={classes.top}>
                            <Typography gutterBottom variant="h5" component="h2">
                                {firstname} {middlename} {lastname}
                            </Typography>

                            <Box className={classes.status} display="flex" justifyContent="center">
                                <Button size="small" color="grey">
                                    Sendt
                                </Button>
                            </Box>

                        </Grid>
                        <CardMedia
                            component="img"
                            alt="bilde"
                            height="200"
                            image={"assetImages/"+assetImages}
                        />

                        <Typography gutterBottom variant="h5" component="h2">
                            {assetname}

                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {description}

                        </Typography>
                        <Box>
                            <Typography gutterBottom variant="subtitle1" component="h2" paddingTop="10px">
                                {selectedDate} - {selectedDate2}

                            </Typography>
                        </Box>
                    </CardContent>
                </Box>
            </Card>
</Box>
    );
};

export default LoanSendRequestNotificationCard;