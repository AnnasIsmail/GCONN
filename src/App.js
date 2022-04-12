import './App.css';
import PhotoCarousel from './Component/PhotoCarousel/PhotoCarousel';
import LeftSideBar from './Container/LeftSideBar/LeftSideBar';
import RightSlide from './Container/RightSlide/RightSlideBar';
import TopBar from './Container/TopBar/TopBar';

function App() {
  return (
    <div className="App">
      <LeftSideBar />
      <TopBar />
      <PhotoCarousel />
      <RightSlide />
    </div>
  );
}

export default App;
