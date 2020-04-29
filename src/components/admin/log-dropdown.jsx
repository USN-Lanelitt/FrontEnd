import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import React, {useEffect} from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import axios from "axios";
import { useTranslation } from 'react-i18next';
import {Redirect} from "react-router";
import {adminRefrech} from "../../feature/Admin/admin-refrech";

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

const LogDropdown = () => {
    const { t } = useTranslation();
    const classes = useStyles();
    const [levels, setLevels] = React.useState('');
    const [selectedLevel, setSelectedLevel] = React.useState('');
    const [redirect, setRedirect] = React.useState(false);

    useEffect(() => {
        console.log("getLevels ", sessionStorage.getItem('userId'));
        axios.get('/getLevels').then((response) => {
            if (response.status === 200) {
                console.log(response.data);
                setLevels(response.data);
            }
        })
            .catch(e => console.log(e));
    }, []);

    useEffect(() => {
        console.log("getLevel ", sessionStorage.getItem('userId'));
        axios.get('/getLevel').then((response) => {
            if (response.status === 200) {
                console.log(response.data);
                setSelectedLevel(response.data);
            }
        })
            .catch(e => console.log(e));
    }, []);

    const setLevel = (newLevel) => {
        console.log("setLevel ", sessionStorage.getItem('userId'));
        axios.post('/setLevel/'+newLevel).then((response) => {
            if (response.status === 200) {
                console.log(response.data);
                adminRefrech(setSelectedLevel);
            }
        })
            .catch(e => console.log(e));
    }

    const handleChange = (event) => {
        setLevel(event.target.value);
        //setRedirect(true);
    };

    if (redirect) return <Redirect to="/admin"/>;

    return (
        <div>
            <FormControl className={classes.formControl}>
                <InputLabel id="demo-controlled-open-select-label">Log Level</InputLabel>
                <Select
                    labelId="demo-controlled-open-select-label"
                    id="demo-controlled-open-select"
                    value={selectedLevel}
                    onChange={handleChange}
                    defaultValue={sessionStorage.getItem('firstname')}
                >
                    <MenuItem value={0}>No Logging</MenuItem>
                    <MenuItem value={1}>Simple change log, 1 file</MenuItem>
                    <MenuItem value={2}>Detailed change log, 1 file</MenuItem>
                    <MenuItem value={3}>Simple change log, multiple files</MenuItem>
                    <MenuItem value={4}>Detailed change log, multiple files</MenuItem>
                    <MenuItem value={5}>Simple change and get log, 1 file</MenuItem>
                    <MenuItem value={6}>Detailed change and get log, 1 file</MenuItem>
                    <MenuItem value={7}>Simple change and get log, multiple files</MenuItem>
                    <MenuItem value={8}>Detailed change and get log, multiple files</MenuItem>
                </Select>
            </FormControl>
        </div>
    )
};
export default LogDropdown;
