import React, {useEffect, useState} from 'react';
import CategoryCard from "./category-card";
import Grid from "@material-ui/core/Grid";
import {Container} from "@material-ui/core";
import axios from "axios";

const HomeMenu = () => {

    const [categories, setCategories] = useState([]);


    const getCategories = () => {
        axios.get("/assets/AllTypes")
            .then(result => {
                setCategories(result.data);
                console.log(result.data);
            })
            .catch(error => console.log(error));
    };

    useEffect(() => {
        getCategories();
    }, [])






    return (
        <Container>

            <Grid container spacing={4} justify="center">

                {
                    categories.map(category => (
                            <Grid item key={category.id}>
                                <CategoryCard id={category.id} title={category.assetType} imageUrl="https://source.unsplash.com/random"/>
                            </Grid>
                        )
                    )
                }

            </Grid>


        </Container>
    );
};

export default HomeMenu;