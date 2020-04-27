import React, {useEffect, useState} from 'react';
import Container from "@material-ui/core/Container";
import {makeStyles} from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import {useTranslation} from "react-i18next";
import getChatUsers from "./get-chats";
import showChat from "./show-chat";
import {Link} from "react-router-dom";
import Button from "@material-ui/core/Button";


const useStyles = makeStyles(theme => ({
    chat: {
        width: '100%',

    },
    chatListWindow: {
        height: '550px',
        width: '100%',
    },
    list: {
        padding: '0px',
        height: '100%',
        overflow: "auto",
    },
    largeAvatar: {
        width: '50px',
        height: '50px',
    },
}));


const ChatUsersMobile = () => {
    const { t } = useTranslation();
    const classes = useStyles();
    const [userId, setUserId] = useState(sessionStorage.getItem('userId'));
    const [userId2, setUserId2] = useState([]);
    const [chatUsers, setChatUsers] = useState([]);
    const [selectedChat, setSelectedChat] = useState(null);

    useEffect(() => {
        getChatUsers(userId, setChatUsers)
    }, [setChatUsers, userId]);


    return (
        <React.Fragment>
                <Box className={classes.chat}>
                    <Box display="flex" alignItems="center">
                        <Box fontSize={25}  ml={15} gutterbottom >
                            Meldinger
                        </Box>
                    </Box>
                    <Box display="flex" alignItems="center">
                        <Box className={classes.chatListWindow}>
                            <List className={classes.list}>
                                {
                                    chatUsers.map((user) => (
                                        <Box display="flex" width={1} key={user.id}>
                                            <ListItem key={user.id} button component={Link} to={"/chat/" + user.id}>
                                                <Box
                                                    onClick={() => {
                                         /*               setSelectedUser(
                                                            <Box display="flex" flexDirection="row" alignItems="center">
                                                                <Box mr={1}>
                                                                    <Avatar alt="img" src={user.profileImage} className={classes.smallAvatar}/>
                                                                </Box>
                                                                <Box fontSize={15} fontWeight="fontWeightBold" m={1}>
                                                                    {user.firstName} {user.lastName}
                                                                </Box>
                                                            </Box>
                                                        );*/
                                                        setUserId2(user.id);
                                                    }}
                                                >
                                                    <Box display="flex" flexDirection="row" alignItems="center">
                                                        <Box m={1}>
                                                            <Avatar alt="img" src={user.profileImage} className={classes.largeAvatar}/>
                                                        </Box>
                                                        <Box fontSize={20}  m={1} gutterbottom >
                                                            {user.firstName} {user.middleName} {user.lastName}
                                                        </Box>
                                                    </Box>
                                                </Box>
                                            </ListItem>
                                        </Box>
                                    ))
                                }
                            </List>
                        </Box>
                    </Box>
                </Box>
        </React.Fragment>
    );
};

export default ChatUsersMobile;