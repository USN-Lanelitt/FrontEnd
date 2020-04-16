import React, {useEffect, useState} from 'react';
import Card from "@material-ui/core/Card";
import {makeStyles} from "@material-ui/core/styles";
import {CardContent} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Rating from "@material-ui/lab/Rating";
import useInput from "./use-input";
import axios from "axios";
import setRating from "./setRating";



//her er det kort med ventende forespørsel/avist - kort

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

const NewRatingCard = ({loanId, firstname, middlename, lastname, assetId, assetname, selectedDate, selectedDate2}) => {
    const classes = useStyles();
    const [userId, setId] = useState(sessionStorage.getItem('userId'));
    const [value, setValue] = React.useState(0);
    const { value:newRating, bind:bindNewRating} = useInput('');
    const { value:comment, bind:bindComment } = useInput('');

    /*    function setComment() {
            console.log("report", userId, sessionStorage.getItem('userId'));
            axios.post('/user/'+ userId +'/report/' + userId2, {
                subject:subject,
                comment:comment
            }).then((response) => {
                if (response.status === 200) {
                    console.log(response.data);
                }
            })
                .catch(e => console.log(e));
        }*/

    /* const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Ønsker du å lagre vurderingen på ${assetname}?`);
    };*/

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
                                <Box borderColor="transparent">
                                    <Rating
                                        name="simple-controlled"
                                        value={value}
                                        precision={0.5}
                                        onChange={(event, newValue) => {
                                            setValue(newValue);
                                        }}
                                    />
                                </Box>
                            </Box>
                            <form className={classes.form} >
                                <textarea
                                    inputprops={{
                                        classes: {
                                            input: classes.resize,
                                        },
                                    }}
                                    className={classes.textarea}
                                    {...bindComment} />

                                <Button
                                    type="submit"
                                    color="primary"
                                    onClick={() => setRating(userId, loanId, value)}
                                >
                                    Lagre
                                </Button>
                            </form>
                        </Card>
                    </CardContent>

            </Card>
        </div>
    );
};

export default NewRatingCard;