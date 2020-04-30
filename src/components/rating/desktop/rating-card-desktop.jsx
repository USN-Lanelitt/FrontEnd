/*Nicole har jobbet med denne siden med hjelp av John*/

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
        padding:3,
        height: 260,
        width: 680,
        backgroundColor:'#c8e6c9',
    },
    assetCard: {
        padding: 15,
        height: 154,
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
    button:{
        width: 475,
        padding:0,
        margin:0,
    },

}));

const RatingCardDesktop = ({userId2, firstname, middlename, lastname, assetname, selectedDate, selectedDate2, comment, rating, type}) => {
    const { t } = useTranslation();
    const classes = useStyles();
    const [userId, setId] = useState(sessionStorage.getItem('userId'));
    const [button, setButton] = useState('');

    useEffect(() => {
        if(type === 1)
            setButton(reportButten);
        else
            setButton('');
    }, [setButton, userId]);


    const reportButten  = (
        <ReportModal userId2={userId2}/>
    );

    return (
        <div>
            <Card className={classes.card}>
                <CardContent>
                    <div className={classes.flex}>
                        <Box style={{paddingLeft:5, paddingRight:10}}>
                            <Typography gutterBottom variant="h6" component="h2">
                                {firstname} {middlename} {lastname}
                            </Typography>
                        </Box>
                        <Box>
                            <Typography  gutterBottom variant="subtitle1" component="h2">
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
                    <Box display="flex" justifyContent="flex-end"  className={classes.button} >
                        {button}
                    </Box>
                </CardContent>

            </Card>
        </div>
    );
};

export default RatingCardDesktop;