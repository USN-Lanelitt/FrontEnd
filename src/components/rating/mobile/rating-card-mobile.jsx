/*Nicole har jobbet med denne siden*/

import React, {useEffect, useState} from 'react';
import Card from "@material-ui/core/Card";
import {makeStyles} from "@material-ui/core/styles";
import {CardContent} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Rating from "@material-ui/lab/Rating";
import {useTranslation} from "react-i18next";
import ReportModal from "../../report/report-modal";


const useStyles = makeStyles(theme => ({
    card: {
        minHeight: 250,
        width: 355,
        backgroundColor:'#c8e6c9',
    },
    assetCard: {
        paddingTop:10,
        padding: 15,
        minHeight: 152,
        width: 300,
    },
    stars: {
        marginTop:10,
    },
    flex: {
        display: 'flex',
        alignItems: 'center',
    },

}));

const RatingCardMobile = ({userId2, firstname, middlename, lastname, assetname, selectedDate, selectedDate2, comment, rating, type}) => {
    const { t } = useTranslation();
    const classes = useStyles();
    const [userId, setId] = useState(sessionStorage.getItem('userId'));
    const [botton, setBotton] = useState('');


    useEffect(() => {
        if(type === 1) {
            setBotton(reportBotten);
        }
        else
            setBotton('');
    }, [setBotton, userId]);

    const reportBotten  = (
        <ReportModal userId2={userId2}/>
    );

    return (
        <>
            <Card className={classes.card}>
                <CardContent style={{padding:12}}>
                    <Box>
                        <Typography gutterBottom variant="subtitle1" component="h2">
                            {selectedDate} - {selectedDate2}
                        </Typography>
                    </Box>
                    <Card className={classes.assetCard}>
                        <Box style={{height:30}}  display="flex" flexDirection="row" alignItems="center">
                            <Box style={{paddingRight:10}}>
                                <Box style={{margin:0}} fontSize={20} fontWeight="fontWeightBold" m={1}>
                                    {assetname}
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
                        <Box>
                            <Typography gutterBottom variant="subtitle2" component="h2">
                                {firstname} {middlename} {lastname}
                            </Typography>
                        </Box>
                        <Box style={{margin:0, marginBottom:10, marginTop:10}} fontSize={17}>
                            {comment}
                        </Box>
                    </Card>
                    <Box display="flex" justifyContent="flex-end" >
                        {botton}
                    </Box>
                </CardContent>
            </Card>
        </>
    );
};

export default RatingCardMobile;