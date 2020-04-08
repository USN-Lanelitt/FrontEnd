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

        return (
            <div >
                <List>
                    {
                        selectedChat.map((chat) => (
                            <ListItem className={classes.chatBox} key={chat.id} >
                                <Typography variant="caption" >
                                    {chat.user1.firstName}
                                </Typography>

                                <div>
                                    <Chip label= {chat.message} />
                                </div>
                            </ListItem>
                        ))
                    }
                </List>

            </div>
        )
    }

export default ChatWindow;