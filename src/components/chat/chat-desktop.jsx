import React, {useEffect, useState} from 'react';
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ChatList from "./chat-list";
import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import {useTranslation} from "react-i18next";
import getChatUsers from "./get-chats";
import showChat from "./show-chat";
import TextfieldMobile from "./textfield-mobile";


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

export default function ChatDesktop() {
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

/*    function showChat(userId2) {
        console.log("getChat", userId, sessionStorage.getItem('userId'));
        axios.get('/users/chat/' + userId + '/' + userId2)
            .then(result => {
                console.log(result.data);
                setSelectedChat(result.data);
            })
            .catch(e => console.log(e));
    }*/

/*    function sendMessage(message) {
        console.log("sendMessage", userId, sessionStorage.getItem('userId'));
        axios.post('/users/writeMessage/' + userId + '/' + userId2, {
            message: message
        })
            .then(result => {
                console.log(result.data);
                setSelectedChat(result.data);
            })
            .catch(e => console.log(e));
    }*/

    const onSelected = (userId2) => {
        showChat(userId, userId2, setSelectedChat);
        console.log(userId2);
    };

/*    const handleClick = () => {
        sendMessage(textValue);
        console.log(textValue);
    };*/

    return (
        <React.Fragment>
            <Container>
                <Paper className={classes.chat}>
                    {/*----------top------------*/}
                    <Box style={{borderBottom: '1px solid grey', padding: '10px'}} display="flex" alignItems="center">
                        <Box style={{width:'30%'}}>
                            <Box fontSize={30} fontWeight="fontWeightBold" m={1} gutterBottom>
                                {t('chat.2')}
                            </Box>
                        </Box>
                        <Box style={{paddingLeft:'10px'}}>
                            {selectedUser}
                        </Box>
                    </Box>

                    <Box display="flex" alignItems="center">
                        {/*----------sidelist------------*/}
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
                        {/*----------chat window------------*/}
                        <Box className={classes.chatWindow}>
                            <Box className={classes.messageBox}>
                                {selectedChat ?
                                    <ChatList selectedChat={selectedChat}/> :
                                    <Typography component="h4" variant="h5" align="center" style={{color: 'grey'}}>
                                        {t('chat.3')}
                                    </Typography>
                                }
                            </Box>
                            <TextfieldMobile userId2={userId2}/>

                        </Box>
                    </Box>
                </Paper>
            </Container>
        </React.Fragment>
    );
};
