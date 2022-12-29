import $ from 'jquery';
import React from "react";
import { useCookies } from 'react-cookie';
import { SocketIO } from '../../App';
import Chat from "../../Component/Chat/Chat";
import DetailChat from "../../Component/DetailChat/DetailChat";
import HeaderChat from "../../Component/HeaderChat/HeaderChat";
import './RightSlideBar.css';

function RightSlideBar(props){
    const source = 'https://www.dailysia.com/wp-content/uploads/2022/01/Felisa-Kamiliya-1.jpg?x92563'
    const [page , setPage] = React.useState('chat');
    const [allChat , selAllChat] = React.useState([]);
    const [allProfile , setAllProfile] = React.useState([]);
    const [DetailChatData , setDetailChatData] = React.useState();
    const [DetailChatDataProfile , setDetailChatDataProfile] = React.useState();
    const [cookies, setCookie, removeCookie] = useCookies();
    const socket = React.useRef(React.useContext(SocketIO));

    React.useEffect(()=> {
        // socket.current.emit('submitChat' , 'ceritanya submit')
        socket.current.on("getMessage", () => {
            getAllMessage();
        });

        socket.current.on("getDirectMessage", (dataJson) => {
            openDirectChat(dataJson);
        });

    },[])

  React.useEffect(()=> {
    // socket.current.on("addUserOnline", message => {
    //     console.log(message);
    // })

    if(cookies.Cr787980){
        socket.current.emit('addUserOnline' , {id:cookies.Cr787980})
    }

  },[socket])

  function getAllMessage(){
    fetch('https://gconn-api-node-js.vercel.app/chat', {
        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ idUser: cookies.Cr787980 }),
        }) 
    .then((response) => response.json())
    .then((json) => {
        const dataSort = json.data.sort(function(a,b){
          return new Date(b.dateTime) - new Date(a.dateTime);
          });
        selAllChat(dataSort);
        setAllProfile(json.dataProfile)
          
    });
  }

    React.useEffect(()=>{
        getAllMessage();
    },[])

    function openDirectChat(dataJson){
        // getAllMessage();
            setDetailChatData(dataJson.data[0]);
            setDetailChatDataProfile(dataJson.profileSeller);
        // const idChat = document.getElementById('openDirectChat').value;

        // const chat = allChat.find((chat)=> chat._id === idChat);
        // if(chat !== undefined){

        //     const idProfile = chat.user.find((dataUser)=> dataUser !== cookies.Cr787980);
        //     const profileChat = allProfile.find((Profile)=> Profile._id === idProfile);
            const buttonChat = document.getElementById('buttonClosedChat');
            if(buttonChat.classList.contains('ButtonChatClosed')){
                setPage('detail-chat');
                buttonChat.click();
            }
            if(buttonChat.classList.contains('ButtonChatOpen')){
                buttonChat.click();
                setPage('chat');
                setTimeout(() => {
                    setPage('detail-chat');
                    buttonChat.click();
                }, 600);
            }
        // }
    }

    const checkRightSideBar = () => {
        let RightSideBar = $('.RightSideBar');
            let ButtonClosedChat = $('#buttonClosedChat');
            let hrRightSideBar = $('.hrRightSlideBar');

            if( RightSideBar.css('right') === '-330px'){
                hrRightSideBar.animate({'width':'365px'},500);
                RightSideBar.animate({'right':'10px'},500);
                ButtonClosedChat.removeClass('AnimationButtonChatClosed')
                ButtonClosedChat.removeClass('ButtonChatClosed');
                ButtonClosedChat.addClass('ButtonChatOpen');
                RightSideBar.clearQueue();
                ButtonClosedChat.clearQueue();
                hrRightSideBar.clearQueue();
            }
    }

    return(
        <>
            {
                (props.login)&&
                <div className="RightSideBar" >
                <HeaderChat back={()=>{setPage('chat');getAllMessage();}} />
                <hr className="hrRightSlideBar" />
                {(page === 'chat')?
                        <div className="container-chat" >
                            {allChat.map((data , index)=>{
                                const notification = data.content.filter(dataFilter => dataFilter.from !==cookies.Cr787980 && dataFilter.read === false);
                                const idProfile = data.user.find((dataUser)=> dataUser !== cookies.Cr787980);
                                const profileChat = allProfile.find((Profile)=> Profile._id === idProfile);

                                return(
                                    <Chat key={index} goDetailChat={()=>{setPage('detail-chat'); setDetailChatData(data); setDetailChatDataProfile(profileChat); checkRightSideBar();}} source={(profileChat.photo !== "")? profileChat.photo : "https://react.semantic-ui.com/images/wireframe/image.png"} alt={profileChat.fullName} nama={profileChat.fullName} lastChat={data.content[data.content.length-1].message} notification={notification.length} />
                                )
                            })}
                        </div>
                : (page === 'detail-chat')&&
                        <div className="container-detail-chat">
                            <DetailChat back={()=>{setPage('chat');getAllMessage();}}  DetailChatData={DetailChatData} DetailChatDataProfile={DetailChatDataProfile} />
                        </div>
                }
                </div>
        }
    </>
    );
}

export default RightSlideBar;

