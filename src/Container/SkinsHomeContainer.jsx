import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import SkinsHome from "../Component/SkinsHome";
import { get } from "../Function/Api";
import { Context } from "../Function/Context";
import getRandomItems from "../Function/getRandomItems";

const Container = styled.div`
  background: linear-gradient(
    18deg,
    rgba(28, 52, 173, 0.23012955182072825) 0%,
    rgba(28, 52, 173, 1) 100%
  );
  border-radius: 10px;

  .ui.card {
    margin: 0px;
  }
`;

const Header = styled.h2`
  font-size: 23px;
  margin: 0;
  padding: 10px 0 0 15px;
  font-weight: 600;
  text-align: left;
`;

const Content = styled.div`
  display: flex;
  max-width: 100%;
  overflow: auto;
  padding: 8px;
  gap: 8px;
`;

export default function SkinsHomeContainer() {
  const { context, updateContextValue } = useContext(Context);
  const [skins, setSkins] = useState([]);
  useEffect(() => {
    console.log(context.skins);
    if (!context.skins) {
      get("/v1/weapons/skins", "valorant").then((response) => {
        setSkins(
          getRandomItems(
            response.data.filter(
              (obj) =>
                !(
                  obj.displayName.startsWith("Standard") ||
                  obj.displayName.startsWith("Random")
                )
            ),
            5
          )
        );
        updateContextValue("skins", response.data);
      });
    } else {
      setSkins(
        getRandomItems(
          context.skins.filter(
            (obj) =>
              !(
                obj.displayName.startsWith("Standard") ||
                obj.displayName.startsWith("Random")
              )
          ),
          5
        )
      );
    }
  }, []);
  return (
    <Container>
      <Header>Valorant Weapon Skins</Header>
      <Content>
        {skins.map((data, index) => (
          <SkinsHome
            key={index}
            image={data.displayIcon}
            title={data.displayName}
            levels={data.levels}
            chromas={data.chromas}
          />
        ))}
      </Content>
    </Container>
  );
}
