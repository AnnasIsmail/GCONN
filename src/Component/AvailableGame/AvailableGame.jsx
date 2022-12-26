import { useNavigate } from 'react-router-dom';
import './AvailableGame.css';
import React from "react";

function AvailableGame(props){

    const navigasi = useNavigate();        
    const NavigateTo =(to)=>{
        navigasi(to)
    }

    return(
        <div className="available-game" onClick={()=>NavigateTo('/market')}>
            <img src={props.src} alt="" 
            type="button" data-bs-target ara-label="slide2" aria-current="false"
            />
        </div>
    );
}

export default AvailableGame;