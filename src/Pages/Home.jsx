import React from "react";
import styled from "styled-components";
import PhotoCarousel from "../Component/PhotoCarousel/PhotoCarousel";
import AvailableGameContainer from "../Container/AvailableGameContainer/AvailableGameContainer";
import UpdateGameContainer from "../Container/UpdateGameContainer/UpdateGameContainer";

const Container = styled.div`
  position: absolute;
  width: 75vw;
  height: auto;
  margin: auto;
  left: 0;
  right: 0;
  top: 80px;
  // margin-top: 10px;
  top: 0;
  bottom: 10px;
  overflow: auto;

  display: grid;
  grid-template-columns: 70% 1fr;
  grid-template-rows: max-content 1fr;
  gap: 20px;
  min-width: 850px;
  padding-right: 10px;

  @media only screen and (max-width: 1040px) {
    grid-template-columns: 100%;
    grid-template-rows: max-content 50% 80%;
    min-width: auto;
  }

  @media only screen and (max-width: 730px) {
    grid-template-columns: 100%;
    grid-template-rows: max-content 50% 100%;
    min-width: auto;
    width: 90%;
    margin-bottom: 60px;
  }
`;

export default function Home() {
  return (
    <Container>
      <PhotoCarousel />
      <UpdateGameContainer />
      <AvailableGameContainer />
    </Container>
  );
}
