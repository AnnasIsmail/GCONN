import React from "react";
import './NoData.css';

function NoData(props){
    return(
        <div className="no-data">
            <img src={props.src} alt="" />
            <h1>{props.description}</h1>
        </div>
    );      
}

export default NoData;