import React from "react";
import { Button } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import SellAccountMobileLegend from "../../Component/SellAccountMobileLegend/SellAccountMobileLegend";
import SellAccountPUBG from "../../Component/SellAccountPUBG/SellAccountPUBG";
import SellAccountValorant from "../../Component/SellAccountValorant/SellAccountValorant";
import ErrorEmptyField from "./ErrorEmptyField";
import './SellAccountContainer.css';

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
    battlepass:'',
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
    heroCount: 0,
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

function SellAccountContainer(){
    
    const getUrl = useParams();
    const navigasi = useNavigate();
    
    const NavigateTo =(to)=>{
        navigasi(to)
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

    let dataToDatabase = {}

    function postData(){
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

    function beforeValidation(){
        if(game === "Valorant"){
            dataToDatabase = dataValorant
            validationValorant();
        }else if(game === "Mobile Legend"){
            dataToDatabase = dataMobileLegend
            validationMobileLegend();
        }else if(game === "PUBG"){
            dataToDatabase = dataPUBG
            validationPUBG();
        }

    }

    let [field , setField] = React.useState()

    function validationValorant(){
        let emptyField = ""
        if( dataValorant.header === ""){
            emptyField += ', header'
        }
        if( dataValorant.price === 0){
            emptyField += ', price'
        }
        if( dataValorant.emailStatus === ""){
            emptyField += ', email status'
        }
        if( dataValorant.region === ""){
            emptyField += ', region'
        }
        if( dataValorant.changeNameStatus === ""){
            emptyField += ', change name status'
        }
        if( dataValorant.totalVP === 0){
            emptyField += ', total-vp'
        }
        if( dataValorant.rank === ""){
            emptyField += ', rank'
        }
        if( dataValorant.reason === ""){
            emptyField += ', reason'
        }
        if( dataValorant.level === 0){
            emptyField += ', level'
        }
        if( dataValorant.battlepass === ""){
            emptyField += ', battlepass'
        }
        if( dataValorant.agent.length === 0){
            emptyField += ', agent'
        }
        if( dataValorant.skin.length === 0){
            emptyField += ', skin'
        }
        if( dataValorant.photo.length === 0){
            emptyField += ', photo'
        }

        if(emptyField.length < 1){
            postData()
        }else{
            setField(emptyField);
            document.getElementById('emptyFieldSell').click();
        }
    }

    
    function validationMobileLegend(){
        let emptyField = ""
        
        if( dataMobileLegend.header === ""){
            emptyField += ', header'
        }
        if( dataMobileLegend.nickname === ""){
            emptyField += ', nickname'
        }
        if( dataMobileLegend.device === ""){
            emptyField += ', device'
        }
        if( dataMobileLegend.CNCF === ""){
            emptyField += ', CNCF'
        }
        if( dataMobileLegend.level === 0){
            emptyField += ', level'
        }
        if( dataMobileLegend.rank === ""){
            emptyField += ', rank'
        }
        if( dataMobileLegend.price === 0){
            emptyField += ', price'
        }
        if( dataMobileLegend.reason === ""){
            emptyField += ', reason'
        }
        if( dataMobileLegend.herocount === 0){
            emptyField += ', herocount'
        }
        if( dataMobileLegend.hero.length === 0){
            emptyField += ', hero'
        }
        if( dataMobileLegend.photo.length === 0){
            emptyField += ', photo'
        }

        if(emptyField.length < 1){
            postData()
        }else{
            setField(emptyField);
            document.getElementById('emptyFieldSell').click();
        }
    }

    function validationPUBG(){
        let emptyField = ""
        
        if( dataPUBG.header === ""){
            emptyField += ', header'
        }
        if( dataPUBG.royalePass === ""){
            emptyField += ', royalePass'
        }
        if( dataPUBG.level === 0){
            emptyField += ', level'
        }
        if( dataPUBG.rank === ""){
            emptyField += ', rank'
        }
        if( dataPUBG.price === 0){
            emptyField += ', price'
        }
        if( dataPUBG.changeNameStatus === ""){
            emptyField += ', change name status'
        }
        if( dataPUBG.dataLogin === ""){
            emptyField += ', data login'
        }
        if( dataPUBG.description === ""){
            emptyField += ', description'
        }
        if( dataPUBG.reason === ""){
            emptyField += ', reason'
        }
        if( dataPUBG.skin.length === 0){
            emptyField += ', skin'
        }
        if( dataPUBG.photo.length === 0){
            emptyField += ', photo'
        }



        if(emptyField.length < 1){
            postData()
        }else{
            setField(emptyField);
            document.getElementById('emptyFieldSell').click();
        }
    }

    return(
        <>
        {
        (getUrl.game === 'sellaccountvalorant')?
        <>
            <ErrorEmptyField field={field} />
            <h1>Sell Valorant Account</h1>
            <SellAccountValorant data={getData} />
            <div className="container-submit-button">
                <Button variant="secondary" onClick={()=>NavigateTo('/choosegamesell')} >Back</Button>
                <Button variant="primary" onClick={()=>beforeValidation()}>Submit</Button>
            </div>
        </>
        :(getUrl.game === 'sellaccountmobilelegend')?
        <>
            <ErrorEmptyField field={field} />
            <h1>Sell Mobile Legend Account</h1>
            <SellAccountMobileLegend data={getData} />
            <div className="container-submit-button">
                <Button variant="secondary" onClick={()=>NavigateTo('/choosegamesell')} >Back</Button>
                <Button variant="primary" onClick={()=>beforeValidation()}>Submit</Button>
            </div>
        </>
        :(getUrl.game === 'sellaccountpubg')?
        <>
            <ErrorEmptyField field={field} />
            <h1>Sell PUBG Account</h1>
            <SellAccountPUBG data={getData} />
            <div className="container-submit-button">
                <Button variant="secondary" onClick={()=>NavigateTo('/choosegamesell')} >Back</Button>
                <Button variant="primary" onClick={()=>beforeValidation()}>Submit</Button>
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
