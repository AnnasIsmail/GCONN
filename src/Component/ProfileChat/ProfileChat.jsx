import $ from 'jquery';
import React from 'react';
import ArrowDown from '../../image/icon/svg file/arrow_down.svg';
import photoAnsel from '../../image/image ansell.png';
import './ProfileChat.css';

function ProfileChat(props){

    React.useEffect(()=>{
        $('#buttonClosedChat').click(()=>{

            let RightSideBar = $('.RightSideBar');
            let ButtonClosedChat = $('#buttonClosedChat');
            let hrRightSideBar = $('.hrRightSlide');

            if( RightSideBar.css('right') === '10px'){
                RightSideBar.animate({'right':'-330px'},1000);
                ButtonClosedChat.css('animation','animasiButtonChatClosed 1s');
                ButtonClosedChat.removeClass('ButtonChatOpen');
                ButtonClosedChat.addClass('ButtonChatClosed');
                hrRightSideBar.css('width','40px');
            }else{
                RightSideBar.animate({'right':'10px'},1000);
                ButtonClosedChat.css('animation','animasiButtonChatOpen 1s');
                ButtonClosedChat.removeClass('ButtonChatClosed');
                ButtonClosedChat.addClass('ButtonChatOpen');
                hrRightSideBar.css('width','370px');
            }
        });
    });

    return(
            <div className='ProfileChat'>
                <img id='buttonClosedChat' className='ButtonChatClosed' src={ArrowDown} alt="" />
                <img src={photoAnsel} alt="" />
                <span>
                    <h1>{props.Username}</h1>
                    <div><div></div> Online</div>
                </span>
            </div>
    );
}

export default ProfileChat;