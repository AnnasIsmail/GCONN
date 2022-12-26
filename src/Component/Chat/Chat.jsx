import React from "react";
import { Label } from 'semantic-ui-react';
import './Chat.css';

function Chat(props){

    return(
        <div className={`chat ${(props.notification !== 0)&&"chat-with-notification"}`} onClick={()=>props.goDetailChat()}>
            <img src={props.source} alt={props.alt} />
            <div className="chat-and-notification">
                <span>
                    <h1>{props.nama}</h1>
                    <h2>{props.lastChat}</h2>
                </span>
                {(props.notification !== 0)&&
                    <Label circular color='red' size="large">
                        {props.notification}
                    </Label>
                }
            </div>
        </div>
    );
}

export default Chat;