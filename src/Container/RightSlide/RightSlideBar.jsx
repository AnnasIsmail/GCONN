import React from "react";
import Chat from "../../Component/Chat/Chat";
import ProfileChat from "../../Component/ProfileChat/ProfileChat";
import './RightSlideBar.css';

function RightSlideBar(){
    const source = 'https://cdn.discordapp.com/attachments/900594253850349568/963634922017423360/Avatar.png'
    return(
        <div className="RightSideBar">
           <ProfileChat Username='Ansellma Putri' />
           <span id="hrRightSlide"><hr className="hrRightSlide" /></span>
           <Chat source={source} alt='photo-profil' nama='Joko Santo' lastChat='Yaudah 550k deh' notification='3' />
           <Chat source={source} alt='photo-profil' nama='Joko Santo' lastChat='Yaudah 550k deh' notification='3' />
           <Chat source={source} alt='photo-profil' nama='Joko Santo' lastChat='Yaudah 550k deh' notification='3' />
           <Chat source={source} alt='photo-profil' nama='Joko Santo' lastChat='Yaudah 550k deh' notification='3' />
           <Chat source={source} alt='photo-profil' nama='Joko Santo' lastChat='Yaudah 550k deh' notification='3' />
           <Chat source={source} alt='photo-profil' nama='Joko Santo' lastChat='Yaudah 550k deh' notification='3' />
        </div>
    );
}

export default RightSlideBar;

