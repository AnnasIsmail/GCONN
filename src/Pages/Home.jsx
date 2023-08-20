import React from "react";
import styled from "styled-components";
import SkinsHomeContainer from "../Container/SkinsHomeContainer";
import UpdateGameContainer from "../Container/UpdateGameContainer/UpdateGameContainer";

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

export default function Home() {
  return (
    <Container>
      <SkinsHomeContainer />
      <UpdateGameContainer />
    </Container>
  );
}
