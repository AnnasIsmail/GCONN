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

function AdvanceFilter(){

const [activeIndex, setActiveIndex] = React.useState(0) 

const handleClickChange = (value) => setActiveIndex(value)
const handleTabChange = (e, { activeIndex }) => setActiveIndex(activeIndex)

const panes = [
  {
    menuItem: 'Mobile Legend',
    render: () => 
    <Tab.Pane attached={false}>
      <div className="tab-left">
        <h6>Choose Game</h6>
        <div className="choose-game">
          <img src={game1} className="on-page" alt="" onClick={()=>handleClickChange(0)}/>
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
      <div className="tab-left">
        <h6>Choose Game</h6>
        <div className="choose-game">
          <img src={game1} alt="" onClick={()=>handleClickChange(0)}/>
          <img src={game2} alt="" onClick={()=>handleClickChange(1)}/>
          <img src={game3} className="on-page" alt="" onClick={()=>handleClickChange(2)}/>
        </div>
        <div className="choose-region">
          <h6>Region</h6>
          <Dropdown clearable options={chooseRegion} selection placeholder="None" />
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
        <div className="change-name">
          <h6>Change Name Status</h6>
          <Dropdown clearable options={changeName} selection placeholder="None" />
        </div>
        <div className="rank-filter">
          <h6>Rank</h6>
          <Dropdown clearable options={rankValorant} selection placeholder="None" />
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
  { key: 1, text: 'ASIA', value: 1 },
  { key: 2, text: 'EROUPA', value: 1 },
  { key: 3, text: 'USA', value: 1 },
]

const changeName = [
  { key: 1, text: 'Ready', value: 1 },
  { key: 2, text: 'Not Ready', value: 1 },
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

    return(
        <div className="advance-filter">
            <Tab
                menu={{ borderless: true, attached: false, tabular: false }}
                panes={panes}
                activeIndex={activeIndex}
                onTabChange={handleTabChange}
            />
        </div>
    );
}

export default AdvanceFilter;