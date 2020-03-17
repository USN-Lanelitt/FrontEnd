import React from 'react';
import {Container} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import CategoryCard from "../../components/home/category-card";
import AssetCard from "./asset-card";

const AssetsMenu = () => {
    const menuItems = [
        {
            title: "Rulleskøyter",
            description: "Rulleskøyter i str. 35. Lite brukt.",
            imageUrl: "https://source.unsplash.com/P1N0xvYCgOQ"
        },

        {
            title: "Verktøy",
            description: "Her kan du se verktøy til utlån",
            imageUrl: "https://source.unsplash.com//CXlls8jm1VI"
        }
        ];
    return (
        <Container>

            <Grid container spacing={4} justify="center">

                {
                    menuItems.map(item => (
                            <Grid item>
                                <AssetCard title={item.title} description={item.description} imageUrl={item.imageUrl}/>
                            </Grid>
                        )
                    )
                }

            </Grid>


        </Container>
    );
};

export default AssetsMenu;