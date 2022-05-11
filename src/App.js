import React from 'react';
import './App.css';
import LeftSideBar from './Container/LeftSideBar/LeftSideBar';
import MainContainer from './Container/MainContainer/MainContainer';
import RightSlideBar from './Container/RightSlide/RightSlideBar';
import TopBar from './Container/TopBar/TopBar';

function App() {

  return (
    <div className="App">
      <TopBar page='market' login='false' />
      <MainContainer additionalClass='sign-in-main-container'/>
      <LeftSideBar />
      <RightSlideBar />
    </div>
  );
}

export default App;
