import React, {useEffect, useState} from 'react';
import axios from "axios";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import ChatWindow from "../../components/chat/chat-window";
import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import {useTranslation} from "react-i18next";


const useStyles = makeStyles(theme => ({
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 2),
    },
    chat: {
        marginLeft: '150px',
        width: '700px',
    },

    chatListWindow: {
        height: '450px',
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
        height: '450px',
        width: '70%',
    },
    messageBox: {
        height: '83%',
    },
    chatBox: {
        width: '100%',
        padding: '10px',
    },
    textField: {
        width: '85%',
    },
    button: {
        width: '15%',
        height: '55px',
    },
}));

export default function Chat() {
    const { t } = useTranslation();
    const classes = useStyles();
    const [userId, setUserId] = useState(sessionStorage.getItem('userId'));
    const [userId2, setUserId2] = useState([]);
    const [chatUsers, setChatUsers] = useState([]);
    const [selectedChat, setSelectedChat] = useState(null);
    const [textValue, setTextValue] = useState('');

    useEffect(() => {
        console.log("getChatUsers", userId, sessionStorage.getItem('userId'));
        axios.get(sessionStorage.getItem('API_URL')+'/users/getChats/' + userId)
            .then(result => {
                console.log(result.data);
                setChatUsers(result.data);
            })
            .catch(e => console.log(e));
    }, [setChatUsers, userId]);

    function showChat(userId2) {
        console.log("getChat", userId, sessionStorage.getItem('userId'));
        axios.get(sessionStorage.getItem('API_URL')+'/users/chat/' + userId + '/' + userId2)
            .then(result => {
                console.log(result.data);
                setSelectedChat(result.data);
            })
            .catch(e => console.log(e));
    }

    function sendMessage(message) {
        console.log("sendMessage", userId, sessionStorage.getItem('userId'));
        axios.post(sessionStorage.getItem('API_URL')+'/users/writeMessage/' + userId + '/' + userId2, {
            message: message
        })
            .then(result => {
                console.log(result.data);
                setSelectedChat(result.data);
            })
            .catch(e => console.log(e));
    }

    const onSelected = (id) => {
        showChat(id);
        console.log(id);
    };

    const handleClick = () => {
        sendMessage(textValue);
        console.log(textValue);
    };

    return (
        <React.Fragment>
            <div className={classes.heroContent}>
                <Container maxWidth="sm">
                    <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                        {t('chat.1')}
                    </Typography>
                </Container>
            </div>
            <Container>
                <Paper className={classes.chat}>
                    <div style={{borderBottom: '1px solid grey', padding: '10px'}}>
                        <Typography variant="h5" component="h5">
                            {t('chat.2')}
                        </Typography>
                    </div>

                    <Box display="flex" alignItems="center">
                        <div className={classes.chatListWindow}>

                            <List>
                                {
                                    chatUsers.map((user) => (
                                        <Box display="flex" width={1}>
                                            <ListItem key={user.id} button>
                                                <div
                                                    onClick={() => {
                                                        onSelected(user.id);
                                                        setUserId2(user.id);
                                                    }}
                                                >
                                                    <Box display="flex" flexDirection="row" alignItems="center">
                                                        <Box mr={1}>
                                                            <Avatar alt="img" src={user.profileImage}/>
                                                        </Box>
                                                        <Box>
                                                            {user.firstName} {user.lastName}
                                                        </Box>
                                                    </Box>

                                                </div>
                                            </ListItem>
                                        </Box>
                                    ))
                                }
                            </List>

                        </div>
                        <div className={classes.chatWindow}>
                            <div className={classes.messageBox}>
                                {selectedChat ?
                                    <ChatWindow selectedChat={selectedChat}/> :
                                    <Typography component="h4" variant="h5" align="center" style={{color: 'grey'}}>
                                        {t('chat.3')}
                                    </Typography>
                                }
                            </div>
                            <Box display="flex" alignItems="center">
                                <div style={{borderTop: '1px solid grey'}} className={classes.chatBox}>
                                    <TextField
                                        id="outlined-basic"
                                        label={t('chat.4')}
                                        variant="outlined"
                                        className={classes.textField}
                                        value={textValue}
                                        onChange={e => setTextValue(e.target.value)}
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
                                </div>
                            </Box>
                        </div>
                    </Box>
                </Paper>
            </Container>
        </React.Fragment>
    );
};