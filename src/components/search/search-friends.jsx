import React, {useEffect, useState} from 'react';
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import axios from "axios";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {fade} from "@material-ui/core";
import {Link} from "react-router-dom";
import {useTranslation} from 'react-i18next';
import {useParams} from "react-router";
import MenuItem from "@material-ui/core/MenuItem";


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
    link: {
        textDecoration: 'none',
        backgroundColor: 'transparent',
        color: "Black"
    }

}));

const SearchFriends = () => {
    const [userId, setId] = useState(sessionStorage.getItem('userId'));
    const [data, setData] = useState([]);
    const [dataFilterd, setDataFilterd] = useState([]);
    const [search, setSearch] = useState();
    const classes = useStyles();
    const [enter, setEnter] = React.useState(false);
    const {t} = useTranslation();
    const {id} = useParams();

    const handleChange = (event) => {
        setSearch(event.target.value);
        setDataFilterd(data.filter((user) => user.firstName.includes(search)));


        console.log('search', data.filter((user) => user && user.firstName.includes(event.target.value)))

    }
    useEffect(() => {
        console.log("getearch", userId, sessionStorage.getItem('userId'));
        axios.get('/users')
            .then((response) => {
                if (response.status === 200) {
                    console.log(response.data);
                    setData(response.data);
                    console.log("getsearch1", userId, sessionStorage.getItem('userId'));
                }
            })
            .catch(e => console.log(e));
    }, []);

    function onClickFriend(event) {
        console.log("on enter", event.target.value);
    }

    return (
        <Box m={2} display="flex" alignItems="center" flexDirection="column">
            <div className={classes.search}>
                <Autocomplete
                    id="combo-box-demo"
                    options={dataFilterd}
                    getOptionValue={option => option && option.id}
                    getOptionLabel={option => option && option.firstName}
                    style={{width: 210, backgroundColor: 'transparent', textDecoration: "none"}}
                    filterOptions={(x) => x}
                    clearOnEscape
                    renderInput={params => <TextField   {...params}
                                                        classes={{root: classes.inputRoot, input: classes.inputInput}}
                                                        label={t('nav.1')}
                                                        variant="filled"
                                                        onChange={handleChange}
                    />}
                    renderOption={(option => (
                        <MenuItem key={option.id} onClick={onClickFriend} value={option.id}>
                            <Link className={classes.link} to={'/FriendProfile/' + option.id} >
                                {`${option.firstName}  ${option.lastName}`}
                            </Link>
                        </MenuItem>
                    ))}
                />


            </div>

        </Box>

    );
};
export default SearchFriends;
