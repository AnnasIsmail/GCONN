import React from "react";
import { Button } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import SellAccountMobileLegend from "../../Component/SellAccountMobileLegend/SellAccountMobileLegend";
import SellAccountPUBG from "../../Component/SellAccountPUBG/SellAccountPUBG";
import SellAccountValorant from "../../Component/SellAccountValorant/SellAccountValorant";
import './SellAccountContainer.css';

function SellAccountContainer(){
    
    const getUrl = useParams();
    const navigasi = useNavigate();
    
    const NavigateTo =(to)=>{
        navigasi(to)
    }

    return(
        <>
        {
        (getUrl.game === 'sellaccountvalorant')?
        <>
            <h1>Sell Valorant Account</h1>
            <SellAccountValorant />
            <div className="container-submit-button">
                <Button variant="secondary" onClick={()=>NavigateTo('/choosegamesell')} >Back</Button>
                <Button variant="primary">Submit</Button>
            </div>
        </>
        :(getUrl.game === 'sellaccountmobilelegend')?
        <>
            <h1>Sell Mobile Legend Account</h1>
            <SellAccountMobileLegend />
            <div className="container-submit-button">
                <Button variant="secondary" onClick={()=>NavigateTo('/choosegamesell')} >Back</Button>
                <Button variant="primary">Submit</Button>
            </div>
        </>
        :(getUrl.game === 'sellaccountpubg')?
        <>
            <h1>Sell PUBG Account</h1>
            <SellAccountPUBG />
            <div className="container-submit-button">
                <Button variant="secondary" onClick={()=>NavigateTo('/choosegamesell')} >Back</Button>
                <Button variant="primary">Submit</Button>
            </div>
        </>
        :
        <>
        
        </>
        }
        </>
    );
}

export default SellAccountContainer;
