import React from 'react';
import './App.css';
import PhotoCarousel from './Component/PhotoCarousel/PhotoCarousel';
import LeftSideBar from './Container/LeftSideBar/LeftSideBar';
import RightSlideBar from './Container/RightSlide/RightSlideBar';
import TopBar from './Container/TopBar/TopBar';

function App() {

  return (
    <div className="App">
      <LeftSideBar />
      <TopBar />
      <PhotoCarousel />
      <RightSlideBar />
    </div>
  );
}

export default App;
