import React from 'react';
import './App.css';
import LeftSideBar from './Container/LeftSideBar/LeftSideBar';
import MainContainer from './Container/MainContainer/MainContainer';
import RightSlideBar from './Container/RightSlide/RightSlideBar';
import TopBar from './Container/TopBar/TopBar';

function App(props) {

  return (
    <div className="App">
      <MainContainer additionalClass={`${props.page}-main-container`}/>
      <TopBar page={`${props.page}-top-bar`} login={props.login} />
      <LeftSideBar login={props.login} page={props.page}/>
      <RightSlideBar login={props.login} />
    </div>
  );
}

export default App;
