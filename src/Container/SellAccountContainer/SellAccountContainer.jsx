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

    let game = "";
    let dataValorant ={
        game:"Valorant",
        header:"",
        price: 0,
        emailStatus: "",
        region:"",
        changeNameStatus: "",
        totalVP: 0,
        rank: "",
        reason:"",
        level: 0,
        agent: [],
        skin: [],
        photo: []
    }

    let dataMobileLegend = {
        game: "Mobile Legend",
        header: "",
        nickname: "",
        device: "",
        CNCF: "",
        level: 0,
        rank: "",
        price: 0,
        reason: "",
        heroCount: "",
        hero: [],
        photo:[]
      }

    let dataPUBG ={
        game: "PUBG",
        header: "",
        royalePass: "",
        level: 0,
        rank: "",
        price: 0,
        changeNameStatus: "",
        dataLogin: "",
        description: "",
        reason: "",
        skin: [],
        photo: []
      }



    function getData(data , from){
        if(from === "Valorant"){
            dataValorant = data
        }else if(from === "Mobile Legend"){
            dataMobileLegend = data
        }else if(from === "PUBG"){
            dataPUBG = data
        }
        game = from;
    }

    function postData(){
        let dataToDatabase = {}
        if(game === "Valorant"){
            dataToDatabase = dataValorant
        }else if(game === "Mobile Legend"){
            dataToDatabase = dataMobileLegend
        }else if(game === "PUBG"){
            dataToDatabase = dataPUBG
        }

        fetch('http://localhost:8000/account',{
            method: 'POST',
            body: JSON.stringify(dataToDatabase),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            })
            .then((response) => response.json())
            .then((json) => {NavigateTo('/');});
    }

    return(
        <>
        {
        (getUrl.game === 'sellaccountvalorant')?
        <>
            <h1>Sell Valorant Account</h1>
            <SellAccountValorant data={getData} />
            <div className="container-submit-button">
                <Button variant="secondary" onClick={()=>NavigateTo('/choosegamesell')} >Back</Button>
                <Button variant="primary" onClick={()=>postData()}>Submit</Button>
            </div>
        </>
        :(getUrl.game === 'sellaccountmobilelegend')?
        <>
            <h1>Sell Mobile Legend Account</h1>
            <SellAccountMobileLegend data={getData} />
            <div className="container-submit-button">
                <Button variant="secondary" onClick={()=>NavigateTo('/choosegamesell')} >Back</Button>
                <Button variant="primary" onClick={()=>postData()}>Submit</Button>
            </div>
        </>
        :(getUrl.game === 'sellaccountpubg')?
        <>
            <h1>Sell PUBG Account</h1>
            <SellAccountPUBG data={getData} />
            <div className="container-submit-button">
                <Button variant="secondary" onClick={()=>NavigateTo('/choosegamesell')} >Back</Button>
                <Button variant="primary" onClick={()=>postData()}>Submit</Button>
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
