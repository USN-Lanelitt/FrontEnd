import React from 'react';
import {Container} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import AssetCard from "./asset-card";

const AssetsList = () => {
    const menuItems = [
        {
            title: "Header",
            description: "Kort beskrivelse av produktet som lånes ut.",
            imageUrl: "https://source.unsplash.com/random"
        },
        {
            title: "Header",
            description: "Kort beskrivelse av produktet som lånes ut.",
            imageUrl: "https://source.unsplash.com/random"
        },
        {
            title: "Header",
            description: "Kort beskrivelse av produktet som lånes ut.",
            imageUrl: "https://source.unsplash.com/random"
        },
        {
            title: "Header",
            description: "Kort beskrivelse av produktet som lånes ut.",
            imageUrl: "https://source.unsplash.com/random"
        },
        {
            title: "Header",
            description: "Kort beskrivelse av produktet som lånes ut.",
            imageUrl: "https://source.unsplash.com/random"
        },

        {
            title: "Header",
            description: "Kort beskrivelse av produktet som lånes ut",
            imageUrl: "https://source.unsplash.com/random"
        }
        ];
    return (
        <Container>

            <Grid container spacing={3} justify="center">

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

export default AssetsList;