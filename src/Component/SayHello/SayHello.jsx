import React from "react";
import styled from "styled-components";
import "./SayHello.css";

const SayHelloCSS = styled.div`
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

function TopBar(props) {
  let [date, setDate] = React.useState(null);
  let dateNow = () => {
    let date = new Date();
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

  React.useEffect(() => {
    dateNow();
  });

  setInterval(() => {
    dateNow();
  }, 1000);

  const greeting = props.login
    ? `Hi, ${props.profile.fullName}`
    : "Hi, Beli Sekarang dapatkan Promonya.";

  return (
    <SayHelloCSS>
      <h1>{greeting}</h1>
      <h3>Date, Time : {date} </h3>
    </SayHelloCSS>
  );
}

export default TopBar;
