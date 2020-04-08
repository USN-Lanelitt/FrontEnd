import React, {useEffect, useState} from 'react';
import axios from "axios";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Chip from "@material-ui/core/Chip";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import FaceIcon from '@material-ui/icons/Face';
import ChatWindow from "../../components/chat/chat-window";




const useStyles = makeStyles(theme => ({
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 2),
    },
    chat: {
        marginLeft: '150px',
        width: '700px',
    },
    flex: {
        display: 'flex',
        alignItems: 'center',
    },
    chatListWindow: {
        height: '450px',
        width: '30%',
        borderRight: '1px solid grey',
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
    listItemText:{
        fontSize:'1.5em',
    }
}));

export default function Chat() {
    const classes = useStyles();
    const [userId, setUserId] = useState(sessionStorage.getItem('userId'));
    const [userId2, setUserId2] = useState([]);
    const [chatUsers, setChatUsers] = useState([]);
    const [selectedChat, setSelectedChat] = useState([]);
    const [textValue, setTextValue] = useState('');

    useEffect(() => {
        console.log("getChatUsers", userId, sessionStorage.getItem('userId'));
        axios.get('/users/getChats/51')
            .then(result => {
                console.log(result.data);
                setChatUsers(result.data);
            })
            .catch(e => console.log(e));
    },[setChatUsers, userId]);

    function showChat(userId2) {
        console.log("getChat", userId, sessionStorage.getItem('userId'));
        axios.get('/users/chat/51/'+userId2)
            .then(result => {
                console.log(result.data);
                setSelectedChat(result.data);
            })
            .catch(e => console.log(e));
    }

    function sendMessage(message) {
        console.log("sendMessage", userId, sessionStorage.getItem('userId'));
        axios.post('/users/writeMessage/51/52', {
            message: message
        })
            .then(result => {
                console.log(result.data);
            })
            .catch(e => console.log(e));
    }

    const onSelected = (id) => {
        setUserId2(id);
        showChat(id);
        console.log(id);
    };

    const handleClick = () => {
        sendMessage(textValue);
        console.log(textValue);
    };

    const chatUpdate = () => {
        showChat(userId2);
        console.log('update');
    };

    return (

        <React.Fragment>
            <div className={classes.heroContent}>
                <Container maxWidth="sm">
                    <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                        Meldinger
                    </Typography>
                </Container>
            </div>
            <Container >
                <Paper className={classes.chat}>
                    <div style={{borderBottom: '1px solid grey', padding:'10px'}}>
                        <Typography  variant="h5" component="h5">
                            Chats
                        </Typography>
                    </div>

                    <div className={classes.flex}>

                        <div className={classes.chatListWindow}>
                            <List>
                                {
                                    chatUsers.map((user) => (
                                        <ListItem key={user.id} button>
                                            <Chip icon={<FaceIcon />}
                                                  label={user.firstName}
                                                  color="primary"
                                                  classes={{primary:classes.listItemText}}
                                                  onClick={() => onSelected(user.id)}
                                            />
                                        </ListItem>
                                    ))
                                }
                            </List>
                        </div>

                        <div className={classes.chatWindow}>
                            <div className={classes.messageBox}>
                                <ChatWindow selectedChat = {selectedChat} />
                            </div>
                            <div className={classes.flex}>
                                <div style={{borderTop: '1px solid grey'}} className={classes.chatBox}>
                                    <TextField
                                        id="outlined-basic"
                                        label="Skriv en melding.."
                                        variant="outlined"
                                        className={classes.textField}
                                        value={textValue}
                                        onChange={e=> setTextValue(e.target.value)}
                                    />
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        className={classes.button}
                                        onClick={()=>{
                                            handleClick();
                                            chatUpdate();
                                            setTextValue('');
                                        }}
                                    >
                                        Send
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Paper>
            </Container>
        </React.Fragment>
    );
};
