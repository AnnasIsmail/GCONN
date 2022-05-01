import React from "react";
import UpdateGameContainer from "../UpdateGame/UpdateGameContainer";
import './MainContainer.css';

function MainContainer(){
    return(
        <div className='main-container'>
            <UpdateGameContainer />
            <UpdateGameContainer />
            <UpdateGameContainer />
            <UpdateGameContainer />
        </div>
    );
}

export default MainContainer;