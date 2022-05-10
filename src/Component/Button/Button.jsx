import React from "react";
import './Button.css';

function Button(props){
    return(
        <div className={`button ${props.additionalClass}`}>
            {props.text}
        </div>
    );
}

export default Button;