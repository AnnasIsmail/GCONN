import React from "react";
import { Dropdown, Input, Label } from "semantic-ui-react";
import AdvanceFilterContainer from "../../Container/AdvanceFilterContainer/AdvanceFilterContainer";
import "./Filter.css";

const game = [
  // { key: 1, text: 'Mobile Legend', value: 'Mobile Legend' },
  // { key: 2, text: 'PUBG', value: 'PUBG' },
  { key: 3, text: "Valorant", value: "Valorant" },
];

const sort = [
  { key: "New", text: "New", value: "New" },
  { key: "Highest Price", text: "Highest Price", value: "Highest Price" },
  { key: "Lowest Price", text: "Lowest Price", value: "Lowest Price" },
];

let data = {
  region: "",
  changeNameStatus: "",
  rank: "",
  game: "",
  skin: "",
  agent: "",
  priceMin: 0,
  priceMax: 0,
  sortBy: "",
};

let dataBasic = {
  region: "",
  changeNameStatus: "",
  rank: "",
  game: "",
  skin: "",
  agent: "",
  priceMin: 0,
  priceMax: 0,
  sortBy: "",
};

function Filter(props) {
  const [gameValue, setGameValue] = React.useState();
  const [minPrice, setMinPrice] = React.useState();
  const [maxPrice, setMaxPrice] = React.useState();
  const [sortBy, setSortBy] = React.useState();

  function saveData(e) {
    data = e;
    setGameValue(e.game);
    setMinPrice(e.priceMin);
    setMaxPrice(e.priceMax);
    props.sendData(e);
  }

  React.useEffect(() => {
    if (props.dataFilter === false) {
      data = dataBasic;
    }
  });

  function sortByFunction(e) {
    data.sortBy = e;
    saveData(data);
  }

  function gameFilterFunction(e) {
    setGameValue(e);
    data.game = e;
    saveData(data);
  }

  function minPriceFilterFunction(e) {
    const v = document.getElementById("minPriceFilter").value;
    setMinPrice(v);
    data.priceMin = v;
    saveData(data);
  }

  function maxPriceFilterFunction(e) {
    const v = document.getElementById("maxPriceFilter").value;
    setMaxPrice(v);
    data.priceMax = v;
    saveData(data);
  }

  return (
    <div className="filter">
      <div className="filterGame">
        <label htmlFor="game">GAME</label>
        <Dropdown
          className="dropdown-filter"
          value={gameValue}
          onChange={(e) => gameFilterFunction(e.target.outerText)}
          clearable
          options={game}
          selection
          placeholder="All Game"
        />
      </div>
      <div className="min-price">
        <label htmlFor="minimum-price">MINIMUM PRICE</label>
        <Input labelPosition="right" type="text" placeholder="Minimum Price">
          <Label basic>Rp.</Label>
          <input
            type="number"
            id="minPriceFilter"
            onChange={() => minPriceFilterFunction()}
            value={minPrice}
            name="minimum-price"
          />
          <Label>.00</Label>
        </Input>
      </div>
      <div className="max-price">
        <label htmlFor="maximum-price">MAXIMUM PRICE</label>
        <Input labelPosition="right" type="text" placeholder="Maximum Price">
          <Label basic>Rp.</Label>
          <input
            type="number"
            id="maxPriceFilter"
            onChange={() => maxPriceFilterFunction()}
            value={maxPrice}
            name="maximum-price"
          />
          <Label>.00</Label>
        </Input>
      </div>
      <div className="sortBy">
        <label htmlFor="game">SORT BY</label>
        <Dropdown
          className="dropdown-filter"
          value={sortBy}
          onChange={(e) => sortByFunction(e.target.outerText)}
          clearable
          options={sort}
          selection
          placeholder="Not Be Sorting"
        />
      </div>
      <AdvanceFilterContainer
        data={data}
        sendData={saveData}
        dataFilter={props.dataFilter}
      />
    </div>
  );
}

export default Filter;
