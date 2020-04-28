import React from 'react';
import ChatUsersMobile from "../../components/chat/chat-users-mobile";
import ChatDesktop from "../../components/chat/chat-desktop";
import CheckWinSize from "../../components/div/check-win-size";
import {useParams} from "react-router";
import ChatWinMobile from "../../components/chat/chat-win-mobile";
import ChatSelectedDesktop from "../../components/chat/chat-selected-desktop";

const SelectedChat = () => {
    const { width } = CheckWinSize()
    const breakpoint = 620;
    const {userId2} = useParams();

    return width < breakpoint ? <ChatWinMobile userId2={userId2}/> : <ChatSelectedDesktop userId2={userId2}/>;
}

export default SelectedChat;