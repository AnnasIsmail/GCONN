import React from 'react';
import './icon.css';
import chat from './svg file/Chat.svg';
import chatFill from './svg file/Chat_fill.svg';

function ChatIcon(props){
    let ret = <img src={chat} alt='chat-Icon' />
    if(props.diKlik){
        ret = <img src={chatFill} alt='chat-Icon' />
    }
    return(
        <>{ret}</>
    );
}

export default ChatIcon; 