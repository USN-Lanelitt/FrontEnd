import React from 'react';
import {Container} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import MyAssetsCard from "./my-assets-card";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add"
import makeStyles from "@material-ui/core/styles/makeStyles";


const useStyles = makeStyles(theme => ({
    fab: {
        position: "fixed",
        bottom: theme.spacing(4),
        right: theme.spacing(4),

    }
}));

const MyAssetsList = () => {
    const classes = useStyles();

    const menuItems = [
        {
            title: "Eiendel",
            description: "Her kan du se eiendeler til utlån",
            imageUrl: "https://source.unsplash.com/random"
        },

        {
            title: "Eiendel",
            description: "Her kan du se eiendeler til utlån",
            imageUrl: "https://source.unsplash.com/random"
        }
    ];
    return (
        <Container>

            <Grid container spacing={4} justify="center">

                {
                    menuItems.map(item => (
                            <Grid item>
                                <MyAssetsCard title={item.title} description={item.description} imageUrl={item.imageUrl}/>
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