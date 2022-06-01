import React from 'react';
import './App.css';
import BottomBar from './Container/BottomBar/BottomBar';
import LeftSideBar from './Container/LeftSideBar/LeftSideBar';
import MainContainer from './Container/MainContainer/MainContainer';
import RightSlideBar from './Container/RightSlide/RightSlideBar';
import TopBar from './Container/TopBar/TopBar';

function App(props) {
  let login = localStorage.login;

  return (
    <div className="App">
      <MainContainer additionalClass={`${props.page}-main-container`}/>
      <TopBar page={`${props.page}-top-bar`} login={login} />
      <LeftSideBar login={login} page={props.page}/>
      <BottomBar login={login} page={props.page} />
      <RightSlideBar login={login}/>
    </div>
  );
}

export default App;
