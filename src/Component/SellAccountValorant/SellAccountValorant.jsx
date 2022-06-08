import React from "react";
import CloseButton from 'react-bootstrap/CloseButton';
import { Button, Dropdown, Header, Icon, Image, Input, Label, Segment } from 'semantic-ui-react';
import DropdownAgentValorant from "../DropdownAgentValorant/DropdownAgentValorant";
import DropdownSkinValorant from "../DropdownSkinValorant/DropdownSkinValorant";
import './SellAccountValorant.css';

let data ={
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

function SellAccountValorant(props){

    const emailStatus = [
        { key: "Available", text: 'Available', value: "Available" },
        { key: "Not AVailable", text: 'Not Available', value: "Not AVailable" },
      ]

      const chooseRegion = [
        { key: "ASIA", text: 'ASIA', value: "ASIA" },
        { key: "EROUPA", text: 'EROUPA', value: "EROUPA" },
        { key: "USA", text: 'USA', value: "USA" },
      ]

      const changeName = [
        { key: "Ready", text: 'Ready', value: "Ready" },
        { key: "Not Ready", text: 'Not Ready', value: "Not Ready" },
      ]

      const rank = [
          { key: "IRON 1", text: "IRON 1", value: "IRON 1"},
          { key: "IRON 2", text: "IRON 2", value: "IRON 2"},
          { key: "IRON 3", text: "IRON 3", value: "IRON 3"},
          { key: "BRONZE 1", text: "BRONZE 1", value: "BRONZE 1"},
          { key: "BRONZE 2", text: "BRONZE 2", value: "BRONZE 2"},
          { key: "BRONZE 3", text: "BRONZE 3", value: "BRONZE 3"},
          { key: "SILVER 1", text: "SILVER 1", value: "SILVER 1"},
          { key: "SILVER 2", text: "SILVER 2", value: "SILVER 2"},
          { key: "SILVER 3", text: "SILVER 3", value: "SILVER 3"},
          { key: "GOLD 1", text: "GOLD 1", value: "GOLD 1"},
          { key: "GOLD 2", text: "GOLD 2", value: "GOLD 2"},
          { key: "GOLD 3", text: "GOLD 3", value: "GOLD 3"},
          { key: "PLATINUM 1", text: "PLATINUM 1", value: "PLATINUM 1"},
          { key: "PLATINUM 2", text: "PLATINUM 2", value: "PLATINUM 2"},
          { key: "PLATINUM 3", text: "PLATINUM 3", value: "PLATINUM 3"},          
          { key: "DIAMOND 1", text: "DIAMOND 1", value: "DIAMOND 1"},
          { key: "DIAMOND 2", text: "DIAMOND 2", value: "DIAMOND 2"},
          { key: "DIAMOND 3", text: "DIAMOND 3", value: "DIAMOND 3"},
          { key: "IMMORTAL 1", text: "IMMORTAL 1", value: "IMMORTAL 1"},
          { key: "IMMORTAL 2", text: "IMMORTAL 2", value: "IMMORTAL 2"},
          { key: "IMMORTAL 3", text: "IMMORTAL 3", value: "IMMORTAL 3"},
          { key: "RADIANT", text: "RADIANT", value: "RADIANT"},
      ]



      function changeValue(e, name){
        let value = e.target.value;
        let outerText = e.target.outerText

        if(name === 'header'){
            data.header = value;
        }else if(name === 'email-status'){
            data.emailStatus = outerText;
        }else if(name === 'region'){
            data.region = outerText;
        }else if(name === 'rank'){
            data.rank = outerText;
        }else if(name === 'level'){
            data.level = value;
        }else if(name === 'battlepass'){
            data.battlepass = value;
        }else if(name === 'total-vp'){
            data.totalVP = value;
        }else if(name === 'change-name-status'){
            data.changeNameStatus = outerText;
        }else if(name === 'price'){
            data.price = value;
        }else if(name === 'reason'){
            data.reason = value
        }
        sendData();
      }


      function sendData(){
        props.data(data , 'Valorant')
    }

      function getData(datanya , from){
        if(from === 'skin'){
            data.skin = datanya
        }else if(from === 'agent'){
            data.agent = datanya
        }
        sendData();
      }

      async function uploadImage(e){
        let arrayData = []
        let files = e.target.files
        for(let i = 0; i < files.length; i++){
            arrayData.push(files[i])
        }

        let pushData = async()=>{
            arrayData.map((datanya , index)=>{
                let inputPhotoData = 'https://cdn.discordapp.com/attachments/830080342026092566/' + datanya.name.replace("=", "/");
                data.photo.push(inputPhotoData);
            })
        }
        
        pushData().then(()=>{
            renderImage();
            sendData();
        });
      }

      function renderImage(){
          setInputImage(
            <div className="container-image-sell-account-valorant">
                {data.photo.map((data , index)=>{
                    return(
                        <span key={index}>
                            <Image src={data} />
                            <CloseButton aria-label="Hide" />
                        </span>
                    )
                })}
        </div>
          )
      }
      
      let [inputImage , setInputImage] = React.useState(
        <>
          <Icon name='image outline' />
          No image are listed for this customer.
        </>
        );
        
    return(
        <div className="sell-account-valorant">
            <div className="left">
                <div>
                    <h6>Title</h6>
                    <Input placeholder='Title Product' onChange={(e)=>changeValue(e, 'header')}/>
                </div>
                <div className="double-column dropdown-size">
                    <div>
                        <h6>Email Status</h6>
                        <Dropdown clearable options={emailStatus} selection placeholder="None" onChange={(e)=>changeValue(e, 'email-status')}/>
                    </div>
                    <div>
                        <h6>Region</h6>
                        <Dropdown clearable options={chooseRegion} selection placeholder="None" onChange={(e)=>changeValue(e, 'region')} />
                    </div>
                </div>
                <div className="double-column dropdown-size">
                    <div>
                        <h6>Rank</h6>
                        <Dropdown clearable options={rank} selection placeholder="None" onChange={(e)=>changeValue(e, 'rank')} />
                    </div>
                    <div>
                        <h6>Level</h6>
                        <Input placeholder='Level Account' type="number" onChange={(e)=>changeValue(e, 'level')} />
                    </div>
                </div>
                <div className="double-column dropdown-size">
                    <div>
                        <h6>Battlepass</h6>
                        <Input placeholder='Battlepass' onChange={(e)=>changeValue(e, 'battlepass')} />
                    </div>
                    <div className="format">
                        <h6>Total VP</h6>
                        <Input labelPosition='right' type='text' placeholder='Total VP'>
                            <input className="total-vp" type="number" name="Total-VP" onChange={(e)=>changeValue(e, 'total-vp')} />
                            <Label>VP</Label>
                        </Input>
                    </div>
                </div>
                <div className="double-column dropdown-size">
                    <div>
                        <h6>Change Name Status</h6>
                        <Dropdown clearable options={changeName} selection placeholder="None" onChange={(e)=>changeValue(e, 'change-name-status')} />
                    </div>
                    <div className="format">
                        <h6>Price</h6>
                        <Input labelPosition='right' type='text' placeholder='Price'>
                            <Label basic>Rp.</Label>
                            <input className="price" type="number" name="price" onChange={(e)=>changeValue(e, 'price')} />
                            <Label>.00</Label>
                        </Input>
                    </div>
                </div>
            </div>
            <div className="right">
                <div>
                    <h6>Reason to Sell</h6>
                    <Input placeholder='Reason to Sell Product' onChange={(e)=>changeValue(e, 'reason')} />
                </div>
                <div>
                    <h6>Add Image</h6>
                    <div>
                        <Segment>
                            <Header icon>
                                {inputImage}
                            </Header>
                            <Button primary onClick={function(){ document.getElementById("inputAddImage").click()}}>
                                <input id="inputAddImage" className="input-add-image" type="file" accept="image/*" onChange={uploadImage} multiple/>
                                add image
                            </Button>
                        </Segment>
                    </div>
                </div>
                <div>
                    <h6>Your Account Skin</h6>
                    <DropdownSkinValorant dataSelect={getData} />
                </div>
                <div>
                    <h6>Your Account Agent</h6>
                    <DropdownAgentValorant dataSelect={getData} />
                </div>
            </div>
        </div>
    );
}

export default SellAccountValorant;