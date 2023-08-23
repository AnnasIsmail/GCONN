import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import UpdateGame from "../../Component/UpdateGame/UpdateGame";
import { get } from "../../Function/Api";
import { Context } from "../../Function/Context";

const Container = styled.div`
  background: linear-gradient(
    18deg,
    rgba(28, 52, 173, 0.23012955182072825) 0%,
    rgba(28, 52, 173, 1) 100%
  );
  border-radius: 10px;
  height: calc(100vh - 90px);
  display: grid;

  h1 {
    font-size: 17px;
    margin: 0;
    font-weight: 500;
    text-align: left;
  }

  div {
    display: grid;
    gap: 10px;
  }

  div::-webkit-scrollbar {
    width: 8px !important;
  }

  img {
    object-fit: cover;
  }

  @media only screen and (max-width: 1100px) {
    margin: auto;
    height: 100%;
  }
`;

const Content = styled.div`
  overflow: auto;
  margin: 0 0 8px 8px;
  padding-right: 8px;
`;

const Header = styled.h2`
  font-size: 23px;
  margin: 0;
  padding: 10px 0 3px 15px;
  font-weight: 600;
  text-align: left;
`;

function UpdateGameContainer() {
  const { context, updateContextValue } = useContext(Context);
  const [updateGame, setUpdateGame] = useState([]);
  useEffect(() => {
    if (!context.updateValorant) {
      get("/v1/website/en-us", "hendrik").then((response) => {
        setUpdateGame(response.data.slice(0, 5));
        updateContextValue("updateValorant", response.data);
      });
    } else {
      setUpdateGame(context.updateValorant.slice(0, 5));
    }
  }, []);
  return (
    <Container>
      <Header>Valorant Update</Header>
      <Content>
        {updateGame.map((data, index) => (
          <UpdateGame
            key={index}
            image={data.banner_url}
            title={data.title}
            date={data.date}
            url={data.url}
            external_url={data.external_link}
          />
        ))}
      </Content>
    </Container>
  );
}

export default UpdateGameContainer;
