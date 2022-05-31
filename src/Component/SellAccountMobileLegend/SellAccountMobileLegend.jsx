import React from "react";
import CloseButton from 'react-bootstrap/CloseButton';
import { Button, Dropdown, Header, Icon, Image, Input, Label, Segment } from 'semantic-ui-react';
import DropdownSkinMobilLegend from "../DropdownSkinMobilLegend/DropdownSkinMobilLegend";
import './SellAccountMobileLegend.css';

function SellAccountMobileLegend(props){

    const androidOrIos = [
        { key: "All", text: 'All', value: "All" },
        { key: "Android", text: 'Android', value: "Android" },
        { key: "IOS", text: 'IOS', value: "IOS" },
      ]

      const CNCF = [
        { key: "None", text: 'None', value: "None" },
        { key: "Available", text: 'Available', value: "Available" },
        { key: "Not AVailable", text: 'Not Available', value: "Not AVailable" },
      ]

      const rank = [
        { key: "Warior", text: "Warior", value: "Warior" },
        { key: "Elite", text: "Elite", value: "Elite" },
        { key: "Grandmaster", text: "Grandmaster", value: "Grandmaster" },
        { key: "Epic", text: "Epic", value: "Epic" },
        { key: "Legend", text: "Legend", value: "Legend" },
        { key: "Mythic", text: "Mythic", value: "Mythic" },
        { key: "Mythical Glory", text: "Mythical Glory", value: "Mythical Glory" },
      ]

      let data ={
        game: "Mobile Legend",
        header: "",
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

      function changeValue(e, name){
        let value = e.target.value;
        let outerText = e.target.outerText

        if(name === 'header'){
            data.header = value;
        }else if(name === 'nickname'){
            data.nickname  = value;
        }else if(name === 'device'){
            data.device = outerText;
        }else if(name === 'level'){
            data.level = value;
        }else if(name === 'heroCount'){
            data.heroCount = value;
        }else if(name === 'price'){
            data.price = value;
        }else if(name === 'reason'){
             data.rank = value;
        }else if(name === 'rank'){
            data.rank = outerText;
        }else if(name === 'CNCF'){
            data.CNCF = outerText;
        }
        sendData();
      }
      
      
      function sendData(){
        props.data(data , 'Mobile Legend')
    }

      function getData(datanya){
        data.hero = datanya
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
    
    let sourcePhoto = []
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
                    <Input placeholder='Nickname Account' onChange={(e)=>changeValue(e, 'nickname')}/>
                </div>
                <div className="double-column dropdown-size">
                    <div>
                        <h6>Device</h6>
                        <Dropdown clearable options={androidOrIos} selection placeholder="None" onChange={(e)=>changeValue(e, 'device')}/>
                    </div>
                    <div>
                        <h6>Level</h6>
                        <Input placeholder='Account Level' type="number" onChange={(e)=>changeValue(e, 'level')}/>
                    </div>
                </div>
                <div className="double-column dropdown-size">
                    <div>
                        <h6>Hero Count</h6>
                        <Input placeholder='Hero Count' type="number" onChange={(e)=>changeValue(e, 'heroCount')}/>
                    </div>
                    <div className="format">
                        <h6>Price</h6>
                        <Input labelPosition='right' type='text' placeholder='Price'>
                            <Label basic>Rp.</Label>
                            <input type="number" name="price" onChange={(e)=>changeValue(e, 'price')}/>
                            <Label>.00</Label>
                        </Input>
                    </div>
                </div>
                <div>
                    <h6>Reason to Sell</h6>
                    <Input placeholder='Reason to Sell Product' onChange={(e)=>changeValue(e, 'reason')}/>
                </div>
            </div>
            <div className="right">
                <div className="double-column dropdown-size">
                    <div>
                        <h6>Rank</h6>
                        <Dropdown clearable options={rank} selection placeholder="None" onChange={(e)=>changeValue(e, 'rank')}/>
                    </div>
                    <div>
                        <h6>Change Flag and Change Name</h6>
                        <Dropdown clearable options={CNCF} selection placeholder="None" onChange={(e)=>changeValue(e, 'CNCF')}/>
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
                    <h6>Your Account Hero</h6>
                    <DropdownSkinMobilLegend dataSelect={getData} />
                </div>
            </div>
        </div>
    );
}

export default SellAccountMobileLegend;