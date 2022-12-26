import React from "react";
import { useNavigate } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import './NoData.css';

function NoData(props){

    const navigasi = useNavigate();        
    const NavigateTo =(to)=>{
        navigasi(to)
    }


    return(
        <div className="no-data">
            <Button style={{ marginBottom: 10 }} basic inverted color='yellow' onClick={()=>NavigateTo(props.goto)}>
                {props.button}
            </Button>
            <h1>{props.description}</h1>
        </div>
    );      
}

export default NoData;