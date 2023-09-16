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
import DropdownAgentValorant from "./DropdownAgentValorant/DropdownAgentValorant";
import DropdownSkinValorant from "./DropdownSkinValorant/DropdownSkinValorant";

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
  grid-template-columns: auto auto auto auto auto;
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
  const [loading, setLoading] = useState(true);
  const [ranks, setRanks] = useState([]);

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
                <Checkbox label="Ready" />
                <Checkbox label="Not Ready" />
              </Content.Section>
              <Content.Section>
                <span>Region</span>
                <Checkbox label="AP" />
                <Checkbox label="EUROPA" />
                <Checkbox label="USA" />
              </Content.Section>
              <Content.Section style={{ minWidth: "250px" }}>
                <span>Rank</span>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "5px",
                  }}
                >
                  {ranks.map((data, index) => (
                    <Checkbox label={data.tierName} key={index} />
                  ))}
                </div>
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
                    id="minPriceFilter"
                    name="minimum-price"
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
                    id="maxPriceFilter"
                    name="maximum-price"
                  />
                  <Label>.00</Label>
                </Input>
              </Content.Section>
              <Content.Section style={{ minWidth: "250px" }}>
                <span>Skins</span>
                <DropdownSkinValorant />
                <span>Agents</span>
                <DropdownAgentValorant />
              </Content.Section>
            </Content>
            <Action>
              <Button color="red">Cancel</Button>
              <Button color="blue">Filter</Button>
            </Action>
          </Accordion.Content>
        </Transition>
      </Accordion>
    </Container>
  );
}
