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
            {props.notification >= 100? <span className="notif tigaDigit">{props.notification}</span>:props.notification >= 10 ? <span className="notif duaDigit">{props.notification}</span> : <span className="notif satuDigit">{props.notification}</span>}
        </div>
    );
}

export default Chat;