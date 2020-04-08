import React from 'react';
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

const initUsers = [
    {
        id:1,
        firstName: "nicky bendu",
        chat: [

            {
                id: 1,
                user1: "nicole",
                user2: "nicky",
                message: "blaaaaa",
            },
            {
                id: 2,
                user1: "nicky",
                user2: "nicole",
                message: "bla",
            },
            {
                id: 3,
                user1: "nicole",
                user2: "nicky",
                message: "hva skjer?",
            }
        ],
    },
    {
        id:2,
        firstName: "nick bendu",
        chat: [
            {
                id: 1,
                user1: "nicole bendu",
                user2: "nick bendu",
                message: "Hallo",
            },
            {
                id: 2,
                user1: "nick bendu",
                user2: "nicole bendu",
                message: "hei",
            },
            {
                id: 3,
                user1: "nicole bendu",
                user2: "nick bendu",
                message: "hva skjer?",
            }

        ],
    },
];


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

    const [users, setUsers] = React.useState(initUsers);

    const [selectedChat, setSelectedChat] = React.useState([]);

    const [textValue, setTextValue] = React.useState('');

    const onSelected = (chat) => {
        setSelectedChat(chat);
        console.log(chat);
    };

    {/*useEffect(() => {
        AllFriends();
    },[setData, userId]);

    function AllFriends(){
        console.log("hello from AllFriends", userId, sessionStorage.getItem('userId'));
        axios.get('/user/' + userId + '/friends')
            .then(result => {
                console.log(result.data);
                setData(result.data);
            })
            .catch(e => console.log(e));
    }*/}


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
                                    users.map((user) => (
                                        <ListItem key={user.id} button>
                                            <Chip icon={<FaceIcon />}
                                                  label={user.firstName}
                                                  color="primary" classes={{primary:classes.listItemText}} onClick={() => onSelected(user.chat)} />
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
                                    <Button variant="contained" color="primary" className={classes.button}>
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
