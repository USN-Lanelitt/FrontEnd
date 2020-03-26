import React, {useEffect, useState} from 'react';
import {Container} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import MyAssetsCard from "./my-assets-card";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add"
import makeStyles from "@material-ui/core/styles/makeStyles";
import axios from "axios";


const useStyles = makeStyles(theme => ({
    fab: {
        position: "fixed",
        bottom: theme.spacing(4),
        right: theme.spacing(4),

    }
}));

const MyAssetsList = () => {

    const classes = useStyles();

    const [userId, setId] = useState(sessionStorage.getItem('userId'));
    const [menuItems, setMenuItem] = useState([]);

    useEffect(() => {
        console.log("", userId, sessionStorage.getItem('userId'));
        axios.get("/assets/getMyAsset/"+userId)
            .then(result => {
                if (result.status === 200) {
                    console.log(result.data);
                    setMenuItem(result.data);
                }
            })
            .catch(e => console.log(e));
    }, [setMenuItem, userId]);





    return (
        <Container>

            <Grid container spacing={4} justify="center">
                {
                    menuItems.map(item => (
                            <Grid item>
                                <MyAssetsCard title={item.assetName} description={item.description} imageUrl={"https://source.unsplash.com/random"}/>
                            </Grid>
                        )
                    )
                }

            </Grid>

            <Fab color="primary" aria-label="add" className={classes.fab}>
                <AddIcon/>
            </Fab>
        </Container>

    );
};

export default MyAssetsList;