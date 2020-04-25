import React, {useEffect, useState} from 'react';
import Container from "@material-ui/core/Container";
import {makeStyles} from "@material-ui/core/styles";
import ChatList from "./chat-list";
import Box from "@material-ui/core/Box";
import {useTranslation} from "react-i18next";
import showChat from "./show-chat";
import {Redirect, useParams} from "react-router";
import TextfieldMobile from "./textfield-mobile";
import {Link} from "react-router-dom";
import Button from "@material-ui/core/Button";
import SendIcon from "@material-ui/icons/Send";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import AirlineSeatIndividualSuiteRoundedIcon from '@material-ui/icons/AirlineSeatIndividualSuiteRounded';
import ListItem from "@material-ui/core/ListItem";
import sendMessage from "./send-message";

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
        //overflow: "auto",
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
    const {userId2, firstName, lastName} = useParams();
    const [redirect, setRedirect] = useState(false);

    const onSelected = (userId2) => {
        setSelectedUser(userId2);
        console.log(userId2);
    };

    useEffect(() => {
        showChat(userId, userId2, setSelectedChat);
        console.log(userId2);
    }, []);

    if(redirect==true){
        return <Redirect to={"/chat"}/>
    }

    return (
        <React.Fragment>
            <Container style={{paddingLeft:0, paddingRight:0}}>
                <Box className={classes.chat}>
                    <Box style={{width:'100%'}}>
                        <Box fontSize={15} fontWeight="fontWeightBold"  m={1} gutterBottom>
                            <ArrowBackIosIcon
                                fontSize="small"
                                variant="contained"
                                color="primary"
                                aria-hidden={"false"}
                                onClick={() => {
                                    setRedirect(true)
                                }}
                            />
                            {firstName+" "+lastName}
                        </Box>
                    </Box>

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
