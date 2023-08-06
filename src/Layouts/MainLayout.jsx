import React from "react";
import { useCookies } from "react-cookie";
import styled from "styled-components";
import BottomBar from "../Container/BottomBar/BottomBar";
import LeftSideBar from "../Container/LeftSideBar/LeftSideBar";
import RightSlideBar from "../Container/RightSlide/RightSlideBar";
import TopBar from "../Container/TopBar/TopBar";

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
    <div>
      <TopBar goToChat={goToChat} login={login} />
      <LeftSideBar login={login} />
      <MainLayoutComponent>{children}</MainLayoutComponent>
      <RightSlideBar ref={chatRef} login={login} />
      <BottomBar login={login} />
    </div>
  );
}
