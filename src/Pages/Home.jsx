import React from "react";
import styled from "styled-components";
import AgentsHomeContainer from "../Container/AgentsHomeContainer";
import SkinsHomeContainer from "../Container/SkinsHomeContainer";
import UpdateGameContainer from "../Container/UpdateGameContainer";

const Container = styled.div`
  display: grid;
  grid-template-columns: calc(100% - 370px) 350px;
  grid-template-rows: 1fr;
  gap: 20px;
  padding-right: 10px;
  align-items: center;

  @media only screen and (max-width: 1100px) {
    grid-template-columns: 100%;
    min-width: auto;
  }

  @media only screen and (max-width: 730px) {
    grid-template-columns: 100%;
  }
`;

const Content = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export default function Home() {
  return (
    <Container>
      <Content>
        <SkinsHomeContainer />
        <AgentsHomeContainer />
      </Content>
      <UpdateGameContainer />
    </Container>
  );
}
