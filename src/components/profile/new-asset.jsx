import React from 'react';
import TextField from "@material-ui/core/TextField";
import {Box} from "@material-ui/core";
import Card from "@material-ui/core/Card";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import CardHeader from "@material-ui/core/CardHeader";
import ImageUploader from "../assets/image-uploader";

const useStyles = makeStyles((theme) => ({
    card: {
        // display: "flex",
        // flexDirection: "column",
        // alignItems: "flex-start",
        // padding: theme.spacing(2),
        [theme.breakpoints.between('xs', 'sm')]: {
            minWidth: "100%"
        },
        minWidth: "50%",

    }
}));


const NewAsset = () => {
    const [value, setValue] = React.useState('Controlled');
    const classes = useStyles();
    const inputLabel = React.useRef(null);
    const [labelWidth, setLabelWidth] = React.useState(0);
    React.useEffect(() => {
        setLabelWidth(inputLabel.current.offsetWidth);
    }, []);

    const handleChange = event => {
        setValue(event.target.value);
    };


    return (
        <Box width={1} display="flex" justifyContent="center">
            <Card className={classes.card}>
                <CardHeader title="Legg til eiendel"/>

                <CardContent>
                    <Box mb={4} width={1}>
                        <TextField
                            label="Tittel"
                            id="outlined-size-normal"
                            variant="outlined"
                            fullWidth
                        />
                    </Box>
                    <Box mb={4} width={1}>
                        <FormControl variant="outlined" fullWidth>
                            <InputLabel ref={inputLabel} id="demo-simple-select-outlined-label">
                                Kategori
                            </InputLabel>
                            <Select
                                labelId="demo-simple-select-outlined-label"
                                id="demo-simple-select-outlined"
                                value={""}
                                onChange={handleChange}
                                labelWidth={labelWidth}
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>klær</MenuItem>
                                <MenuItem value={20}>verktøy</MenuItem>
                                <MenuItem value={30}>sko</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                    <Box mb={4} width={1}>
                        <TextField
                            id="outlined-multiline-static"
                            label="Beskrivelse"
                            multiline
                            rows="4"
                            variant="outlined"
                            fullWidth
                        />
                    </Box>
                    <ImageUploader/>
                </CardContent>
                <CardActions>
                    <Button>Avbryt</Button>
                    <Button>Opprett</Button>
                </CardActions>
            </Card>
        </Box>
    );
};

export default NewAsset;