import React from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { Button, Form, Icon, Input, Label } from "semantic-ui-react";

let username = "",
  password = "";
export default function Login() {
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

    fetch("https://gconn-api-node-js.vercel.app/login", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    })
      .then((response) => response.json())
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
    <div className="sign-in">
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
    </div>
  );
}
