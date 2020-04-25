import React from 'react';
import ChatUsersMobile from "../../components/chat/chat-users-mobile";
import ChatDesktop from "../../components/chat/chat-desktop";
import CheckWinSize from "../../components/div/check-win-size";

const Chat = () => {
    const { width } = CheckWinSize()
    const breakpoint = 620;

    return width < breakpoint ? <ChatUsersMobile /> : <ChatDesktop />;
}

export default Chat;