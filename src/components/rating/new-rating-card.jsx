import React, {useState} from 'react';
import Card from "@material-ui/core/Card";
import {makeStyles} from "@material-ui/core/styles";
import {CardContent} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Rating from "@material-ui/lab/Rating";
import useInput from "./use-input";
import {useTranslation} from "react-i18next";
import setRating from "./setRating";
import TextField from "@material-ui/core/TextField";


const useStyles = makeStyles(theme => ({
    card: {
        height: 270,
        width: 670,
        backgroundColor:'#cfd8dc',
    },
    assetCard: {
        padding: 15,
        height: 170,
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

const NewRatingCard = ({loanId, firstname, middlename, lastname, assetId, assetname, selectedDate, selectedDate2}) => {
    const { t } = useTranslation();
    const classes = useStyles();
    const [userId, setId] = useState(sessionStorage.getItem('userId'));
    const [value, setValue] = React.useState(0);
    const { value:newRating, bind:bindNewRating} = useInput('');
    const { value:comment, bind:bindComment } = useInput('');


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
                                        name="simple-controlled"
                                        value={value}
                                        precision={0.5}
                                        className={classes.stars}
                                        onChange={(event, newValue) => {
                                            setValue(newValue);
                                        }}
                                    />
                                </Box>
                            </Box>
                            <form className={classes.form} >
                                <TextField
                                    id="standard-multiline-static"
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
                                    onClick={() => setRating(userId, loanId, value, comment)}
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

export default NewRatingCard;