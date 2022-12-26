import { useNavigate } from 'react-router-dom';
import './Button.css';
import React from 'react';

function Button(props){

    const navigasi = useNavigate();        
    const NavigateTo =(to)=>{
        navigasi(to)
    }

    return(
        <div className={`button ${props.additionalClass}`} onClick={()=>NavigateTo(props.onclick)}>
            {props.text}
        </div>
    );
}

export default Button;