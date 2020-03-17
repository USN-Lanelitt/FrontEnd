import React, {useEffect, useState} from 'react';
import CustomUploadButton from "react-firebase-file-uploader/lib/CustomUploadButton";
import LinearProgress from "@material-ui/core/LinearProgress";
import Box from "@material-ui/core/Box";
import {makeStyles} from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";
import * as firebase from "firebase";

const useStyles = makeStyles(theme => ({
    root: {
        height: "100%",
    },
    media: {
        height: "250px",
        width: "250px",
        borderRadius: "4px",
    },
    uploadButton: {
        backgroundColor: theme.palette.primary.main,
        color: 'white',
        padding: 10,
        borderRadius: 4
    },

}));

const ImageUploader = (props) => {
    const classes = useStyles();
    const [isUploading, setIsUploading] = useState(false);
    const [progress, setProgress] = useState(0);
    const [url, setUrl] = useState(null);
    const [isImageLoading, setIsImageLoading] = useState(true);

    useEffect(() => {
        setUrl("https://source.unsplash.com/random")

    }, );

    const handleUploadStart = () => {
        setIsUploading(true);

    };
    const handleProgress = progress => setProgress(progress);
    const handleUploadError = error => {
        setIsUploading(false)
        console.error(error);
    };
    const handleUploadSuccess = filename => {
        setUrl(null);
        setIsImageLoading(true);
        setIsUploading(false);
        setProgress(100);
        firebase.storage()
            .ref("images")
            .child(filename)
            .getDownloadURL()
            .then(url => {

                    setUrl(url);
                }
            );
    };

    return (
        <Box display="flex" justifyContent="space-evenly" flexDirection="column" alignItems="center" className={classes.root}>
            <Box className={classes.media}
                 display="flex"
                 justifyContent="center"
                 alignItems="center"
                 mb={4}
            >
                {url !== null &&
                <img src={url} onLoad={() => setIsImageLoading(false)} alt="Protocol illustration"
                     className={classes.media}/>}
                {(isImageLoading) && <Box position={"absolute"}><CircularProgress color={"secondary"}/></Box>}
            </Box>
            {isUploading && <LinearProgress thickness={10} color="secondary" variant="determinate" value={progress}/>}

            <CustomUploadButton
                hidden
                accept="image/*"
                onUploadStart={handleUploadStart}
                onUploadError={handleUploadError}
                onUploadSuccess={handleUploadSuccess}
                onProgress={handleProgress}
                randomizeFilename
                maxHeight={250}
                maxWidth={250}
                style={{
                    backgroundColor: 'blue',
                    color: 'white',
                    padding: "4px 8px 4px 8px",
                    borderRadius: 4,
                    textAlign: "center"
                }}>
                LAST OPP BILDE
            </CustomUploadButton>

        </Box>

    );
};

export default ImageUploader;