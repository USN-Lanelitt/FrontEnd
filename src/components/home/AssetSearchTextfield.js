import React, {useEffect, useState} from 'react';
import axios from "axios";
import TextField from "@material-ui/core/TextField";
import {useTranslation} from "react-i18next";
import {Redirect} from "react-router";
import useInput from "../rating/use-input";

const AssetSearch = () => {
    const { t, i18n } = useTranslation();

    const [categories, setCategories] = useState([]);
    const [redirect, setRedirect] = useState(false);
    const { value:search, bind:bindSearch} = useInput('');



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

    if(redirect==true){
        return <Redirect to={"/assetsearch/"+search}/>

        //component={Link}to={"/assetsearch/" + "tel"
    }

    return (
            <TextField
                id="outlined-full-width"
                label={t('home.4')}
                style={{margin: 8}}
                placeholder={t('home.2')}
                helperText={t('home.5')}
                onKeyPress={(ev) => {
                    console.log(`Pressed keyCode ${ev.key}`);
                    if (ev.key === 'Enter') {
                        console.log(`Pressed keyCode ${ev.key}`);
                        // Do code here
                        setRedirect(true);
                        ev.preventDefault();
                    }
                }}
                fullWidth
                margin="normal"
                InputLabelProps={{
                    shrink: true,
                }}
                variant="outlined"
                {...bindSearch}
            />
    );
};

export default AssetSearch;
