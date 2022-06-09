import React from "react";
import { useNavigate } from 'react-router-dom';
import game1 from '../../image/icon/game1.png';
import game2 from '../../image/icon/game2.png';
import game3 from '../../image/icon/game3.png';
import './ChooseGameSell.css';

function ChooseGameSell (){

    const navigasi = useNavigate();
    
    const NavigateTo =(to)=>{
        navigasi(to)
    }

    return(
        <div className="choose-game-sell">
            <h2>WHAT GAME ACCOUNT ARE YOU SELLING ? </h2>
            <div className="choose-game-sell-container">
                <img src={game1} alt="" onClick={()=>NavigateTo('/choosegamesell/sellaccountmobilelegend')} />
                <img src={game2} alt="" onClick={()=>NavigateTo('/choosegamesell/sellaccountpubg')} />
                <img src={game3} alt="" onClick={()=>NavigateTo('/choosegamesell/sellaccountvalorant')} />
            </div>
        </div>
    );
}

export default ChooseGameSell;