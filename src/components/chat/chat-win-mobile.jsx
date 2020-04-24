import React, {useEffect, useState} from 'react';
import Container from "@material-ui/core/Container";
import {makeStyles} from "@material-ui/core/styles";
import ChatList from "./chat-list";
import Box from "@material-ui/core/Box";
import {useTranslation} from "react-i18next";
import showChat from "./show-chat";
import {useParams} from "react-router";
import TextfieldMobile from "./textfield-mobile";


const useStyles = makeStyles(theme => ({
    chat: {
        width: '100%',
    },
    chatWindow: {
        height: '550px',
        width: '100%',
    },
    messageBox: {
        padding: '0px',
        height: '100%',
        overflow: "auto",
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
    smallAvatar: {
        width: '30px',
        height: '30px',
    },
}));

export default function ChatWinMobile() {
    const { t } = useTranslation();
    const classes = useStyles();
    const [userId, setUserId] = useState(sessionStorage.getItem('userId'));
    const [selectedChat, setSelectedChat] = useState(null);
    const [selectedUser, setSelectedUser] = useState('');
    const [textValue, setTextValue] = useState('');
    const {userId2} = useParams();

    const onSelected = (userId2) => {
        setSelectedUser(userId2);
        console.log(userId2);
    };

    useEffect(() => {
        showChat(userId, userId2, setSelectedChat);
        console.log(userId2);
    }, []);


    return (
        <React.Fragment>
            <Container style={{paddingLeft:0, paddingRight:0}}>
                <Box className={classes.chat}>
{/*                 <Box style={{width:'30%'}}>
                        <Box fontSize={30} fontWeight="fontWeightBold" m={1} gutterBottom>
                            Melding
                        </Box>
                    </Box>*/}

                    <Box display="flex" alignItems="center">
                        <Box className={classes.chatWindow}>
                            <Box className={classes.messageBox}>
                                {selectedChat &&
                                    <ChatList selectedChat={selectedChat}/>
                                }
                            </Box>
                            <TextfieldMobile userId2={userId2}/>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </React.Fragment>
    );
};
