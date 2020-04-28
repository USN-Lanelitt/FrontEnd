import React, {useCallback, useState} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import {useTranslation} from "react-i18next";
import sendMessage from "./send-message";
import TextField from "@material-ui/core/TextField";
import SendIcon from '@material-ui/icons/Send';

const useStyles = makeStyles(theme => ({
    chatBox: {
        width: '100%',
        padding: '5px',
    },
    textField: {
        width: '89%',
    },
    button: {
        margin: '11px -10px 0 5px',
    },
    smallAvatar: {
        width: '30px',
        height: '30px',
    },
}));
function TextfieldMobile ({userId2}) {
    const { t } = useTranslation();
    const classes = useStyles();
    const [userId] = useState(sessionStorage.getItem('userId'));
    const [setSelectedChat] = useState(null);
    const [textValue, setTextValue] = useState('');

    const handleClick = () => {
        sendMessage(userId, userId2, textValue, setSelectedChat);
        console.log(textValue);
        setTextValue("");
    };

    return (
        /*Textfield og send knapp*/
        <Box display="flex" alignItems="center">
            <Box className={classes.chatBox}>
                <TextField
                    className={classes.textField}
                    margin="dense"
                    variant="outlined"
                    label={t('chat.4')}
                    onKeyPress={(ev) => {
                        console.log(`Pressed keyCode ${ev.key}`);
                        if (ev.key === 'Enter') {
                            console.log(`Pressed keyCode ${ev.key}`);
                            // Do code here
                            handleClick();
                            ev.preventDefault();
                        }
                    }}
                    value={textValue}
                    onChange={e => setTextValue(e.target.value)}
                />
                <SendIcon
                    fontSize="large"
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    onClick={() => {
                        handleClick();
                        setTextValue('');
                    }}
                />
            </Box>
        </Box>
    )
}
export default TextfieldMobile;