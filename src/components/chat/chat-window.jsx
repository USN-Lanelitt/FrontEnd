import React, {useState} from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from '@material-ui/core/styles';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

const useStyles = makeStyles(theme => ({
    textBox: {
        display: "inline-block",
        width: "85%",
    },
    item: {
        paddingBottom: 0
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
    time: {
        textAlign: "right",
        display: "inline-block",
    },

}))

function ChatWindow ({selectedChat}) {
    const [userId, setId] = useState('nicole');
    const classes = useStyles();

    return (
        <div >
            <List>
                {
                    selectedChat.map((chat) => (
                        <ListItem className={classes.item} key={chat.id}>
                            <div className={classes.textBox}>
                                <Typography variant="caption" >
                                    {chat.user1.firstName}
                                </Typography>
                                <div className={classes.bubble}>
                                    <Typography variant="subtitle2" >{chat.message}</Typography>
                                </div>
                            </div>
                            <div className={classes.time}>
                                <Typography variant="caption">{chat.timestampSent}</Typography>
                            </div>
                        </ListItem>
                    ))
                }
            </List>
        </div>
    )
}

export default ChatWindow;