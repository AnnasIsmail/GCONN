import React from "react";
import { Dropdown, Input, Label, Tab } from 'semantic-ui-react';
import game1 from '../../image/icon/game1.png';
import game2 from '../../image/icon/game2.png';
import game3 from '../../image/icon/game3.png';
import DropdownAgentValorant from "../DropdownAgentValorant/DropdownAgentValorant";
import DropdownSkinMobilLegend from "../DropdownSkinMobilLegend/DropdownSkinMobilLegend";
import DropdownSkinPUBG from "../DropdownSkinPUBG/DropdownSkinPUBG";
import DropdownSkinValorant from "../DropdownSkinValorant/DropdownSkinValorant";
import './AdvanceFilter.css';

let data = {
  region: '',
  changeNameStatus: '',
  rank: '',
  game: '',
  skin: '',
  agent: '',
  priceMin: 0,
  priceMax: 0,
  sortBy: ''
}

function AdvanceFilter(props){

const [activeIndex, setActiveIndex] = React.useState(2) 

const [GameValue, setGameValue] = React.useState(''); 
const [ChangeNameStatusValue, setChangeNameStatusValue] = React.useState(''); 
const [RegionValue, setRegionValue] = React.useState(''); 
const [RankValue, setRankValue] = React.useState(''); 

const handleClickChange = (value) => setActiveIndex(value)
const handleTabChange = (e, { activeIndex }) => setActiveIndex(activeIndex)

React.useEffect(()=>{
  console.log(props.data)
  data = props.data;
  setGameValue(props.data.game);
  setChangeNameStatusValue(props.data.changeNameStatus);
  setRegionValue(props.data.region);
  setRankValue(props.data.rank);
  document.getElementById('priceMin').value = props.data.priceMin;
  document.getElementById('priceMax').value = props.data.priceMax;
})

function dataSend(name , value){
  const priceMin = document.getElementById('priceMin').value;
  const priceMax = document.getElementById('priceMax').value;
  
  if(name === 'region'){
    data.region = value
  }else if(name === 'changeNameStatus'){
    data.changeNameStatus = value
  }else if(name === 'rank'){
    data.rank = value
  }else if(name === 'game'){
    data.game = value
  }else if(name === 'skin'){
    data.skin = value
  }else if(name === 'agent'){
    data.agent = value
  }

  // if(data.priceMin !== "" && data.priceMax !== ""){
    data.priceMin = parseInt(priceMin);
    data.priceMax = parseInt(priceMax);
  // }else if(data.priceMin === ""){
  //   data.priceMax = parseInt(priceMax);
  // }else if(data.priceMax === ""){
  //   data.priceMin = parseInt(priceMin);
  // }


  props.sendData(data)
}

function getData(datanya , from){
dataSend(from, datanya)

//   if(from === 'skin'){
//       skin = datanya
// dataSend('else', 'nothing')
// }else if(from === 'agent'){
// dataSend('else', 'nothing')
// agent = datanya
//   }

}

const panes = [
  {
    menuItem: 'Mobile Legend',
    render: () => 
    <Tab.Pane attached={false}>
      <div className="tab-left">
        <h6>Choose Game</h6>
        <div className="choose-game">
          {/* <img src={game1} className="on-page" alt="" onClick={()=>handleClickChange(0)}/> */}
          <img src={game2} alt="" onClick={()=>handleClickChange(1)}/>
          <img src={game3} alt="" onClick={()=>handleClickChange(2)}/>
        </div>
        <div className="android-ios">
          <h6>Device</h6>
          <Dropdown clearable options={device} selection placeholder="None" />
        </div>
        <div className="range-price">
          <h6>Ammount Price Range</h6>
              <div className="range-price-container">
                <Input labelPosition='right' type='text' placeholder='Minimum Price'>
                  <Label basic>Rp.</Label>
                  <input type="number" name="minimum-price" />
                  <Label>.00</Label>
              </Input>
                <span>-</span>
              <Input labelPosition='right' type='text' placeholder='Maximum Price'>
                  <Label basic>Rp.</Label>
                  <input type="number" name="maximum-price" />
                  <Label>.00</Label>
              </Input>
              </div>
        </div>
      </div>
      <div className="tab-right">
        <div className="min-level">
          <h6>Min Level Account</h6>
          <Input placeholder='Minimum Level' type="number" />
        </div>
      <div className="rank-filter">
        <h6>Rank</h6>
        <Dropdown clearable options={rankML} selection placeholder="None" />
      </div>
      <div className="skin-mobile-legend">
        <h6>Choose Skin</h6>
        <DropdownSkinMobilLegend />
      </div>
      </div>
      </Tab.Pane>,
  },
  {
    menuItem: 'PUBG',
    render: () => 
    <Tab.Pane attached={false}>
      <div className="tab-left">
        <h6>Choose Game</h6>
        <div className="choose-game">
          <img src={game1} alt="" onClick={()=>handleClickChange(0)}/>
          <img src={game2} className="on-page" alt="" onClick={()=>handleClickChange(1)}/>
          <img src={game3} alt="" onClick={()=>handleClickChange(2)}/>
        </div>
        <div className="change-name">
          <h6>Change Name Status</h6>
          <Dropdown clearable options={changeName} selection placeholder="None" />
        </div>
        <div className="range-price">
          <h6>Ammount Price Range</h6>
              <div className="range-price-container">
                <Input labelPosition='right' type='text' placeholder='Minimum Price'>
                  <Label basic>Rp.</Label>
                  <input type="number" name="minimum-price" />
                  <Label>.00</Label>
              </Input>
                <span>-</span>
              <Input labelPosition='right' type='text' placeholder='Maximum Price'>
                  <Label basic>Rp.</Label>
                  <input type="number" name="maximum-price" />
                  <Label>.00</Label>
              </Input>
              </div>
        </div>
      </div>
      <div className="tab-right">
        <div className="min-level">
          <h6>Min Level Account</h6>
          <Input placeholder='Minimum Level' type="number" />
        </div>
        <div className="rank-filter">
          <h6>Rank</h6>
          <Dropdown clearable options={rankPUBG} selection placeholder="None" />
        </div>
        <div className="skin">
          <h6>Choose Skin</h6>
          <DropdownSkinPUBG />
        </div>
      </div>
      </Tab.Pane>,
  },
  {
    menuItem: 'Valorant',
    render: () => 
    <Tab.Pane attached={false}>
      {/* <div className="tab-left">
        <h6>Choose Game</h6>
        <div className="choose-game">
          <Image disabled src={game1} alt="" onClick={()=>handleClickChange(0)}/>
          <Image disabled src={game2} alt="" onClick={()=>handleClickChange(1)}/>
          <Image src={game3} className="on-page" alt="" onClick={()=>handleClickChange(2)}/>
        </div> */}
        {/* <div className="choose-region">
          <h6>Region</h6>
          <Dropdown clearable onChange={(e)=>{dataSend('region', e.target.outerText)}} options={chooseRegion} selection placeholder="None" />
        </div>
        <div className="change-name">
          <h6>Change Name Status</h6>
          <Dropdown clearable onChange={(e)=>{dataSend('changeNameStatus', e.target.outerText)}} options={changeName} selection placeholder="None" />
        </div> */}
      {/* </div> */}
      <div className="tab-right">
      
       
      
        <div className="change-name">
          <h6>Change Name Status</h6>
          <Dropdown clearable onChange={(e)=>{dataSend('changeNameStatus', e.target.outerText)}} options={changeName} selection placeholder="None" />
        </div>
        <div className="choose-region">
          <h6>Region</h6>
          <Dropdown clearable onChange={(e)=>{dataSend('region', e.target.outerText)}} options={chooseRegion} selection placeholder="None" />
        </div>
        <div className="change-name">
          <h6>Rank</h6>
          <Dropdown clearable onChange={(e)=>{dataSend('rank', e.target.outerText)}} options={rankValorant} selection placeholder="None" />
        </div>

        <div className="range-price">
          <h6>Ammount Price Range</h6>
              <div className="range-price-container">
                <Input labelPosition='right' type='text' placeholder='Minimum Price'>
                  <Label basic>Rp.</Label>
                  <input id="priceMin" onChange={()=>dataSend('else', 'nothing')} type="number" name="minimum-price" />
                  <Label>.00</Label>
              </Input>
                <span>-</span>
              <Input labelPosition='right' type='text' placeholder='Maximum Price'>
                  <Label basic>Rp.</Label>
                  <input type="number" id="priceMax" onChange={()=>dataSend('else', 'nothing')} name="maximum-price" />
                  <Label>.00</Label>
              </Input>
              </div>
        </div>

        <div className="weapon-skin">
          <h6>Weapon Skin</h6>
          <DropdownSkinValorant />
        </div>
        <div className="agent">
          <h6>Agent</h6>
          <DropdownAgentValorant />
        </div>
      </div>
    </Tab.Pane>,
  },
]

const chooseRegion = [
  { key: 'ASIA', text: 'ASIA', value: 'ASIA' },
  { key: 'EROUPA', text: 'EROUPA', value: 'EROUPA' },
  { key: 'USA', text: 'USA', value: 'USA' },
  // { key: 'AP (Asia Pacific)', text: 'AP (Asia Pacific)', value: 'AP (Asia Pacific)' },
  // { key: 'NA', text: 'NA', value: 'NA' },
  // { key: 'LATAM', text: 'LATAM', value: 'LATAM' },
  // { key: 'BR', text: 'BR', value: 'BR' },
  // { key: 'EU', text: 'EU', value: 'EU' },
  // { key: 'KR', text: 'KR', value: 'KR' },
]

const changeName = [
  { key: 'Ready', text: 'Ready', value: 'Ready' },
  { key: 'Not Ready', text: 'Not Ready', value: 'Not Ready' },
]

const device = [
  { key: 1, text: 'Android', value: 1 },
  { key: 2, text: 'IOS', value: 1 },
]

const rankValorant = [
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

const rankPUBG = [
  { key: "Bronze", text: "Bronze", value: "Bronze" },
  { key: "Silver", text: "Silver", value: "Silver" },
  { key: "Gold", text: "Gold", value: "Gold" },
  { key: "Platinum", text: "Platinum", value: "Platinum" },
  { key: "Diamond", text: "Diamond", value: "Diamond" },
  { key: "Crown", text: "Crown", value: "Crown" },
  { key: "Ace", text: "Ace", value: "Ace" },
  { key: "Conqueror", text: "Conqueror", value: "Conqueror" },
]

const rankML = [
  { key: "Warior", text: "Warior", value: "Warior" },
  { key: "Elite", text: "Elite", value: "Elite" },
  { key: "Grandmaster", text: "Grandmaster", value: "Grandmaster" },
  { key: "Epic", text: "Epic", value: "Epic" },
  { key: "Legend", text: "Legend", value: "Legend" },
  { key: "Mythic", text: "Mythic", value: "Mythic" },
  { key: "Mythical Glory", text: "Mythical Glory", value: "Mythical Glory" },
]
const game = [
  // { key: 1, text: 'Mobile Legend', value: 'Mobile Legend' },
  // { key: 2, text: 'PUBG', value: 'PUBG' },
  { key: 3, text: 'Valorant', value: 'Valorant' },
]


    return(
        <div className="advance-filter">
            {/* <Tab
                menu={{ borderless: true, attached: false, tabular: false }}
                panes={panes}
                activeIndex={activeIndex}
                onTabChange={handleTabChange}
            /> */}
             <div className="tab-right">
      
       
      <div className="game">
        <h6>Game</h6>
        <Dropdown className="dropdown-filter" value={GameValue} onChange={(e)=>{dataSend('game', e.target.outerText); setGameValue(e.target.outerText)}} clearable options={game} selection placeholder="None" />
      </div>
      <div className="change-name">
        <h6>Change Name Status</h6>
        <Dropdown clearable value={ChangeNameStatusValue} onChange={(e)=>{dataSend('changeNameStatus', e.target.outerText);console.log(e.target.outerText); setChangeNameStatusValue(e.target.outerText) }} options={changeName} selection placeholder="None" />
      </div>
      <div className="choose-region">
        <h6>Region</h6>
        <Dropdown clearable value={RegionValue} onChange={(e)=>{dataSend('region', e.target.outerText); setRegionValue(e.target.outerText)}} options={chooseRegion} selection placeholder="None" />
      </div>
      <div className="change-name">
        <h6>Rank</h6>
        <Dropdown clearable value={RankValue} onChange={(e)=>{dataSend('rank', e.target.outerText); setRankValue(e.target.outerText)}} options={rankValorant} selection placeholder="None" />
      </div>

      <div className="range-price">
        <h6>Ammount Price Range</h6>
            <div className="range-price-container">
              <Input labelPosition='right' type='text' placeholder='Minimum Price'>
                <Label basic>Rp.</Label>
                <input id="priceMin" onChange={()=>dataSend('else', 'nothing')} type="number" name="minimum-price" />
                <Label>.00</Label>
            </Input>
              <span>-</span>
            <Input labelPosition='right' type='text' placeholder='Maximum Price'>
                <Label basic>Rp.</Label>
                <input type="number" id="priceMax" onChange={()=>dataSend('else', 'nothing')} name="maximum-price" />
                <Label>.00</Label>
            </Input>
            </div>
      </div>

      <div className="weapon-skin">
        <h6>Weapon Skin</h6>
        <DropdownSkinValorant dataSelect={getData} advanceFilter={data.skin} />
      </div>
      <div className="agent">
        <h6>Agent</h6>
        <DropdownAgentValorant dataSelect={getData} advanceFilter={data.agent} />
      </div>
    </div>
        </div>
    );
}

export default AdvanceFilter;