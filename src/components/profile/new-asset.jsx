import React, {useState} from 'react';
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
import axios from "axios";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import CategoryList from "./category-list";

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
    const [labelWidth, setLabelWidth] = React.useState(0);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [isPublic, setIsPublic] = React.useState(true);
    const [category, setCategory] = React.useState(0);

    const save = () => {
        const asset = {
            assetName: title,
            description: description,
            userId: sessionStorage.getItem( 'userId' ),
            condition: "1",
            public: isPublic,
            typeId: category
        };

        axios.post("/assets/addAsset", asset)
            .then(result => {
                console.log(result);
            })
            .catch(error => console.log(error));

        console.log("new asset", asset);
    };


    return (
        <Box width={1} display="flex" justifyContent="center">
            <Card className={classes.card}>
                <CardHeader title="Legg til eiendel"/>

                <CardContent>
                    <Box mb={4} width={1}>
                        <TextField
                            value={title}
                            label="Tittel"
                            id="outlined-size-normal"
                            variant="outlined"
                            fullWidth
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </Box>
                   <CategoryList onChange={(e) => setCategory(e.target.value)} categoryId={category.id}/>
                    <Box mb={4} width={1}>
                        <TextField
                            value={description}
                            onChange={(event) => setDescription(event.target.value)}
                            id="outlined-multiline-static"
                            label="Beskrivelse"
                            multiline
                            rows="4"
                            variant="outlined"
                            fullWidth
                        />
                    </Box>
                    <ImageUploader/>
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={isPublic}
                                onChange={e => setIsPublic(e.target.checked)}
                                name="isPublic"/>
                        }
                        label="Offentlig"

                    />
                </CardContent>
                <CardActions>
                    <Button>Avbryt</Button>
                    <Button onClick={save}>Opprett</Button>
                </CardActions>
            </Card>
        </Box>
    );
}

export default NewAsset;