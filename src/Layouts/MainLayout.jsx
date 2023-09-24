import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { Loader } from "semantic-ui-react";
import styled from "styled-components";
import BottomBar from "../Container/BottomBar/BottomBar";
import LeftSideBar from "../Container/LeftSideBar/LeftSideBar";
import RightSlideBar from "../Container/RightSlide/RightSlideBar";
import TopBar from "../Container/TopBar";
import { get } from "../Function/Api";
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
const Container = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
`;
export default function MainLayout({ children }) {
  const [cookies, setCookie, removeCookie] = useCookies();
  const [context, setContext] = useState({
    login: false,
    user: null,
    skins: null,
    agents: null,
    roles: null,
    updateValorant: null,
    weapons: null,
    ranks: null,
    filterProducts: null,
  });

  const updateContextValue = (key, newValue) => {
    setContext((prevState) => ({
      ...prevState,
      [key]: newValue,
    }));
  };

  useEffect(() => {
    get("user/", "main", { authorization: cookies.token }).then((res) => {
      updateContextValue("user", res.data);
      updateContextValue("login", true);
    });
  }, []);

  // const chatRef = React.useRef();
  // const goToChat = (data) => {
  //   chatRef.current.openDirectChat(data);
  // };
  return (
    <Context.Provider value={{ context, updateContextValue }}>
      {!cookies.token || context.login ? (
        <>
          <MainLayoutComponent>{children}</MainLayoutComponent>
          <TopBar />
          <LeftSideBar />
          <RightSlideBar />
          <BottomBar />
        </>
      ) : (
        <Container>
          <Loader active inline="centered" size="huge" />;
        </Container>
      )}
    </Context.Provider>
  );
}
