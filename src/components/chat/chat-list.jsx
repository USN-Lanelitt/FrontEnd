import React, {useState} from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from '@material-ui/core/styles';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Box from "@material-ui/core/Box";
import axios from "axios";

const useStyles = makeStyles(theme => ({
    list: {
        padding: '0px',
        maxHeight: '100%',
        overflow: "auto",
    },
    textBox: {
        display: "inline-block",
        width: "85%",
    },
    item: {
        paddingBottom: 0
    },
    bubble: {
        backgroundColor: "gainsboro",
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

function ChatList ({selectedChat}) {
    const classes = useStyles();


    return (
        <Box height={1} >
            <List className={classes.list}>
                {
                    selectedChat.map((chat) => (
                        <ListItem className={classes.item} key={chat.id}>
                            <Box className={classes.textBox}>
                                <Typography variant="caption" >
                                    {chat.user1.firstName}
                                </Typography>
                                <div className={classes.bubble}>
                                    <Typography variant="subtitle2" >{chat.message}</Typography>
                                </div>
                            </Box>
                            <Box className={classes.time}>
                                <Typography variant="caption">{chat.timestampSent}</Typography>
                            </Box>
                        </ListItem>
                    ))
                }
            </List>
        </Box>
    )
}

export default ChatList;
