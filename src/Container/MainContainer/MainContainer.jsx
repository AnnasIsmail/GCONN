import React from "react";
import PhotoCarousel from '../../Component/PhotoCarousel/PhotoCarousel';
import AvailableGameContainer from '../AvailableGameContainer/AvailableGameContainer';
import UpdateGameContainer from "../UpdateGameContainer/UpdateGameContainer";
import './MainContainer.css';

function MainContainer(){
    return(
        <div className='main-container home'>
            <PhotoCarousel />
            <UpdateGameContainer />
            <AvailableGameContainer />
        </div>
    );
}

export default MainContainer;