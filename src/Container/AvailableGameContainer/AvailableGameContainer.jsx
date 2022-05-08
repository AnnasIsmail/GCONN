import React from "react";
import AvailableGame from "../../Component/AvailableGame/AvailableGame";
import game1 from './assets/game1.png';
import game2 from './assets/game2.png';
import game3 from './assets/game3.png';
import './AvailableGameContainer.css';

function AvailableGameContainer(){
    return(
        <div className="available-game-container">
            <h1>Available Game</h1>
            <div className="container-available-game-container">
                <AvailableGame src={game1} />
                <AvailableGame src={game2} />
                <AvailableGame src={game3} />
            </div>
        </div>
    );
}

export default AvailableGameContainer;