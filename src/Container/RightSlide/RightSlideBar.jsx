import $ from 'jquery';
import React from "react";
import { useCookies } from 'react-cookie';
import { SocketIO } from '../../App';
import Chat from "../../Component/Chat/Chat";
import DetailChat from "../../Component/DetailChat/DetailChat";
import HeaderChat from "../../Component/HeaderChat/HeaderChat";
import './RightSlideBar.css';

const RightSlideBar = React.forwardRef((props, ref) => {
    const [page , setPage] = React.useState('chat');
    const [allChat , selAllChat] = React.useState([]);
    const [allProfile , setAllProfile] = React.useState([]);
    const [allProfileAdmin , setAllProfileAdmin] = React.useState([]);
    const [allProfileSeller , setAllProfileSeller] = React.useState([]);
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
            // openDirectChat(dataJson);
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
        setAllProfile(json.dataCustomer);
        setAllProfileSeller(json.dataSeller);
        setAllProfileAdmin(json.dataAdmin);
    });
  }

    React.useEffect(()=>{
        getAllMessage();
    },[])

    React.useImperativeHandle(ref, () => ({

        openDirectChat(dataJson){
            console.log(dataJson)
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
                    // buttonChat.click();
                    setTimeout(() => {
                        setPage('detail-chat');
                        buttonChat.click();
                    }, 100);
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
    
      }));


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

    function getIDAndRole(data){
        let role;
        let id;
        if(data.admin){
            if(data.admin === cookies.Cr787980){
                id = data.admin;
                role = 'User';
            }else if(data.idUser === cookies.Cr787980){
                id = data.admin;
                role = 'Admin';
            }
        }else{
            if(data.idSeller === cookies.Cr787980){
                id = data.idUser;
                role = 'Customer';
            }else if(data.idUser === cookies.Cr787980){
                id = data.idSeller;
                role = 'Seller';
            }
        }
        return [id , role]
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
                                const notification = data.content.filter(dataFilter => dataFilter.from !== cookies.Cr787980 && dataFilter.read === false);
                                const idProfile = getIDAndRole(data.user);
                                const profileChat = allProfile.find((Profile)=> Profile._id === idProfile[0]);
                                const profileChatAdmin = allProfileAdmin.find((Profile)=> Profile._id === idProfile[0]);
                                const profileChatSeller = allProfileSeller.find((Profile)=> Profile.idUser === idProfile[0]);
                                let nama,photo;
                                if(idProfile[1] === 'Seller'){
                                    nama = profileChatSeller.sellerName;
                                    photo = profileChatSeller.photo;
                                }else if(idProfile[1] === 'Customer'){
                                    nama = profileChat.fullName;
                                    photo = profileChat.photo;
                                }else if(idProfile[1] === 'Admin'){
                                    nama = profileChatAdmin.fullName;
                                    photo = profileChatAdmin.photo;
                                }
                                
                                let profile;
                                if(idProfile[1] === 'Seller' || idProfile[1] === 'Customer'){
                                    profile = {fullName:nama,photo,lastOnline: profileChat.lastOnline,role:idProfile[1]}
                                }else if(idProfile[1] === 'Admin'){
                                    profile = {fullName:nama,photo,lastOnline: profileChatAdmin.lastOnline,role:idProfile[1]}
                                }

                                return(
                                    <Chat key={index} role={idProfile[1]} goDetailChat={()=>{setPage('detail-chat'); setDetailChatData(data); setDetailChatDataProfile(profile); checkRightSideBar();}} source={(photo !== "")? photo : "https://react.semantic-ui.com/images/wireframe/image.png"} alt={nama} nama={nama} lastChat={data.content[data.content.length-1].message} notification={notification.length} />
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
});

export default RightSlideBar;

