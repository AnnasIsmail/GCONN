import React from "react";
import UpdateGame from '../../Component/UpdateGame/UpdateGame';
import image1 from './assets/image1.png';
import image2 from './assets/image2.png';
import image3 from './assets/image3.png';
import './UpdateGameContainer.css';

function UpdateGameContainer(){
    return(
        <div className="update-game-container">
            <h1 className="header-update-game-container">Update Game</h1>
            <div className="container-update-game-container">
                <UpdateGame SrcImage={image1} Header='One giant leap for your collection. Pick up Endeavor before it leaves your orbit. Now available.' />
                <UpdateGame SrcImage={image2} Header='One giant leap for your collection. Pick up Endeavor before it leaves your orbit. Now available.' />
                <UpdateGame SrcImage={image3} Header='One giant leap for your collection. Pick up Endeavor before it leaves your orbit. Now available.' />
            </div>
        </div>
    )
}

export default UpdateGameContainer;