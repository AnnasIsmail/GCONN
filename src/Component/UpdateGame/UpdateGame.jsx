import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: rgb(0, 7, 41);
  border-radius: 15px;
  padding: 15px;
  box-sizing: border-box;
  cursor: pointer;

  img {
    width: 100%;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  h1 {
    font-size: 17px;
    text-align: justify;
    padding: 5px 0;
    margin: 0;
    font-weight: 300;
  }

  h3 {
    font-size: 15px;
    text-align: left;
    font-weight: 200;
    vertical-align: sub;
    height: 20px;
  }

  @media only screen and (max-width: 1100px) {
    grid-template-columns: 350px 1fr;
  }

  @media only screen and (max-width: 700px) {
    grid-template-columns: 1fr 1fr;
  }

  @media only screen and (max-width: 450px) {
    grid-template-columns: 1fr;
  }
`;

function UpdateGame(props) {
  return (
    <Container className="update-game">
      <img src={props.SrcImage} alt="" />
      <div>
        <h1 className="header-update-game">{props.Header}</h1>
        <h3 className="view-on-twitter">View On Twitter</h3>
      </div>
    </Container>
  );
}

export default UpdateGame;
