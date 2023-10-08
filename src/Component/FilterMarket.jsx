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

export default function FilterMarket() {
  const [filterOpen, setFilterOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const { context, updateContextValue } = useContext(Context);

  const [changeNameStatus, setChangeNameStatus] = useState([]);
  const [region, setRegion] = useState([]);
  const [rank, setRank] = useState([]);
  const [minimum_price, setMinimum_price] = useState("");
  const [maximum_price, setMaximum_price] = useState("");
  const [skin, setSkin] = useState([]);
  const [agent, setAgent] = useState([]);

  useEffect(() => {
    setVisible(filterOpen);
  }, [filterOpen]);
  useEffect(() => {
    const filter = context.filterProducts;
    if (filter) {
      setChangeNameStatus(filter.changeNameStatus);
      setRegion(filter.region);
      setRank(filter.rank);
      setMinimum_price(filter.minimum_price);
      setMaximum_price(filter.maximum_price);
      setSkin(filter.skin);
      setAgent(filter.agent);
      setFilterOpen(true);
    }
  }, []);
  useEffect(() => {
    const filter = context.filterProducts;
    if (!filter) {
      setChangeNameStatus([]);
      setRegion([]);
      setRank([]);
      setMinimum_price("");
      setMaximum_price("");
      setSkin([]);
      setAgent([]);
    }
  }, [context.filterProducts]);

  const goFilter = () => {
    const filter = {
      changeNameStatus,
      region,
      minimum_price,
      maximum_price,
      rank,
      skin,
      agent,
    };
    updateContextValue("filterProducts", filter);
  };
  const onChangeCheckBox = (event, data) => {
    setChangeNameStatus((prevChangeNameStatus) => {
      if (data.checked) {
        if (data.name === "changeNameStatus") {
          return [...prevChangeNameStatus, data.label];
        }
      } else {
        if (data.name === "changeNameStatus") {
          return prevChangeNameStatus.filter((item) => item !== data.label);
        }
      }
      return prevChangeNameStatus;
    });

    setRegion((prevRegion) => {
      if (data.checked) {
        if (data.name === "region") {
          return [...prevRegion, data.label];
        }
      } else {
        if (data.name === "region") {
          return prevRegion.filter((item) => item !== data.label);
        }
      }
      return prevRegion;
    });
  };
  const handleminimum_priceChange = (event) => {
    const value = event.target.value;
    setMinimum_price(value !== "" ? parseInt(value, 10) : "");
  };
  const handlemaximum_priceChange = (event) => {
    const value = event.target.value;
    setMaximum_price(value !== "" ? parseInt(value, 10) : "");
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
                  defaultChecked={changeNameStatus.includes("Ready")}
                />
                <Checkbox
                  label="Not Ready"
                  onChange={onChangeCheckBox}
                  name="changeNameStatus"
                  defaultChecked={changeNameStatus.includes("Not Ready")}
                />
                <span>Region</span>
                <Checkbox
                  label="AP"
                  onChange={onChangeCheckBox}
                  name="region"
                  defaultChecked={region.includes("AP")}
                />
                <Checkbox
                  label="EUROPA"
                  onChange={onChangeCheckBox}
                  name="region"
                  defaultChecked={region.includes("EUROPA")}
                />
                <Checkbox
                  label="USA"
                  onChange={onChangeCheckBox}
                  name="region"
                  defaultChecked={region.includes("USA")}
                />
              </Content.Section>
              <Content.Section style={{ minWidth: "250px" }}>
                <span>Rank</span>
                <DropdownRanks value={rank} change={setRank} />
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
                    value={minimum_price}
                    onChange={handleminimum_priceChange}
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
                    value={maximum_price}
                    onChange={handlemaximum_priceChange}
                  />
                  <Label>.00</Label>
                </Input>
              </Content.Section>
              <Content.Section
                style={{ minWidth: "250px", marginBottom: "10px" }}
              >
                <span>Skins</span>
                <DropdownSkins value={skin} change={setSkin} />
                <span>Agents</span>
                <DropdownAgents value={agent} change={setAgent} />
              </Content.Section>
            </Content>
            <Action>
              <Button
                color="red"
                onClick={() => {
                  setFilterOpen(false);
                  updateContextValue("filterProducts", undefined);
                }}
              >
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
