import React from "react";
import Chat from "../../Component/Chat/Chat";
import HeaderChat from "../../Component/HeaderChat/HeaderChat";
import './RightSlideBar.css';

function RightSlideBar(){
    const source = 'https://cdn.discordapp.com/attachments/900594253850349568/963634922017423360/Avatar.png'
    return(
        <div className="RightSideBar">
           <HeaderChat Username='Ansellma Putri' />
           <hr className="hrRightSlideBar" />
           <div className="container-chat">
                <Chat source={source} alt='photo-profil' nama='Joko Santo' lastChat='Yaudah 550k deh' notification='200' />
                <Chat source={source} alt='photo-profil' nama='Joko Santo' lastChat='Yaudah 550k deh' notification='99' />
                <Chat source={source} alt='photo-profil' nama='Joko Santo' lastChat='Yaudah 550k deh' notification='3' />
                <Chat source={source} alt='photo-profil' nama='Joko Santo' lastChat='Yaudah 550k deh' notification='3' />
                <Chat source={source} alt='photo-profil' nama='Joko Santo' lastChat='Yaudah 550k deh' notification='3' />
                <Chat source={source} alt='photo-profil' nama='Joko Santo' lastChat='Yaudah 550k deh' notification='3' />
                <Chat source={source} alt='photo-profil' nama='Joko Santo' lastChat='Yaudah 550k deh' notification='3' />
                <Chat source={source} alt='photo-profil' nama='Joko Santo' lastChat='Yaudah 550k deh' notification='3' />
                <Chat source={source} alt='photo-profil' nama='Joko Santo' lastChat='Yaudah 550k deh' notification='3' />
                <Chat source={source} alt='photo-profil' nama='Joko Santo' lastChat='Yaudah 550k deh' notification='3' />
                <Chat source={source} alt='photo-profil' nama='Joko Santo' lastChat='Yaudah 550k deh' notification='3' />
                <Chat source={source} alt='photo-profil' nama='Joko Santo' lastChat='Yaudah 550k deh' notification='3' />
                <Chat source={source} alt='photo-profil' nama='Joko Santo' lastChat='Yaudah 550k deh' notification='3' />
                <Chat source={source} alt='photo-profil' nama='Joko Santo' lastChat='Yaudah 550k deh' notification='3' />
                <Chat source={source} alt='photo-profil' nama='Joko Santo' lastChat='Yaudah 550k deh' notification='3' />
                <Chat source={source} alt='photo-profil' nama='Joko Santo' lastChat='Yaudah 550k deh' notification='3' />
                <Chat source={source} alt='photo-profil' nama='Joko Santo' lastChat='Yaudah 550k deh' notification='3' />
                <Chat source={source} alt='photo-profil' nama='Joko Santo' lastChat='Yaudah 550k deh' notification='3' />
           </div>
        </div>
    );
}

export default RightSlideBar;

