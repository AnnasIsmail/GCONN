import $ from 'jquery';
import React from 'react';
import SearchIcon from '../../image/icon/Search';
import ArrowDown from '../../image/icon/svg file/arrow_down.svg';
import './HeaderChat.css';

function HeaderChat(props){

    React.useEffect(()=>{
        $('#buttonClosedChat').click(()=>{

            let RightSideBar = $('.RightSideBar');
            let ButtonClosedChat = $('#buttonClosedChat');
            let hrRightSideBar = $('.hrRightSlideBar');

            if( RightSideBar.css('right') === '10px'){
                hrRightSideBar.animate({'width':'40px'},500);
                ButtonClosedChat.removeClass('ButtonChatOpen');
                ButtonClosedChat.addClass('ButtonChatClosed');
                RightSideBar.animate({'right':'-330px'},500);
            }else{
                hrRightSideBar.animate({'width':'365px'},500);
                RightSideBar.animate({'right':'10px'},500);
                ButtonClosedChat.removeClass('ButtonChatClosed');
                ButtonClosedChat.addClass('ButtonChatOpen');
            }
        });
    });

    return(
            <div className='header-chat'>
                <img id='buttonClosedChat' className='ButtonChatClosed' src={ArrowDown} alt="" />
                <h1>Message</h1>
                <div>
                    <SearchIcon className='search-icon-header-chat' />
                </div>
            </div>
    );
}

export default HeaderChat;