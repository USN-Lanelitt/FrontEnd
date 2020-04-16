import React, {useEffect, useState} from 'react';
import Card from "@material-ui/core/Card";
import {makeStyles} from "@material-ui/core/styles";
import {CardContent} from "@material-ui/core";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import Rating from "@material-ui/lab/Rating";
import useInput from "./use-input";
import axios from "axios";


const useStyles = makeStyles(theme => ({
    card: {
        height: 270,
        width: 650,
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
    flex: {
        display: 'flex',
        alignItems: 'center',
    },
    textarea: {
        marginTop: 20,
        marginRight: 15,
        padding: 10,
        width: '77%',
        height: 90,
    },
    resize:{
        fontSize:80
    },
}));

const MyRatingsCard = ({loanId, firstname, middlename, lastname, assetId, assetname, selectedDate, selectedDate2, comment, rating}) => {
    const classes = useStyles();

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
                                <Typography gutterBottom variant="subtitle1" component="h2">
                                    {selectedDate} - {selectedDate2}
                                </Typography>
                            </Box>
                        </div>

                        <Card className={classes.assetCard}>
                            <Box display="flex" flexDirection="row" alignItems="center">
                                <Box className={classes.flex}>
                                    <Box className={classes.paddingRight}>
                                        <Typography  variant="h5" component="h2">
                                            {assetname}
                                        </Typography>
                                    </Box>
                                </Box>
                                <Box component="fieldset" borderColor="transparent" display="flex">
                                    <Rating name="read-only" precision={0.5} value={rating} readOnly/>
                                </Box>
                            </Box>
                            <Box>
                                <Typography  variant="subtitle1" component="h2">
                                    {comment}
                                </Typography>
                            </Box>
                        </Card>
                    </CardContent>

            </Card>
        </div>
    );
};

export default MyRatingsCard;