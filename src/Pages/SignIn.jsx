import React from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { Button, Form, Icon, Input, Label } from "semantic-ui-react";
import styled from "styled-components";
import UpdateGameContainer from "../Container/UpdateGameContainer/UpdateGameContainer";
import { post } from "../Function/Api";

const Container = styled.div`
  display: grid;
  grid-template-columns: auto 350px;
  grid-template-rows: 1fr;
  gap: 0 20px;
  align-items: center;
`;
const Content = styled.div`
  width: 100%;
  grid-column: 1;
  text-align: center;
  display: grid;
  align-items: center;
  align-content: center;
  grid-row: 1 / span 2;

  Form {
    background: linear-gradient(
      18deg,
      rgba(28, 52, 173, 0.23012955182072825) 0%,
      rgba(28, 52, 173, 1) 100%
    );
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.18);

    padding: 20px 30px;
    border-radius: 20px;
    display: grid;
    gap: 20px;
  }

  Form Input {
    height: 45px;
  }

  .ui label {
    color: white !important;
  }

  :nth-child(2) :nth-child(1) {
    border-radius: 12px !important;
  }

  :nth-child(4) :nth-child(1) {
    border-radius: 12px !important;
    height: 45px;
  }

  h1 {
    font-weight: bold;
    font-size: 37px;
  }

  h4,
  h5 {
    padding-bottom: 5px;
    font-weight: 300;
    font-size: 18px;
  }

  h5 b {
    cursor: pointer;
  }

  b {
    font-weight: bold;
  }

  .password-sign-in :nth-child(1) {
    border-radius: 12px 0 0 12px !important;
  }

  .label {
    border-radius: 0 12px 12px 0 !important;
    display: grid;
    align-items: center;
    background-color: #2444e3;
  }

  .label :nth-child(1) {
    cursor: pointer;
    margin: 0;
  }

  .container-button-sign-in {
    display: grid;
    grid-template-columns: 100%;
    justify-content: space-around;
  }

  .container-button-sign-in :nth-child(1) {
    color: #dcddde;
    background-color: #2444e3;
    margin: 0;
    font-size: 18px;
    font-weight: 600;
    font-family: "Poppins" !important;
  }

  .ui.basic.red.label {
    /* margin-top: 0 !important; */
    display: inline-block !important;
    border-radius: 5px !important;
    font-weight: 500;
    height: 28px;
  }

  .ui.form .field {
    margin-bottom: 0;
  }

  @media only screen and (max-width: 1040px) {
    grid-template-columns: 1fr !important;
    grid-template-rows: max-content 50% 50% !important;
    top: 10px !important;
    padding-right: 40px;
  }

  @media only screen and (max-width: 730px) {
    margin-bottom: 50px !important;
    left: 40px !important;
  }

  @media only screen and (max-width: 550px) {
    left: 20px !important;
    padding-right: 20px;

    h1 {
      font-size: 32px;
    }
  }
`;

let username = "",
  password = "";
export default function SignUp() {
  const [errorFieldUsername, setErrorFieldUsername] = React.useState();
  const [errorFieldPassword, setErrorFieldPassword] = React.useState();

  function blur(e) {
    let error = (
      <Label basic color="red" pointing="below">
        Please enter a value
      </Label>
    );
    if (e.target.name === "username") {
      if (username === "") {
        setErrorFieldUsername(error);
      }
    } else if (e.target.name === "password") {
      if (password === "") {
        setErrorFieldPassword(error);
      }
    }
  }

  const [cookies, setCookie, removeCookie] = useCookies();
  const navigasi = useNavigate();
  const today = new Date();
  const nextYear = new Date();
  nextYear.setDate(today.getDate() + 3600);

  const NavigateTo = (to) => {
    navigasi(to);
  };

  let [type, setType] = React.useState("password");
  let [eye, setEye] = React.useState("eye slash");

  function changeValue(e) {
    if (e.target.name === "username") {
      username = e.target.value;
    } else if (e.target.name === "password") {
      password = e.target.value;
    }
  }

  function login() {
    let dataLogin = {};
    console.log(".");
    const credentials = {
      username: document.getElementById("username").value,
      password: document.getElementById("password").value,
    };

    post("/login", JSON.stringify(credentials))
      .then(function (response) {
        // console.log(response)
        if (response.status === 200) {
          setCookie("Cr787980", response.data._id, {
            expires: nextYear,
            path: "/",
          });
          NavigateTo("/");
          window.location.reload();
        } else {
          setErrorFieldUsername(
            <Label basic color="red" pointing="below">
              {response.data}
            </Label>
          );
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  function focus(e) {
    if (e.target.name === "username") {
      setErrorFieldUsername();
    } else if (e.target.name === "password") {
      setErrorFieldPassword();
    }
  }
  return (
    <Container>
      <UpdateGameContainer />
      <Content>
        <Form action={login}>
          <Form.Field>
            <h1>Welcome to GCONN !</h1>
            <h4>Please log-in with your account!</h4>
          </Form.Field>
          <Form.Field onBlur={blur} onFocus={focus}>
            {errorFieldUsername}
            <Input
              name="username"
              icon="user"
              id="username"
              onChange={changeValue}
              iconPosition="left"
              placeholder="Username"
            />
          </Form.Field>
          <Form.Field onBlur={blur} onFocus={focus}>
            {errorFieldPassword}
            <Input labelPosition="right" type="text">
              <Input
                type={type}
                name="password"
                id="password"
                onChange={changeValue}
                className="password-sign-in"
                icon="lock"
                iconPosition="left"
                placeholder="Password"
              />
              <Label>
                <Icon
                  inverted
                  name={eye}
                  onClick={() => {
                    setType(type === "password" ? "text" : "password");
                    setEye(eye === "eye slash" ? "eye" : "eye slash");
                  }}
                />
              </Label>
            </Input>
          </Form.Field>
          <Form.Field className="container-button-sign-in">
            <Button type="submit" onClick={() => login()}>
              Log In
            </Button>
          </Form.Field>
          <Form.Field>
            <h5>
              Don’t have an account?{" "}
              <b onClick={() => NavigateTo("/sign-up")}>Sign-up</b>!
            </h5>
          </Form.Field>
        </Form>
      </Content>
    </Container>
  );
}
