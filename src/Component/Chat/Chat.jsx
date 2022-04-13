import React from "react";
import './Chat.css';

function Chat(props){
    return(
        <div className="chat">
            <img src={props.source} alt={props.alt} />
            <span>
                <h1>{props.nama}</h1>
                <h2>{props.lastChat}</h2>
            </span>
            <span className="notif">{props.notification}</span>
        </div>
    );
}

export default Chat;