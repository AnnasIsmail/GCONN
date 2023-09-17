import React, { useContext, useEffect, useState } from "react";
import {
  Accordion,
  Button,
  Checkbox,
  Icon,
  Input,
  Label,
  Transition,
} from "semantic-ui-react";
import styled from "styled-components";
import { Context } from "../Function/Context";
import getAllRanks from "../Function/getAllRanks";
import DropdownAgents from "./DropdownAgents";
import DropdownRanks from "./DropdownRanks";
import DropdownSkins from "./DropdownSkins";

const Container = styled.div`
  box-shadow: var(--NN500, rgba(141, 150, 170, 0.4)) 0px 1px 6px 0px;
  padding-bottom: 10px;
`;
const Header = styled.h3`
  font-weight: 500;
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: space-between;
  color: white !important;
`;
const Content = styled.div`
  // display: flex;
  // flex-wrap: wrap;
  display: grid;
  grid-template-columns: auto auto auto auto;
  padding: 0 10px;
  gap: 10px;
`;
const Action = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
`;
Content.Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  span {
    font-weight: bold;
  }
  .ui.checkbox label {
    color: white !important;
  }
`;

const dataFilter = {};
export default function FilterMarket() {
  const [filterOpen, setFilterOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const { context, updateContextValue } = useContext(Context);
  const [loading, setLoading] = useState(true);
  const [ranks, setRanks] = useState([]);
  const dataFilterChange = {};

  const [rank, setRank] = useState([]);

  useEffect(() => {
    console.log(rank);
  }, [rank]);

  useEffect(() => {
    setVisible(filterOpen);
  }, [filterOpen]);
  const fetchDataRanks = async () => {
    const result = await getAllRanks(context, updateContextValue);
    setRanks(result);
  };
  useEffect(() => {
    fetchDataRanks();
  }, []);
  const goFilter = () => {
    console.log(dataFilter);
    const filter = {};
    for (const key in dataFilter) {
      if (dataFilter.hasOwnProperty(key)) {
        filter[key] = dataFilter[key];
      }
    }
    updateContextValue("filterProducts", filter);
  };
  const onChangeCheckBox = (event, data) => {
    if (data.checked) {
      if (!dataFilter[data.name]) {
        dataFilter[data.name] = [data.label];
      } else {
        dataFilter[data.name].push(data.label);
      }
    } else {
      if (dataFilter[data.name]) {
        dataFilter[data.name] = dataFilter[data.name].filter(
          (item) => item !== data.label
        );
      }
    }
  };
  const handlePriceChange = (event) => {
    const { name, value } = event.target;
    const newValue = parseInt(value);

    dataFilter[name] = newValue;
  };

  return (
    <Container>
      <Accordion>
        <Accordion.Title
          style={{
            background: `linear-gradient(
            18deg,
            rgba(28, 52, 173, 0.23012955182072825) 0%,
            rgba(28, 52, 173, 1) 100%
          )`,
            padding: "15px",
            borderRadius: "8px",
          }}
          active={filterOpen}
          onClick={() => setFilterOpen(!filterOpen)}
        >
          <Header>
            Filter
            <Icon name="dropdown" />
          </Header>
        </Accordion.Title>
        <Transition visible={visible} animation="fly down" duration={500}>
          <Accordion.Content
            active={filterOpen}
            style={{
              background: `linear-gradient(
            18deg,
            rgba(28, 52, 173, 0.23012955182072825) 0%,
            rgba(28, 52, 173, 1) 100%
          )`,
              padding: "15px",
              borderRadius: "8px",
              marginTop: "10px",
            }}
          >
            <Content>
              <Content.Section>
                <span>Change Name Status</span>
                <Checkbox
                  label="Ready"
                  onChange={onChangeCheckBox}
                  name="changeNameStatus"
                />
                <Checkbox
                  label="Not Ready"
                  onChange={onChangeCheckBox}
                  name="changeNameStatus"
                />
                <span>Region</span>
                <Checkbox
                  label="AP"
                  onChange={onChangeCheckBox}
                  name="region"
                />
                <Checkbox
                  label="EUROPA"
                  onChange={onChangeCheckBox}
                  name="region"
                />
                <Checkbox
                  label="USA"
                  onChange={onChangeCheckBox}
                  name="region"
                />
              </Content.Section>
              <Content.Section style={{ minWidth: "250px" }}>
                <span>Rank</span>
                <DropdownRanks
                  sendData={(e) => (dataFilter.rank = e)}
                  value={rank}
                  change={setRank}
                />
              </Content.Section>
              <Content.Section>
                <span>Price</span>
                <Input
                  labelPosition="right"
                  type="text"
                  placeholder="Minimum Price"
                >
                  <Label basic>Rp.</Label>
                  <input
                    type="number"
                    name="minimum_price"
                    onChange={handlePriceChange}
                  />
                  <Label>.00</Label>
                </Input>
                <Input
                  labelPosition="right"
                  type="text"
                  placeholder="Maximum Price"
                >
                  <Label basic>Rp.</Label>
                  <input
                    type="number"
                    name="maximum_price"
                    onChange={handlePriceChange}
                  />
                  <Label>.00</Label>
                </Input>
              </Content.Section>
              <Content.Section
                style={{ minWidth: "250px", marginBottom: "10px" }}
              >
                <span>Skins</span>
                <DropdownSkins sendData={(e) => (dataFilter.skin = e)} />
                <span>Agents</span>
                <DropdownAgents sendData={(e) => (dataFilter.agent = e)} />
              </Content.Section>
            </Content>
            <Action>
              <Button color="red" onClick={() => setFilterOpen(false)}>
                Cancel
              </Button>
              <Button color="blue" onClick={goFilter}>
                Filter
              </Button>
            </Action>
          </Accordion.Content>
        </Transition>
      </Accordion>
    </Container>
  );
}
