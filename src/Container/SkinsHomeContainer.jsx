import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import SkinsHome from "../Component/SkinHome";
import { Context } from "../Function/Context";
import getAllSkins from "../Function/getAllSkins";
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
  margin: 8px;
  margin-bottom: 0px;
  padding-bottom: 8px;
  gap: 8px;
`;

export default function SkinsHomeContainer({ style }) {
  const { context, updateContextValue } = useContext(Context);
  const [skins, setSkins] = useState([]);
  useEffect(() => {
    getAllSkins(context, updateContextValue).then((res) => {
      setSkins(getRandomItems(res, 5));
    });
  }, []);
  return (
    <Container style={style}>
      <Header>Valorant Weapon Skins</Header>
      <Content>
        {skins.map((data, index) => (
          <SkinsHome
            key={index}
            image={data?.displayIcon}
            title={data?.displayName}
            levels={data?.levels}
            chromas={data?.chromas}
            assetPath={data?.assetPath}
            uuidWeapons={data?.uuidWeapons}
          />
        ))}
      </Content>
    </Container>
  );
}
