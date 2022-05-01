import React from 'react';
import './App.css';
import LeftSideBar from './Container/LeftSideBar/LeftSideBar';
import MainContainer from './Container/MainContainer/MainContainer';
import RightSlideBar from './Container/RightSlide/RightSlideBar';
import TopBar from './Container/TopBar/TopBar';

function App() {

  return (
    <div className="App">
      <LeftSideBar />
      <TopBar />
      <MainContainer />
      <RightSlideBar />
    </div>
  );
}

export default App;
