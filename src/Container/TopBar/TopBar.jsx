import React from "react";
import Profile from "../../Component/Profile/Profile";
import SayHello from '../../Component/SayHello/SayHello';
import './TopBar.css';

function TopBar(){
    return(
        <div className="top-bar">
            <SayHello Username="Anselma Putri" />
            <Profile Username="Anselma Putri" />
        </div>
    );
};

export default TopBar;