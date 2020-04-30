/*Nicole har jobbet med denne siden*/

import React, {useState} from 'react';
import Card from "@material-ui/core/Card";
import {makeStyles} from "@material-ui/core/styles";
import {CardContent} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Rating from "@material-ui/lab/Rating";
import useInput from "../../div/use-input";
import {useTranslation} from "react-i18next";
import setRating from "../setRating";
import TextField from "@material-ui/core/TextField";
import {Redirect} from "react-router";
import StatusMessage from "../../profile/status-message";
import Grid from "@material-ui/core/Grid";


const useStyles = makeStyles(theme => ({
    card: {
        height: 300,
        width: 355,
        backgroundColor:'#c8e6c9',
    },
    assetCard: {
        paddingTop:10,
        padding: 15,
        height: 210,
        width: 300,
    },
    stars: {
        marginTop:10,
    },
    flex: {
        display: 'flex',
        alignItems: 'center',
    },
    textfield: {
        marginTop: 12,
        width: '100%',
    },
    button:{

    },
}));

const NewRatingsCardMobile = ({loanId, firstname, middlename, lastname, assetId, assetname, selectedDate, selectedDate2}) => {
    const { t } = useTranslation();
    const classes = useStyles();
    const [userId, setId] = useState(sessionStorage.getItem('userId'));
    const [ratingValue, setRatingValue] = React.useState(0);
    const { value:newRating, bind:bindNewRating} = useInput('');
    const { value:comment, bind:bindComment } = useInput('');
    const [redirect, setRedirect] = React.useState(false);

    if (redirect) return <Redirect to="/rating/3"/>;

    return (
        <div>
            <Card className={classes.card}>
                    <CardContent style={{padding:12}}>
                        <div className={classes.flex}>
                            <Box>
                                <Typography gutterBottom variant="subtitle1" component="h2">
                                    {selectedDate} - {selectedDate2}
                                </Typography>
                            </Box>
                        </div>

                        <Card className={classes.assetCard}>
                            <Box style={{height:30}}  display="flex" flexDirection="row" alignItems="center">
                                <Box style={{paddingRight:10}}>
                                    <Box style={{margin:0}} fontSize={20} fontWeight="fontWeightBold" m={1}>
                                        {assetname}
                                    </Box>
                                </Box>
                                <Box borderColor="transparent">
                                    <Rating
                                        name={assetId}
                                        value={ratingValue}
                                        precision={0.5}
                                        className={classes.stars}
                                        onChange={(event, newValue) => {
                                            setRatingValue(newValue)
                                        }}
                                    />
                                </Box>

                            </Box>
                            <Box>
                                <Typography gutterBottom variant="subtitle1" component="h2">
                                    {firstname} {middlename} {lastname}
                                </Typography>
                            </Box>
                            <form className={classes.form} >
                                <TextField
                                    id={assetId}
                                    multiline
                                    rows={4}
                                    variant="outlined"
                                    className={classes.textfield}
                                    {...bindComment}
                                />

                                <Button
                                    type="submit"
                                    color="primary"
                                    className={classes.button}
                                    onClick={() => {
                                        setRating(userId, loanId, ratingValue, comment);
                                        setRedirect(true);
                                    }}
                                >
                                    {t('rating-card.1')}
                                </Button>
                            </form>
                        </Card>
                    </CardContent>

            </Card>
        </div>
    );
};

export default NewRatingsCardMobile;