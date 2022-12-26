import React from "react";
import './UpdateGame.css';

function UpdateGame(props){
    return(
        <div className="update-game">
            <img src={props.SrcImage} alt="" />
            <h1 className="header-update-game">{props.Header}</h1>
            <h3 className="view-on-twitter">View On Twitter</h3>
        </div>
    );
}

export default UpdateGame;