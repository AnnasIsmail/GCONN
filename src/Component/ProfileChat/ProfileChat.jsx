import $ from 'jquery';
import React from 'react';
import ArrowDown from '../../image/icon/svg file/arrow_down.svg';
import photoAnsel from '../../image/image ansell.png';
import './ProfileChat.css';

function ProfileChat(props){

    React.useEffect(()=>{
        $('#buttonClosedChat').click(()=>{

            let RightSideBar = $('.RightSideBar');
            let ButtonClosedChat = $(this);
            let hrRightSideBar = $('.hrRightSlide');
            hrRightSideBar.animate({'width':'370px'},100);
            RightSideBar.animate({'right':'10px'},500);

            // if( RightSideBar.css('right') === '10px'){
            //     hrRightSideBar.animate({'width':'40px'},500);
            //     RightSideBar.animate({'right':'-330px'},500);
            //     ButtonClosedChat.css('animation','animasiButtonChatClosed 1s');
            //     ButtonClosedChat.removeClass('ButtonChatOpen');
            //     ButtonClosedChat.addClass('ButtonChatClosed');
            // }else{
            //     hrRightSideBar.animate({'width':'370px'},500);
            //     RightSideBar.animate({'right':'10px'},500);
            //     ButtonClosedChat.css('animation','animasiButtonChatOpen 1s');
            //     ButtonClosedChat.removeClass('ButtonChatClosed');
            //     ButtonClosedChat.addClass('ButtonChatOpen');
            // }
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