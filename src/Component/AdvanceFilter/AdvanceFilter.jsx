import React from "react";
import { Dropdown, Input, Label, Tab } from 'semantic-ui-react';
import DropdownAgentValorant from "../DropdownAgentValorant/DropdownAgentValorant";
import DropdownSkinMobilLegend from "../DropdownSkinMobilLegend/DropdownSkinMobilLegend";
import DropdownSkinPUBG from "../DropdownSkinPUBG/DropdownSkinPUBG";
import DropdownSkinValorant from "../DropdownSkinValorant/DropdownSkinValorant";
import './AdvanceFilter.css';
import game1 from './assets/game1.png';
import game2 from './assets/game2.png';
import game3 from './assets/game3.png';
import RankML from "./assets/Rank Mobile Legend.png";
import RankPUBG from "./assets/Rank PUBG.png";
import RankValorant from "./assets/Rank Valorant.jpg";

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
          <img src={game1} alt="" onClick={()=>handleClickChange(0)}/>
          <img src={game2} alt="" onClick={()=>handleClickChange(1)}/>
          <img src={game3} alt="" onClick={()=>handleClickChange(2)}/>
        </div>
        <div className="android-ios">
          <h6>Andriod/IOS</h6>
          <Dropdown clearable options={androidOrIOS} selection placeholder="None" />
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
        <img src={RankML} alt="" />
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
          <img src={game2} alt="" onClick={()=>handleClickChange(1)}/>
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
          <img src={RankPUBG} alt="" />
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
          <img src={game3} alt="" onClick={()=>handleClickChange(2)}/>
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
          <img src={RankValorant} alt="" />
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

const androidOrIOS = [
  { key: 1, text: 'Android', value: 1 },
  { key: 2, text: 'IOS', value: 1 },
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