import React from "react";
import './AvailableGame.css';

function AvailableGame(props){
    return(
        <div className="available-game">
            <img src={props.src} alt="" 
            type="button" data-bs-target ara-label="slide2" aria-current="false"
            />
        </div>
    );
}

export default AvailableGame;