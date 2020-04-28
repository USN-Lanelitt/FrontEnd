import React, {useState} from 'react';
import TextField from "@material-ui/core/TextField";
import {useTranslation} from "react-i18next";
import {Redirect} from "react-router";
import useInput from "../div/use-input";

const AssetSearchTextfield = () => {
    const { t } = useTranslation();

    const [redirect, setRedirect] = useState(false);
    const { value:search, bind:bindSearch} = useInput('');

    if(redirect===true){
        return <Redirect to={"/assetsearch/"+search}/>
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

export default AssetSearchTextfield;
