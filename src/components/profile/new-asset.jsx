import React, {useState} from 'react';
import TextField from "@material-ui/core/TextField";
import {Box} from "@material-ui/core";
import Card from "@material-ui/core/Card";
import makeStyles from "@material-ui/core/styles/makeStyles";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import CardHeader from "@material-ui/core/CardHeader";
import axios from "axios";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import CategoryList from "./category-list";
import StatusMessage from "./status-message";
import {Redirect} from "react-router";
import {useTranslation} from "react-i18next";

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
    },
    root: {
        height: "100%",
    },
    media: {
        height: "250px",
        width: "250px",
        borderRadius: "4px",
    },
}));


const NewAsset = () => {
    const { t } = useTranslation();
    const classes = useStyles();
    const [redirect, setRedirect] = React.useState(false);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [isPublic, setIsPublic] = React.useState(true);
    const [category, setCategory] = React.useState(0);
    const [showStatusMessage, setShowStatusMessage] = useState(false);
    const [statusMessage, setStatusMessage] = useState("");
    const [statusMessageSeverity, setStatusMessageSeverity] = useState("info");
    const [file, setFile] = useState({ preview: null, raw: null })

    const handleChange = (e) => {
        setFile({
            preview: URL.createObjectURL(e.target.files[0]),
            raw: e.target.files[0]
        })
    };

    const save = () => {

        const asset = new FormData();
        asset.append('file', file.raw);
        asset.append('mainImage', true);
        asset.append('assetName', title);
        asset.append('description',description);
        asset.append('userId', sessionStorage.getItem('userId'));
        asset.append('condition',"1");
        asset.append('public', isPublic);
        asset.append('typeId', category);


        axios.post("/assets/addAsset", asset)
            .then(result => {
                console.log("result"+result.data);
                if(result.data){
                    setShowStatusMessage(true);
                    setStatusMessage("Eiendelen ble opprettet!")
                    setStatusMessageSeverity("success");
                    setTimeout(() => setRedirect(true), 1000) ;
                }else{
                    setShowStatusMessage(true);
                    setStatusMessage("Ups, dette gikk ikke helt etter planen!");
                }
            })
            .catch(error => {
                console.log(error);
                setShowStatusMessage(true);
                setStatusMessage("Ups, dette gikk ikke helt etter planen!");
            });

        console.log("new asset", asset);
    };

    if (redirect) return <Redirect to="/prof"/>;

    return (
        <Box width={1} display="flex" justifyContent="center">
            <StatusMessage show={showStatusMessage} message={statusMessage} severity={statusMessageSeverity}
                           onClose={setShowStatusMessage}/>

            <Card className={classes.card}>
                <CardHeader title={t('new-asset.1')}/>

                <CardContent>
                    <Box mb={4} width={1}>
                        <TextField
                            value={title}
                            label={t('new-asset.2')}
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
                            label={t('new-asset.3')}
                            multiline
                            rows="4"
                            variant="outlined"
                            fullWidth
                        />
                    </Box>
                    <Box display="flex" justifyContent="space-evenly" flexDirection="column" alignItems="center" className={classes.root}>
                        <Box className={classes.media}
                             display="flex"
                             mb={4}
                        >
                            {
                                file.preview ?
                                    <img src={file.preview}  alt="Protocol illustration"
                                         className={classes.media}/> :
                                    (<img src={"/DefaultAssetImage.png"}  alt="Protocol illustration"
                                          className={classes.media}/>)}
                        </Box>

                        <div>
                            <label htmlFor="upload-button"
                                   style={{
                                       backgroundColor: 'blue',
                                       color: 'white',
                                       padding: "4px 8px 4px 8px",
                                       borderRadius: 4,
                                       textAlign: "center" }}
                            >
                                {t('new-asset.4')}
                            </label>

                            <input type="file" id="upload-button" accept="image/*" style={{ display: 'none' }} onChange={handleChange} multiple="false"/>

                        </div>
                    </Box>
                   <FormControlLabel
                        control={
                            <Checkbox
                                checked={isPublic}
                                onChange={e => setIsPublic(e.target.checked)}
                                name="isPublic"/>
                        }
                        label={t('new-asset.5')}

                    />
                </CardContent>
                <CardActions>
                    <Button>Avbryt</Button>
                    <Button onClick={()=>{
                        save();
                    }}
                    >
                        {t('new-asset.6')}
                    </Button>

                </CardActions>
            </Card>
        </Box>
    );
}

export default NewAsset;
