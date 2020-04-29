import React, {useEffect, useState} from 'react';
import CategoryCard from "../profile/category-card";
import Grid from "@material-ui/core/Grid";
import {Container} from "@material-ui/core";
import axios from "axios";
import Progress from "../progress";

const HomeMenu = () => {

    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(false);

    const images = [
        "https://source.unsplash.com/D3nouOYbALc",
        "https://source.unsplash.com/wn-KYaHwcis",
        "https://source.unsplash.com/rjK8ifDLnIk",
        "https://source.unsplash.com/ohWf6YuzOQk",
        "https://source.unsplash.com/GurvlIZV3Ic",
        "https://source.unsplash.com/f2Bi-VBs71M",
        "https://source.unsplash.com/mrl0Gr8Y20s",
        "https://source.unsplash.com/cv4bk-aedJE",
        "https://source.unsplash.com/vD_qELkZaAs",
    ];


    const getCategories = () => {
        setLoading(true);
        axios.get("/assets/AllTypes")
            .then(result => {
                const assetTypes = result.data;
                for (let i = 0; i < assetTypes.length; i++) {
                    assetTypes[i].imageUrl = images[i];
                }
                setCategories(assetTypes);
            })
            .catch(error => console.log(error))
            .finally(() => setLoading(false));
    };

    useEffect(() => {
        getCategories();
    }, [])

    if (loading) return <Progress/>

    return (
        <Container>

            <Grid container spacing={4} justify="center">

                {
                    categories.map(category => (
                            <Grid item key={category.id}>
                                <CategoryCard id={category.id} title={category.assetType} imageUrl={category.imageUrl}/>
                            </Grid>
                        )
                    )
                }

            </Grid>


        </Container>
    );
};

export default HomeMenu;
