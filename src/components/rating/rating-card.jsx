import React, {useEffect, useState} from 'react';
import Card from "@material-ui/core/Card";
import {makeStyles} from "@material-ui/core/styles";
import {CardContent} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Rating from "@material-ui/lab/Rating";
import useInput from "../div/use-input";
import {useTranslation} from "react-i18next";
import setRating from "./setRating";
import TextField from "@material-ui/core/TextField";
import ReportModal from "../report/report-modal";


const useStyles = makeStyles(theme => ({
    card: {
        height: 260,
        width: 680,
        backgroundColor:'#cfd8dc',
    },
    assetCard: {
        padding: 15,
        height: 156,
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
    comment:{
        marginTop: 12,
        width: '90%',
        height: 90,
    },

}));

const RatingCard = ({userId2, firstname, middlename, lastname, assetname, selectedDate, selectedDate2, comment, rating, type}) => {
    const { t } = useTranslation();
    const classes = useStyles();
    const [userId, setId] = useState(sessionStorage.getItem('userId'));
    const [botton, setBotton] = useState('');

    useEffect(() => {
        if(type === 1)
            setBotton(reportBotten);
        else
            setBotton('');
    }, [setBotton, userId]);


    const reportBotten  = (
        <ReportModal userId2={userId2}/>
    );

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
                                    name="read-only"
                                    precision={0.5}
                                    value={rating}
                                    className={classes.stars}
                                    readOnly
                                />
                            </Box>
                        </Box>
                        <Box display="flex" flexDirection="row">
                            <Box className={classes.comment}>
                                <Box style={{margin:0}} fontSize={17}  m={1}>
                                    {comment}
                                </Box>
                            </Box>
                        </Box>
                    </Card>
                    {botton}
                </CardContent>

            </Card>
        </div>
    );
};

export default RatingCard;