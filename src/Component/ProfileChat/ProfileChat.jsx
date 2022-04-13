import $ from 'jquery';
import React from 'react';
import ArrowDown from '../../image/icon/svg file/arrow_down.svg';
import photoAnsel from '../../image/image ansell.png';
import './ProfileChat.css';

function ProfileChat(props){

    React.useEffect(()=>{
        $('#buttonClosedChat').click(()=>{
            if( $('.RightSideBar').css('right') === '10px'){
                $('.RightSideBar').animate({'right':'-330px'},1000);
                $('#buttonClosedChat').css('animation','animasiButtonChatClosed 1s');
                $('#buttonClosedChat').removeClass('ButtonChatOpen');
                $('#buttonClosedChat').addClass('ButtonChatClosed');
                $('.hrRightSlide').css('width','40px');
            }else{
                $('.RightSideBar').animate({'right':'10px'},1000);
                $('#buttonClosedChat').css('animation','animasiButtonChatOpen 1s');
                $('#buttonClosedChat').removeClass('ButtonChatClosed');
                $('#buttonClosedChat').addClass('ButtonChatOpen');
                $('.hrRightSlide').css('width','370px');
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