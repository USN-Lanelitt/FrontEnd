import React, {useState} from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from '@material-ui/core/styles';
import Chip from "@material-ui/core/Chip";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";


const useStyles = makeStyles(theme => ({
    text: {

    },
    chatBox: {
        width: '85%',
        textAlign: 'right'
    },

}));


function ChatWindow ({selectedChat}) {
    const [userId, setId] = useState('nicole');
    const classes = useStyles();
    const [side, setSide] = useState('left');

    function changeSide(id) {

        if(id === userId) {
            const side = {
                textAlign: 'right'
            }
            console.log('right');
        }

    }

        console.log(selectedChat);

        return (
            <div >
                <List>
                    {
                        selectedChat.map((chat) => (
                            <ListItem className={classes.chatBox} key={chat.id} >
                                <Typography variant="caption" >
                                    {chat.user1}
                                </Typography>

                                <div>
                                    <Chip label= {chat.message} className={classes.chip} />
                                </div>
                            </ListItem>
                        ))
                    }
                </List>

            </div>
        )
    }

export default ChatWindow;