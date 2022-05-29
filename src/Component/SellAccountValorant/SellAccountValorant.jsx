import React from "react";
import { Button, Dropdown, Header, Icon, Input, Label, Segment } from 'semantic-ui-react';
import DropdownSkinValorant from "../DropdownSkinValorant/DropdownSkinValorant";
import './SellAccountValorant.css';

function SellAccountValorant(){

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

      let inputTitle = "", inputEmailStatus = "", inputRegion = "", inputRank = "", inputLevel = "", inputBattlepass = "",inputTotalVP = "", inputChangeNameStatus = "", inputPrice = "", inputReason = "", inputPhoto = [], inputSkin = [];

      function changeValue(e, name){
        let value = e.target.value;
        
        console.log(e)

        if(name === ''){

        }else if(name === ''){

        }else if(name === ''){

        }else if(name === ''){

        }else if(name === ''){

        }else if(name === ''){

        }else if(name === ''){

        }else if(name === ''){

        }else if(name === ''){

        }else if(name === ''){

        }else if(name === ''){

        }else if(name === ''){

        }else if(name === ''){

        }
      }

      function getData(data){
        console.log(data)
      }

      function uploadImage(e){
        console.log(e.target.files)
      }
      
    return(
        <div className="sell-account-valorant double-column">
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
                            <input type="number" name="Total-VP" onChange={(e)=>changeValue(e, 'total-vp')} />
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
                            <input type="number" name="price" onChange={(e)=>changeValue(e, 'price')} />
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
                            <Icon name='image outline' />
                            No image are listed for this customer.
                            {/* <div className="container-image-sell-account-valorant">
                                <span>
                                    <Image src={coba1} />
                                    <CloseButton aria-label="Hide" />
                                </span>
                                <span>
                                    <Image src={coba2} />
                                    <CloseButton aria-label="Hide" />
                                </span>
                                <span>
                                    <Image src={coba3} />
                                    <CloseButton aria-label="Hide" />
                                </span>
                            </div> */}
                            </Header>
                            <Button primary>
                                <input type="file" accept="image/*" onChange={uploadImage} multiple/>
                            </Button>
                        </Segment>
                    </div>
                </div>
                <div>
                    <h6>Your Account Skin</h6>
                    <DropdownSkinValorant game='Valorant' dataSelect={getData} />
                </div>
            </div>
        </div>
    );
}

export default SellAccountValorant;