import moment from "moment";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: rgb(0, 7, 41);
  border-radius: 15px;
  padding: 15px;
  box-sizing: border-box;

  a {
    color: white !important;
  }

  img {
    width: 100%;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
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

const Title = styled.a`
  font-size: 17px;
  text-align: justify;
  padding: 5px 0;
  margin: 0;
  font-weight: 700;
  text-decoration: none;
`;

const Date = styled.p`
  font-size: 15px;
  text-align: left;
  font-weight: 200;
  vertical-align: sub;
  height: 20px;
  text-align: end;
`;

function UpdateGame({ title, image, date, url, external_url }) {
  return (
    <Container>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <img src={image} alt="" />
      </a>
      <div>
        <Title
          href={url}
          target="_blank"
          className="header-update-game"
          rel="noreferrer"
        >
          {title}
        </Title>
        <a href={external_url}>Another Link</a>
        <Date>{moment(date).format("dddd, DD MMMM YYYY")}</Date>
      </div>
    </Container>
  );
}

export default UpdateGame;
