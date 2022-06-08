import React from "react";
import Chat from "../../Component/Chat/Chat";
import DetailChat from "../../Component/DetailChat/DetailChat";
import HeaderChat from "../../Component/HeaderChat/HeaderChat";
import './RightSlideBar.css';

function RightSlideBar(props){
    const source = 'https://cdn.discordapp.com/attachments/900594253850349568/963634922017423360/Avatar.png'
    const [page , setPage] = React.useState('chat');
    
    return(
        <>
        {(props.login)?
        <div className="RightSideBar">
           <HeaderChat />
           <hr className="hrRightSlideBar" />
           {(page === 'chat')?
                <div className="container-chat">
                    <Chat goDetailChat={()=>setPage('detail-chat')} source={source} alt='photo-profil' nama='Joko Santo' lastChat='Yaudah 550k deh' notification='200' />
                </div>
           : (page === 'detail-chat')?
                <div className="container-detail-chat">
                    <DetailChat back={()=>setPage('chat')} />
                </div>
           :
           <></>
           }
        </div>
    : 
    <></>   
    }
    </>
    );
}

export default RightSlideBar;

