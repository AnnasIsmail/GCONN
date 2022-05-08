import React from "react";
import './AvailableGame.css';

function AvailableGame(props){
    return(
        <div className="available-game">
            <img src={props.src} alt="" />
        </div>
    );
}

export default AvailableGame;