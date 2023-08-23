import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Checkbox, Form, Icon, Input, Label } from "semantic-ui-react";
import styled from "styled-components";
import UpdateGameContainer from "../Container/UpdateGameContainer";

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

 Form{
  background: linear-gradient(18deg, rgba(28,52,173,0.23012955182072825) 0%, rgba(28,52,173,1) 100%);
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  backdrop-filter: blur( 20px );
  -webkit-backdrop-filter: blur( 20px );
  border: 1px solid rgba( 255, 255, 255, 0.18 );

  padding: 20px 30px;
  border-radius: 20px;
  display: grid;
  gap: 20px;
  
}

 Form Input{
  height: 45px;
}

 .ui label{
  color: white !important;
}

 :nth-child(2) :nth-child(1) ,  :nth-child(3) :nth-child(1){
  border-radius: 12px !important;
}

 :nth-child(4) :nth-child(1) ,  :nth-child(7) :nth-child(1){
  border-radius: 12px !important;
  height: 45px;
}

 :nth-child(7) {
  height: 35px;
}

 :nth-child(7){
  margin: 0 !important;
  display: flex;
}

 h1{
  font-weight: bold;
  font-size: 37px;
}

 h4 ,  h5{
  padding-bottom: 5px;
  font-weight: 300;
  font-size: 18px;
}

 h5 b{
  cursor: pointer;
}

 b{
  font-weight: bold;
}

 .password-sign-up :nth-child(1){
  border-radius: 12px 0 0 12px !important;
}

 .label{
  border-radius: 0 12px 12px 0 !important;
  display: grid;
  align-items: center;
  background-color: #2444E3;
}

 .label :nth-child(1){
  cursor: pointer;
  margin: 0;
}

 .container-button-sign-up{
  display: grid;
  grid-template-columns: 100%;
  justify-content: space-around;
}

 .container-button-sign-up .button{
  margin: 0;
  font-size: 18px;
  font-weight: 600;
  font-family: 'Poppins' !important;
  color: #DCDDDE;
  background-color: #2444E3;
}

 .ui.basic.red.label{
  /* margin-top: 0 !important; */
  display:inline-block !important;
  border-radius: 5px !important;
  font-weight: 500;
  height: 28px;
}

 .ui.form .field{
  margin-bottom: 0;
}

@media only screen and (max-width: 1040px) {

      grid-template-rows: auto auto;
}
@media only screen and (max-width: 550px) {

   h1{
      font-size: 32px;
  }
`;

let username = "",
  email = "",
  password = "",
  confirmPassword = "",
  fullName = "";

export default function SignIn() {
  const navigasi = useNavigate();

  const NavigateTo = (to) => {
    navigasi(to);
  };

  let [type, setType] = React.useState("password");
  let [eye, setEye] = React.useState("eye slash");

  let [errorFieldFullName, setErrorFieldFullName] = React.useState();
  let [errorFieldUsername, setErrorFieldUsername] = React.useState();
  let [errorFieldEmail, setErrorFieldEmail] = React.useState();
  let [errorFieldPassword, setErrorFieldPassword] = React.useState();
  let [errorFieldConfirmPassword, setErrorFieldConfirmPassword] =
    React.useState();

  function changeValue(e) {
    if (e.target.name === "full-name") {
      fullName = e.target.value;
    } else if (e.target.name === "username") {
      username = e.target.value;
    } else if (e.target.name === "email") {
      email = e.target.value;
    } else if (e.target.name === "password") {
      password = e.target.value;
    } else if (e.target.name === "confirm-password") {
      confirmPassword = e.target.value;
    }
  }

  function error(text) {
    return (error = (
      <Label basic color="red" pointing="below">
        {text === undefined ? "Please enter a value" : text}
      </Label>
    ));
  }

  function blur(e) {
    if (e.target.name === "full-name") {
      if (fullName === "") {
        setErrorFieldFullName(error);
      } else if (fullName.length < 5) {
        setErrorFieldFullName(
          error("Please enter a full name of at least 5 letters")
        );
      }
    } else if (e.target.name === "username") {
      if (username === "") {
        setErrorFieldUsername(error);
      } else if (username.length < 5) {
        setErrorFieldUsername(error("Username must at least 5 letters"));
      } else if (username.match(/^[0-9]+$/)) {
        setErrorFieldUsername(error("Username must contain Lowercase a - z"));
      } else if (username.match(/^[a-z]+$/)) {
        setErrorFieldUsername(error("Username must contain numbers 0 - 9"));
      }
    } else if (e.target.name === "email") {
      if (email === "") {
        setErrorFieldEmail(error);
      } else if (email.indexOf("@") === -1) {
        setErrorFieldEmail(error("Please enter Email correctly"));
      } else {
        let validation = false;
        let list = [".com", ".id", ".ac", ".ac.id", ".co.id"];

        list.forEach((format) => {
          if (email.lastIndexOf(format) !== -1) {
            validation = true;
          }
        });

        if (validation === false) {
          setErrorFieldEmail(error("Please enter Email correctly"));
        }
      }
    } else if (e.target.name === "password") {
      if (password === "") {
        setErrorFieldPassword(error);
      } else if (password.length < 8) {
        setErrorFieldPassword(error("Password must at least 8 letters"));
      } else if (password.match(/^[A-Z0-9]+$/)) {
        setErrorFieldPassword(error("Password must contain Lowercase a - z"));
      } else if (password.match(/^[a-z0-9]+$/)) {
        setErrorFieldPassword(error("Password must contain Uppercase A -Z"));
      } else if (password.match(/^[a-zA-Z]+$/)) {
        setErrorFieldPassword(error("Password must contain numbers 0 - 9"));
      }
    } else if (e.target.name === "confirm-password") {
      if (confirmPassword === "") {
        setErrorFieldConfirmPassword(error);
      } else if (confirmPassword !== password) {
        setErrorFieldConfirmPassword(
          error("Password with Confirm Password must contain the same")
        );
        setErrorFieldPassword(
          error("Password with Confirm Password must contain the same")
        );
      }
    }
  }

  function focus(e) {
    if (e.target.name === "full-name") {
      setErrorFieldFullName();
    } else if (e.target.name === "username") {
      setErrorFieldUsername();
    } else if (e.target.name === "email") {
      setErrorFieldEmail();
    } else if (e.target.name === "password") {
      setErrorFieldPassword();
    } else if (e.target.name === "confirm-password") {
      setErrorFieldConfirmPassword();
    }
  }

  function validationSignUp() {
    let valid = true;
    if (fullName === "") {
      setErrorFieldFullName(error);
      valid = false;
    } else if (fullName.length < 5) {
      setErrorFieldFullName(
        error("Please enter a full name of at least 5 letters")
      );
      valid = false;
    }
    if (username === "") {
      setErrorFieldUsername(error);
      valid = false;
    } else if (username.length < 5) {
      setErrorFieldUsername(error("Username must at least 5 letters"));
      valid = false;
    } else if (username.match(/^[0-9]+$/)) {
      setErrorFieldUsername(error("Username must contain Lowercase a - z"));
      valid = false;
    } else if (username.match(/^[a-z]+$/)) {
      setErrorFieldUsername(error("Username must contain numbers 0 - 9"));
      valid = false;
    }
    if (email === "") {
      setErrorFieldEmail(error);
      valid = false;
    } else if (email.indexOf("@") === -1) {
      setErrorFieldEmail(error("Please enter Email correctly"));
      valid = false;
    } else {
      let validation = false;
      let list = [".com", ".id", ".ac", ".ac.id", ".co.id"];

      list.forEach((format) => {
        if (email.lastIndexOf(format) !== -1) {
          validation = true;
        }
      });

      if (validation === false) {
        setErrorFieldEmail(error("Please enter Email correctly"));
        valid = false;
      }
    }
    if (password === "") {
      setErrorFieldPassword(error);
      valid = false;
    } else if (password.length < 8) {
      setErrorFieldPassword(error("Password must at least 8 letters"));
      valid = false;
    } else if (password.match(/^[A-Z0-9]+$/)) {
      setErrorFieldPassword(error("Password must contain Lowercase a - z"));
      valid = false;
    } else if (password.match(/^[a-z0-9]+$/)) {
      setErrorFieldPassword(error("Password must contain Uppercase A -Z"));
      valid = false;
    } else if (password.match(/^[a-zA-Z]+$/)) {
      setErrorFieldPassword(error("Password must contain numbers 0 - 9"));
      valid = false;
    }
    if (confirmPassword === "") {
      setErrorFieldConfirmPassword(error);
      valid = false;
    } else if (confirmPassword !== password) {
      setErrorFieldConfirmPassword(
        error("Password with Confirm Password must contain the same")
      );
      setErrorFieldPassword(
        error("Password with Confirm Password must contain the same")
      );
      valid = false;
    }
    return valid;
  }

  function SignUp() {
    let valid = validationSignUp();
    if (valid == true) {
      const currentdate = new Date();
      const datetime =
        "" +
        (currentdate.getMonth() + 1) +
        "/" +
        currentdate.getDate() +
        "/" +
        currentdate.getFullYear() +
        " " +
        currentdate.getHours() +
        ":" +
        currentdate.getMinutes() +
        ":" +
        currentdate.getSeconds();
      let dataLogin = {};
      const credentials = {
        fullName: document.getElementById("fullName").value,
        username: document.getElementById("username").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
        lastOnline: datetime,
        balance: 0,
      };

      fetch("https://gconn-api-node-js.vercel.app/register", {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      })
        .then((response) => response.json())
        .then((json) => {
          if (json.status === 200) {
            fetch("https://gconn-api-node-js.vercel.app/registerSeller", {
              method: "POST", // or 'PUT'
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ username: json.data }),
            })
              .then((response) => response.json())
              .then((json) => {
                NavigateTo("/sign-in");
              });
          } else {
            setErrorFieldUsername(
              <Label basic color="red" pointing="below">
                {json.data}
              </Label>
            );
            setErrorFieldEmail(
              <Label basic color="red" pointing="below">
                {json.data}
              </Label>
            );
          }
        });
    }
  }
  return (
    <Container>
      <UpdateGameContainer />
      <Content>
        <Form>
          <Form.Field>
            <h1>Welcome to GCONN !</h1>
            <h4>Please Sign-Up with your account!</h4>
          </Form.Field>
          <Form.Field onBlur={blur} onFocus={focus}>
            {errorFieldFullName}
            <Form.Input
              onChange={changeValue}
              id="fullName"
              name="full-name"
              icon="user"
              iconPosition="left"
              placeholder="Full Name"
            />
          </Form.Field>
          <Form.Field onBlur={blur} onFocus={focus}>
            {errorFieldUsername}
            <Form.Input
              onChange={changeValue}
              id="username"
              name="username"
              icon="user"
              iconPosition="left"
              placeholder="Username"
            />
          </Form.Field>
          <Form.Field onBlur={blur} onFocus={focus}>
            {errorFieldEmail}
            <Form.Input
              onChange={changeValue}
              id="email"
              name="email"
              icon="envelope"
              iconPosition="left"
              placeholder="Email"
            />
          </Form.Field>
          <Form.Field onBlur={blur} onFocus={focus}>
            {errorFieldPassword}
            <Form.Input labelPosition="right" type="text">
              <Input
                onChange={changeValue}
                name="password"
                id="password"
                className="password-sign-up"
                type={type}
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
            </Form.Input>
          </Form.Field>
          <Form.Field onBlur={blur} onFocus={focus}>
            {errorFieldConfirmPassword}
            <Form.Input labelPosition="right" type="text">
              <Input
                onChange={changeValue}
                name="confirm-password"
                id="confirmPassword"
                className="password-sign-up"
                type={type}
                icon="lock"
                iconPosition="left"
                placeholder="Confirm Password"
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
            </Form.Input>
          </Form.Field>
          <Form.Field>
            <Checkbox label="Please remind me the newest promotions and news" />
          </Form.Field>
          <Form.Field className="container-button-sign-up">
            <Button type="submit" onClick={SignUp}>
              Sign Up
            </Button>
          </Form.Field>
          <Form.Field>
            <h5>
              Have an account?{" "}
              <b onClick={() => NavigateTo("/sign-in")}>Log-in</b>!
            </h5>
          </Form.Field>
        </Form>
      </Content>
    </Container>
  );
}
