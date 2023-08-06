import React from "react";
import styled from "styled-components";
import UpdateGame from "../../Component/UpdateGame/UpdateGame";
import "./UpdateGameContainer.css";

const Container = styled.div`
  background: linear-gradient(
    18deg,
    rgba(28, 52, 173, 0.23012955182072825) 0%,
    rgba(28, 52, 173, 1) 100%
  );
  border-radius: 10px;
  height: calc(100vh - 90px);
  display: grid;
  overflow: auto;

  h1 {
    padding: 10px 0 5px 15px;
    font-size: 17px;
    margin: 0;
    text-align: left;
  }

  div {
    margin-top: 10px;
    width: 100%;
    border-radius: 15px;
    display: grid;
    gap: 10px;
    padding: 5px;
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

function UpdateGameContainer() {
  return (
    <Container>
      <h1>Update Game</h1>
      <div>
        <UpdateGame
          SrcImage="https://pbs.twimg.com/media/FmHfooEWYAATNBM?format=jpg&name=small"
          Header="A favorite map returns, plus changes to Ranked Rating (RR) and the ability to favorite weapon variants. Check out Patch Notes 6.0 here."
        />
        <UpdateGame
          SrcImage="https://pbs.twimg.com/media/FmDkUyyWIAsxj8r?format=jpg&name=small"
          Header="Are your ears ready for a REVELATION? Check out this Spotify playlist we put together to celebrate the launch of EP6 // ACT1."
        />
        <UpdateGame
          SrcImage="https://pbs.twimg.com/media/FlzR30iaAAMNvcc?format=jpg&name=small"
          Header={`Join our devs live on http://twitch.tv/VALORANT Monday and hear the latest on Lotus, new skins, and Omen's green thumb—hosted by`}
        />
      </div>
    </Container>
  );
}

export default UpdateGameContainer;
