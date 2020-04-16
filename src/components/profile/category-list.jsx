import React, {useState} from 'react';
import Box from "@material-ui/core/Box";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import axios from "axios";

const CategoryList = ({onChange, categoryId}) => {
    const inputLabel = React.useRef(null);
    const [value, setValue] = useState("");
    const [categories, setCategories] = useState([]);
    const [labelWidth, setLabelWidth] = React.useState(0);

    const getCategories = () => {
        axios.get(sessionStorage.getItem('API_URL')+"/assets/AllTypes")
            .then(result => {
                setCategories(result.data);
                console.log(result.data);
            })
            .catch(error => console.log(error));
    };

    React.useEffect(() => {
        setLabelWidth(inputLabel.current.offsetWidth);
        getCategories();
    }, []);


    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <Box mb={4} width={1}>
            <FormControl variant="outlined" fullWidth>
                <InputLabel ref={inputLabel} id="demo-simple-select-outlined-label">
                    Kategori
                </InputLabel>
                <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={categoryId}
                    onChange={(e) => onChange(e)}
                    labelWidth={labelWidth}
                >
                    {
                        categories.map(category => (
                            <MenuItem key={category.id} value={category.id}>
                                {category.assetType}
                            </MenuItem>
                        ))
                    }

                </Select>
            </FormControl>
        </Box>
    );
};

export default CategoryList;