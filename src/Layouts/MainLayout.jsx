import React, { useState } from "react";
import { useCookies } from "react-cookie";
import styled from "styled-components";
import BottomBar from "../Container/BottomBar/BottomBar";
import LeftSideBar from "../Container/LeftSideBar/LeftSideBar";
import RightSlideBar from "../Container/RightSlide/RightSlideBar";
import TopBar from "../Container/TopBar/TopBar";
import { Context } from "../Function/Context";

const MainLayoutComponent = styled.div`
  position: absolute;
  width: calc(100vw - 180px);
  height: auto;
  margin: auto;
  left: 0;
  right: 0;
  top: 80px;
  bottom: 10px;
  max-width: 1300px;
  overflow: auto;

  @media only screen and (max-width: 730px) {
    width: 100vw;
    margin-bottom: 60px;
  }
`;

export default function MainLayout({ children }) {
  const [context, setContext] = useState({
    login: false,
    token: null,
    user: null,
    skins: null,
    agents: null,
    roles: null,
    updateValorant: null,
    weapons: null,
    ranks: null,
  });

  const updateContextValue = (key, newValue) => {
    setContext((prevState) => ({
      ...prevState,
      [key]: newValue,
    }));
  };

  const [cookies, setCookie, removeCookie] = useCookies();
  let login = false;
  if (cookies.Cr787980) {
    login = true;
  }
  const chatRef = React.useRef();
  const goToChat = (data) => {
    chatRef.current.openDirectChat(data);
  };
  return (
    <Context.Provider value={{ context, updateContextValue }}>
      <TopBar />
      <LeftSideBar />
      <MainLayoutComponent>{children}</MainLayoutComponent>
      <RightSlideBar />
      <BottomBar />
    </Context.Provider>
  );
}
