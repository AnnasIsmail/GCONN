import React from "react";
import { Icon, Image, Input, Label } from 'semantic-ui-react';
import ArrowDown from '../../image/icon/svg file/arrow_down.svg';
import './DetailChat.css';

function DetailChat(props){
    return(
        <div className="detail-chat">
            <div className="header-detail-chat">
                <img onClick={()=>props.back()} id='buttonClosedChat' className='ButtonChatClosed' src={ArrowDown} alt="" />
                <div className="avatar">
                    <Image src='https://www.dailysia.com/wp-content/uploads/2022/01/Felisa-Kamiliya-1.jpg?x92563' className="image-avatar" circular />
                    <span>
                        <h1>Felisa Martini</h1>
                        <div className='status'><Icon name="circle" color='green' size='small' />Online</div>
                    </span>
                </div>
            </div>
            <div className="container-content-chat">
                <div className="content-chat">
                    <span className="content-chat-right"><p><small>10.21</small> Hallo Kak.</p></span>
                    <span className="content-chat-left"><p>Iya Pak? <small>18.11</small></p></span>
                </div>
                <Input labelPosition='right' type='text' placeholder='Type a message'>
                    <Label basic><Icon name="plus" link /></Label>
                    <input />
                    <Label><Icon name="send" link /></Label>
                </Input>
            </div>
        </div>
    );
}

export default DetailChat;