import React, {useEffect, useState} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import {useTranslation} from "react-i18next";
import sendMessage from "./send-message";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";


const useStyles = makeStyles(theme => ({
    chat: {
        marginLeft: '150px',
        width: '900px',
    },
    list: {
        padding: '0px',
        maxHeight: '100%',
        overflow: "auto",
    },
    chatListWindow: {
        height: '500px',
        width: '30%',
        borderRight: '1px solid grey',
    },
    bubble: {
        backgroundColor: "silver",
        textAlign: "left",
        borderRadius: "20px",
        padding: "5px 15px",
        marginLeft: "5px",
        display: "inline-block",
        maxWidth: "70%",
    },
    chatWindow: {
        height: '500px',
        width: '70%',
    },
    messageBox: {
        height: '86%',
    },
    chatBox: {
        width: '100%',
        padding: '5px',
        justifyContent: 'space-evenly',
    },
    textField: {
        width: '86%',
    },
    button: {
        marginTop: '4px',
    },
    smallAvatar: {
        width: '30px',
        height: '30px',
    },
}));
export default function TextfieldWindow (userId2) {
    const { t } = useTranslation();
    const classes = useStyles();
    const [userId, setUserId] = useState(sessionStorage.getItem('userId'));
    const [selectedChat, setSelectedChat] = useState(null);
    const [textValue, setTextValue] = useState('');

    const handleClick = () => {
        sendMessage(userId, userId2, textValue, setSelectedChat);
        console.log(textValue);
    };



    return (
        /*Textfield og send knapp*/
        <Box display="flex" alignItems="center">
            <Box className={classes.chatBox}>
                <TextField
                    label="Dense"
                    id="outlined-margin-dense"
                    defaultValue="Default Value"
                    className={classes.textField}
                    margin="dense"
                    variant="outlined"
                    label={t('chat.4')}
                    className={classes.textField}
                    value={textValue}
                    onChange={e => setTextValue(e.target.value)}
                    onKeyPress={(ev) => {
                        console.log(`Pressed enter`);
                        if (ev.key === 'Enter') {
                            handleClick();
                            setTextValue('');
                        }
                    }}
                />
                <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    onClick={() => {
                        handleClick();
                        setTextValue('');
                    }}
                >
                    Send
                </Button>
            </Box>
        </Box>
    )
}
