import React from "react";
import { useParams } from 'react-router-dom';
import SellAccountValorant from "../../Component/SellAccountValorant/SellAccountValorant";
import './SellAccountContainer.css';

function SellAccountContainer(){
    
    const getUrl = useParams();


    return(
        <>
        {(getUrl.game === 'sellaccountvalorant')?
        <>
            <h1>Sell Valorant Account</h1>
            <SellAccountValorant />
        </>

        :
        <>
        
        </>
        }
        </>
    );
}

export default SellAccountContainer;
