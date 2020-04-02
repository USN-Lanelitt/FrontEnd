import React, {useEffect, useState} from 'react';
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import axios from "axios";

const SearchFriends = () => {
    const [userId, setId] = useState(sessionStorage.getItem('userId'));
    const [data, setData] = useState([]);
    const [search, setSearch] = useState();

            useEffect(()=> {
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
            <Autocomplete
                id="combo-box-demo"                                                  
                options={data}
                getOptionLabel={option => option.firstName}
                style={{ width: 210}}
                renderInput={params => <TextField {...params} label="Søk på bruker..." variant="outlined"/>}
            />
        </Box>

    );
};
export default SearchFriends;