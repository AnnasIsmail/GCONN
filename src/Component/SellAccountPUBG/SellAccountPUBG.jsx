import React from "react";
import CloseButton from 'react-bootstrap/CloseButton';
import { Button, Dropdown, Header, Icon, Image, Input, Segment } from 'semantic-ui-react';
import DropdownSkinPUBG from "../DropdownSkinPUBG/DropdownSkinPUBG";
import './SellAccountPUBG.css';

function SellAccountPUBG(props){

    const changeName = [
        { key: "Ready", text: 'Ready', value: "Ready" },
        { key: "Not Ready", text: 'Not Ready', value: "Not Ready" },
      ]

    const rank = [
        { key: "Bronze", text: "Bronze", value: "Bronze" },
        { key: "Silver", text: "Silver", value: "Silver" },
        { key: "Gold", text: "Gold", value: "Gold" },
        { key: "Platinum", text: "Platinum", value: "Platinum" },
        { key: "Diamond", text: "Diamond", value: "Diamond" },
        { key: "Crown", text: "Crown", value: "Crown" },
        { key: "Ace", text: "Ace", value: "Ace" },
        { key: "Conqueror", text: "Conqueror", value: "Conqueror" },
    ]

    const dataLogin = [
        { key: "Email", text: "Email", value: "Email" },
        { key: "Phone Number", text: "Phone Number", value: "Phone Number" },
        { key: "Facebook", text: "Facebook", value: "Facebook" },
        { key: "Twitter", text: "Twitter", value: "Twitter" },
        { key: "GPlay Games", text: "GPlay Games", value: "GPlay Games" },
        { key: "Guest", text: "Guest", value: "Guest" },

    ]

    let data = {
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

    function changeValue(e, name){
        let value = e.target.value;
        let outerText = e.target.outerText

        if(name === 'header'){
            data.header = value;
        }else if(name === 'email-status'){
            data.changeName = outerText;
        }else if(name === 'level'){
            data.level = value;
        }else if(name === 'dataLogin'){
            data.dataLogin = outerText;
        }else if(name === 'price'){
            data.price = value;
        }else if(name === 'description'){
            data.description = value;
        }else if(name === 'reason'){
            data.reason = value
        }else if(name === 'rank'){
            data.rank = outerText;
        }else if(name === 'royalePass'){
            data.royalePass = value;
        }
        sendData();
    }

    function sendData(){
        props.data(data , 'PUBG')
    }

    function getData(datanya){
        data.skin = datanya
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
        <div className="sell-account-valorant double-column">
            <div className="left">
                <div>
                    <h6>Title</h6>
                    <Input placeholder='Title Product' onChange={(e)=>changeValue(e, 'header')}/>
                </div>
                <div>
                    <h6>Nickname</h6>
                    <Input placeholder='Nickname Account' />
                </div>
                <div className="double-column dropdown-size">
                    <div>
                        <h6>Change Name Status</h6>
                        <Dropdown clearable options={changeName} selection placeholder="None" onChange={(e)=>changeValue(e, 'changeNameStatus')}/>
                    </div>
                    <div>
                        <h6>Level</h6>
                        <Input placeholder='Account Level' type="number" onChange={(e)=>changeValue(e, 'level')}/>
                    </div>
                </div>
                <div className="double-column dropdown-size">
                    <div>
                        <h6>Data Login</h6>
                        <Dropdown clearable options={dataLogin} selection placeholder="None" onChange={(e)=>changeValue(e, 'dataLogin')} />
                    </div>
                    <div>
                        <h6>Price</h6>
                        <Input placeholder='Price Product' type="number" onChange={(e)=>changeValue(e, 'price')}/>
                    </div>
                </div>
                <div>
                    <h6>Description</h6>
                    <Input placeholder='Description Account' onChange={(e)=>changeValue(e, 'description')} />
                </div>
                <div>
                    <h6>Reason to Sell</h6>
                    <Input placeholder='Reason to Sell Product' onChange={(e)=>changeValue(e, 'reason')} />
                </div>
            </div>
            <div className="right">
                <div className="double-column dropdown-size">
                    <div>
                        <h6>Rank</h6>
                        <Dropdown clearable options={rank} selection placeholder="None" onChange={(e)=>changeValue(e, 'rank')}/>
                    </div>
                    <div>
                        <h6>Royale Pass</h6>
                        <Input placeholder='Royalepass' onChange={(e)=>changeValue(e, 'royalePass')}/>
                    </div>
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
                    <DropdownSkinPUBG dataSelect={getData} />
                </div>
            </div>
        </div>
    );
}

export default SellAccountPUBG;