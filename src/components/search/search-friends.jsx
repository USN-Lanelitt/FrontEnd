import React, {useEffect, useState} from 'react';
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import axios from "axios";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {fade} from "@material-ui/core";
import {Link} from "react-router-dom";
import CardActionArea from "@material-ui/core/CardActionArea";



const useStyles = makeStyles((theme) => ({

    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },

}));

const SearchFriends = () => {
    const [userId, setId] = useState(sessionStorage.getItem('userId'));
    const [data, setData] = useState([]);
    const [search, setSearch] = useState();
    const classes = useStyles();

    useEffect(() => {
        console.log("getcombosearch", userId, sessionStorage.getItem('userId'));
        axios.get('/users')
            .then((response) => {
                if (response.status === 200) {
                    console.log(response.data);
                    setData(response.data);
                    console.log("getcombosearch", userId, sessionStorage.getItem('userId'));
                }
            })
            .catch(e => console.log(e));
    }, [setData, userId]);


    return (
        <Box m={2} display="flex" alignItems="center" flexDirection="column">
            <div className={classes.search}>

            <Autocomplete component = {Link} to="/FriendProfile"
                id="combo-box-demo"
                options={data}
                getOptionLabel={option => option.firstName}
                style={{width: 210}}
                renderInput={params => <TextField   {...params}
                                                    classes={{
                                                        root: classes.inputRoot,
                                                        input: classes.inputInput,
                                                    }}
                                                  label="Søk på bruker..."
                                                  variant="filled"/>}
            />
            </div>

        </Box>

    );
};
export default SearchFriends;