import React from 'react';
import { useCookies } from 'react-cookie';
import { io } from 'socket.io-client';
import './App.css';
import BottomBar from './Container/BottomBar/BottomBar';
import LeftSideBar from './Container/LeftSideBar/LeftSideBar';
import MainContainer from './Container/MainContainer/MainContainer';
import RightSlideBar from './Container/RightSlide/RightSlideBar';
import TopBar from './Container/TopBar/TopBar';

export const SocketIO = React.createContext();

function App(props) {
  const [cookies, setCookie, removeCookie] = useCookies();
  let login = false;
  if(cookies.Cr787980){
    login = true;
  }else{
    caches.delete();
  }

  const chatRef = React.useRef();

  const goToChat = (data) => {
    chatRef.current.openDirectChat(data);
  }

  return (
    <SocketIO.Provider value={io("https://socket-gconn.herokuapp.com")}>
      <div className="App">
        <MainContainer goToChat={goToChat} additionalClass={`${props.page}-main-container`}/>
        <TopBar goToChat={goToChat} page={`${props.page}-top-bar`} login={login} />
        <LeftSideBar login={login} page={props.page}/>
        <BottomBar login={login} page={props.page} />
        <RightSlideBar ref={chatRef} login={login}/>
      </div>
    </SocketIO.Provider>
  );
}

export default App;
