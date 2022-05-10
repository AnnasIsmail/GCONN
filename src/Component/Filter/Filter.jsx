import React from "react";
import { Dropdown, Input, Label } from 'semantic-ui-react';
import FilterIcon from "../../image/icon/Filter";
import './Filter.css';

const game = [
    { key: 1, text: 'Mobile Legend', value: 'Mobile Legend' },
    { key: 1, text: 'PUBG', value: 'PUBG' },
    { key: 1, text: 'Valorant', value: 'Valorant' },
  ]

  const sort = [
      { key: 1, text: 'New', value: 'New' },
    { key: 1, text: 'Most suitable', value: 'Most suitable' },
    { key: 1, text: 'Highest Price', value: 'Highest Price' },
    { key: 1, text: 'Lowest Price', value: 'Lowest Price' },
    { key: 1, text: 'Review', value: 'Review' },
    ]

function Filter(){
    return(
        <div className="filter">
            <div>
                <label htmlFor="game" >GAME</label>
                <Dropdown className="dropdown-filter" onChange={function(event, {value}){console.log(value); }} clearable options={game} selection placeholder="All Game" />
            </div>
            <div>
                <label htmlFor="minimum-price">MINIMUM PRICE</label>
                <Input labelPosition='right' type='text' placeholder='Minimum Price'>
                    <Label basic>Rp.</Label>
                    <input type="number" name="minimum-price" />
                    <Label>.00</Label>
                </Input>
            </div>
            <div>
                <label htmlFor="maximum-price">MAXIMUM PRICE</label>
                <Input labelPosition='right' type='text' placeholder='Maximum Price'>
                    <Label basic>Rp.</Label>
                    <input type="number" name="maximum-price" />
                    <Label>.00</Label>
                </Input>
            </div>
            <div>
                <label htmlFor="game" >SORT BY</label>
                <Dropdown className="dropdown-filter" onChange={function(event, {value}){console.log(value); }} clearable options={sort} selection placeholder="Not Be Sorting" />
            </div>
            <div className="advance-filter">
                <FilterIcon />
                <label htmlFor="">Advance Filter</label>
            </div>
        </div>
    );
}

export default Filter;