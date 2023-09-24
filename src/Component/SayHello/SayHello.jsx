import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { Context } from "../../Function/Context";
import "./SayHello.css";

const Container = styled.div`
  color: white;
  padding: 15px 0 0 0;

  h1 {
    font-size: 25px;
    font-weight: 700;
    margin: 0;
  }

  h3 {
    font-size: 14px;
    font-weight: 300;
  }

  @media only screen and (max-width: 700px) {
    h1 {
      padding-top: 10px;
      font-size: 16px;
    }
  }
`;

function TopBar() {
  const { context, updateContextValue } = useContext(Context);
  const [date, setDate] = useState(null);
  const [login, setLogin] = useState(false);
  const [profile, setProfile] = React.useState({});
  useEffect(() => {
    setLogin(context.login);
    setProfile(context.user && context.user);
  }, [context.user, context.login]);
  const dateNow = () => {
    const date = new Date();
    const month = [
      "JAN",
      "FEB",
      "MAR",
      "APR",
      "MAY",
      "JUN",
      "JUL",
      "AUG",
      "SEP",
      "OCT",
      "NOV",
      "DES",
    ];
    setDate(
      `${date.getDate()} ${
        month[date.getMonth()]
      } ${date.getFullYear()}, ${date.toLocaleTimeString()}`
    );
  };

  setInterval(() => {
    dateNow();
  }, 1000);

  const greeting = login
    ? `Hi, ${profile.fullName}`
    : "Hi, Beli Sekarang dapatkan Promonya.";

  return (
    <Container>
      <h1>{greeting}</h1>
      <h3>Date, Time : {date} </h3>
    </Container>
  );
}

export default TopBar;
