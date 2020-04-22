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
import getChatUsers from "../../components/chat/get-chats";


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
        marginRight: '4px',
    },
    button: {
        marginTop: '10px',
    },
    smallAvatar: {
        width: '30px',
        height: '30px',
    },
}));

export default function Chat() {
    const { t } = useTranslation();
    const classes = useStyles();
    const [userId, setUserId] = useState(sessionStorage.getItem('userId'));
    const [userId2, setUserId2] = useState([]);
    const [chatUsers, setChatUsers] = useState([]);
    const [selectedChat, setSelectedChat] = useState(null);
    const [selectedUser, setSelectedUser] = useState('');
    const [textValue, setTextValue] = useState('');

    useEffect(() => {
        getChatUsers(userId, setChatUsers)
    }, [setChatUsers, userId]);

    function showChat(userId2) {
        console.log("getChat", userId, sessionStorage.getItem('userId'));
        axios.get('/users/chat/' + userId + '/' + userId2)
            .then(result => {
                console.log(result.data);
                setSelectedChat(result.data);
            })
            .catch(e => console.log(e));
    }

    function sendMessage(message) {
        console.log("sendMessage", userId, sessionStorage.getItem('userId'));
        axios.post('/users/writeMessage/' + userId + '/' + userId2, {
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
            <Container>
                <Paper className={classes.chat}>
                    <Box style={{borderBottom: '1px solid grey', padding: '10px'}} display="flex" alignItems="center">
                        <Box style={{width:'30%'}}>
                            <Box fontSize={30} fontWeight="fontWeightBold" m={1}gutterBottom>
                                {t('chat.2')}
                            </Box>
                        </Box>
                        <Box style={{paddingLeft:'10px'}}>
                            {selectedUser}
                        </Box>
                    </Box>

                    <Box display="flex" alignItems="center">
                        <Box height={1} className={classes.chatListWindow}>
                            <List className={classes.list}>
                                {
                                    chatUsers.map((user) => (
                                        <Box display="flex" width={1}>
                                            <ListItem key={user.id} button>
                                                <Box
                                                    onClick={() => {
                                                        setSelectedUser(
                                                            <Box display="flex" flexDirection="row" alignItems="center">
                                                                <Box mr={1}>
                                                                    <Avatar alt="img" src={user.profileImage} className={classes.smallAvatar}/>
                                                                </Box>
                                                                <Box fontSize={15} fontWeight="fontWeightBold" m={1}>
                                                                    {user.firstName} {user.lastName}
                                                                </Box>
                                                            </Box>
                                                        );
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

                                                </Box>
                                            </ListItem>
                                        </Box>
                                    ))
                                }
                            </List>
                        </Box>
                        <Box className={classes.chatWindow}>
                            <Box className={classes.messageBox}>
                                {selectedChat ?
                                    <ChatWindow selectedChat={selectedChat}/> :
                                    <Typography component="h4" variant="h5" align="center" style={{color: 'grey'}}>
                                        {t('chat.3')}
                                    </Typography>
                                }
                            </Box>
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
                        </Box>
                    </Box>
                </Paper>
            </Container>
        </React.Fragment>
    );
};
