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
        height: 270,
        width: 680,
        backgroundColor:'#c8e6c9',
    },
    assetCard: {
        padding: 15,
        height: 168,
        width: 450,
    },
    paddingRight: {
        paddingRight:10,
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
        width: '80%',
    },
    button:{
        marginTop:95,
        marginLeft: 12,
    },
}));

const NewRatingsCardDesktop = ({loanId, firstname, middlename, lastname, assetId, assetname, selectedDate, selectedDate2}) => {
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
                    <CardContent>
                        <div className={classes.flex}>
                            <Box className={classes.paddingRight}>
                                <Typography gutterBottom variant="h6" component="h2">
                                    {firstname} {middlename} {lastname}
                                </Typography>
                            </Box>
                            <Box>
                                <Typography gutterBottom variant="subtitle2" component="h2">
                                    {selectedDate} - {selectedDate2}
                                </Typography>
                            </Box>
                        </div>

                        <Card className={classes.assetCard}>
                            <Box display="flex" flexDirection="row" alignItems="center">
                                <Box className={classes.flex}>
                                    <Box className={classes.paddingRight}>
                                        <Box style={{margin:0}} fontSize={25} fontWeight="fontWeightBold" m={1}>
                                            {assetname}
                                        </Box>
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

export default NewRatingsCardDesktop;