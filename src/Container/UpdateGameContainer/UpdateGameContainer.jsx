import React from "react";
import UpdateGame from '../../Component/UpdateGame/UpdateGame';
import './UpdateGameContainer.css';

function UpdateGameContainer(){
    return(
        <div className="update-game-container">
            <h1 className="header-update-game-container">Update Game</h1>
            <div className="container-update-game-container">
                <UpdateGame SrcImage="https://pbs.twimg.com/media/FmHfooEWYAATNBM?format=jpg&name=small" Header='A favorite map returns, plus changes to Ranked Rating (RR) and the ability to favorite weapon variants. Check out Patch Notes 6.0 here.' />
                <UpdateGame SrcImage="https://pbs.twimg.com/media/FmDkUyyWIAsxj8r?format=jpg&name=small" Header='Are your ears ready for a REVELATION? Check out this Spotify playlist we put together to celebrate the launch of EP6 // ACT1.' />
                <UpdateGame SrcImage="https://pbs.twimg.com/media/FlzR30iaAAMNvcc?format=jpg&name=small" Header={`Join our devs live on http://twitch.tv/VALORANT Monday and hear the latest on Lotus, new skins, and Omen's green thumb—hosted by`} />
            </div>
        </div>
    )
}

export default UpdateGameContainer;