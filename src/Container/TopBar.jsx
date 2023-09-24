import React, { useContext, useEffect, useState } from "react";
// import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Button from "../Component/Button/Button";
import Profile from "../Component/Profile";
import SayHello from "../Component/SayHello/SayHello";
import { Context } from "../Function/Context";

const Container = styled.div`
  position: fixed;
  top: -5px;
  left: 0;
  right: 0;
  height: 80px;
  width: calc(100vw - 180px);
  margin: auto;
  display: flex;
  justify-content: space-between;
  max-width: 1300px;

  .ui.dropdown > .dropdown.icon:before {
    visibility: hidden;
    display: none !important;
  }

  @media only screen and (max-width: 730px) {
    height: 80px;
    width: 100vw;
    padding: 0 15px;
    justify-content: space-between;
  }
`;

const buttonStyle = `
background: linear-gradient(18deg, rgba(28,52,173,0.23012955182072825) 0%, rgba(28,52,173,1) 100%);
border-radius: 10px;
padding: 5px 4vw;
margin: auto 0;
font-weight: normal;

@media only screen and (max-width: 430px) {
    display: none;
}
`;

function TopBar() {
  const { context, updateContextValue } = useContext(Context);
  const [login, setLogin] = useState(false);
  // const location = useLocation();
  // const currentPath = location.pathname;

  useEffect(() => {
    setLogin(context.login);
  }, [context.user, context.login]);

  return (
    <div>
      {login ? (
        <Container>
          <SayHello />
          <Profile />
        </Container>
      ) : (
        <Container>
          <SayHello />
          <Button
            text="Log In"
            additionalStyle={buttonStyle}
            onclick="/sign-in"
          />
        </Container>
      )}
    </div>
  );
}

export default TopBar;
