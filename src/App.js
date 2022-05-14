import React from 'react';
import './App.css';
import LeftSideBar from './Container/LeftSideBar/LeftSideBar';
import MainContainer from './Container/MainContainer/MainContainer';
import RightSlideBar from './Container/RightSlide/RightSlideBar';
import TopBar from './Container/TopBar/TopBar';

function App(props) {

  return (
    <div className="App">
      <MainContainer additionalClass='sign-up-main-container'/>
      <TopBar page='sign-in-top-bar' login='true' />
      <LeftSideBar login='true' />
      <RightSlideBar login='true' />
    </div>
  );
}

export default App;
