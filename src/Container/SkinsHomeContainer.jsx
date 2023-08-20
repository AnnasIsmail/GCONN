import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import SkinsHome from "../Component/SkinsHome";
import { get } from "../Function/Api";
import { Context } from "../Function/Context";
import getRandomItems from "../Function/getRandomItems";

const Container = styled.div`
  display: flex;
  max-width: 100%;
  overflow: auto;
  gap: 8px;

  .ui.card {
    margin: 0px;
  }
`;

export default function SkinsHomeContainer() {
  const { context, updateContextValue } = useContext(Context);
  const [skins, setSkins] = useState([]);
  useEffect(() => {
    if (!context.UpdateGame) {
      get("/v1/weapons/skins", "valorant").then((response) => {
        console.log(response.data);
        setSkins(getRandomItems(response.data, 5));
        updateContextValue("skins", response.data);
      });
    } else {
      setSkins(getRandomItems(context.UpdateGame, 5));
    }
  }, []);
  return (
    <Container>
      {skins.map((data, index) => (
        <SkinsHome
          key={index}
          image={data.displayIcon}
          title={data.displayName}
          levels={data.levels}
          chromas={data.chromas}
        />
      ))}
    </Container>
  );
}
