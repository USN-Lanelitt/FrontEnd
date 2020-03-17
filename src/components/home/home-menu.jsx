import React from 'react';
import CategoryCard from "./category-card";
import Grid from "@material-ui/core/Grid";
import {Container} from "@material-ui/core";

const HomeMenu = () => {

    const menuItems = [
        {
            title: "Klær",
            description: "Her kan du se klær til utlån",
            imageUrl: "https://source.unsplash.com/random"
        },

        {
            title: "Verktøy",
            description: "Her kan du se verktøy til utlån",
            imageUrl: "https://source.unsplash.com/random"
        },

        {
            title: "Hundeutstyr",
            description: "Her kan du se klær til utlån",
            imageUrl: "https://source.unsplash.com/random"
        },

        {
            title: "Vinteraktiviteter",
            description: "Her kan du se klær til utlån",
            imageUrl: "https://source.unsplash.com/random"
        },

        {
            title: "Sommeraktiviteter",
            description: "Her kan du se klær til utlån",
            imageUrl: "https://source.unsplash.com/random"
        },

        {
            title: "Friluftsliv",
            description: "Her kan du se klær til utlån",
            imageUrl: "https://source.unsplash.com/random"
        }


    ];
    return (
        <Container>

            <Grid container spacing={4} justify="center">

                {
                    menuItems.map(item => (
                            <Grid item>
                                <CategoryCard title={item.title} description={item.description} imageUrl={item.imageUrl}/>
                            </Grid>
                        )
                    )
                }

            </Grid>


        </Container>
    );
};

export default HomeMenu;