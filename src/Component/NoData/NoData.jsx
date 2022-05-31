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
            <Button basic inverted color='yellow' onClick={()=>NavigateTo('/market')}>
                Go to Market
            </Button>
            <h1>{props.description}</h1>
        </div>
    );      
}

export default NoData;