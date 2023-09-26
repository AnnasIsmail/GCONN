import moment from "moment";
import React, { useContext, useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { Form, Icon, Input, Label } from "semantic-ui-react";
import styled from "styled-components";
import UpdateGameContainer from "../Container/UpdateGameContainer";
import { post } from "../Function/Api";
import { Context } from "../Function/Context";

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

  :nth-child(1) :nth-child(3),
  :nth-child(1) :nth-child(4) {
    border-radius: 12px !important;
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

  :nth-child(5) :nth-child(1) {
    color: #dcddde;
    background-color: #2444e3;
    margin: 0;
    font-size: 18px;
    font-weight: 600;
    font-family: "Poppins" !important;
    width: 100%;
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

export default function SignIn() {
  const [errors, setErrors] = useState({});
  const [cookies, setCookie, removeCookie] = useCookies();
  const navigate = useNavigate();
  const navigateTo = (to) => navigate(to);
  const [type, setType] = useState("password");
  const [eye, setEye] = useState("eye slash");
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const { context, updateContextValue } = useContext(Context);
  if (context.login && context.user) {
    navigateTo("/");
  }
  const handleChange = (e, { name, value }) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async () => {
    setErrors({});
    setLoading(true);
    const { username, password } = formData;
    if (username.length === 0 || password.length === 0) {
      return setErrors(
        username.length === 0
          ? { username: "Username please fill in" }
          : { password: "Password please fill in" }
      );
    }
    const lastLogin = moment().format("DD/MM/YYYY HH:mm:ss");
    post(
      "user/login",
      {
        username,
        password,
        lastLogin,
      },
      "main"
    )
      .then((res) => {
        setLoading(false);
        if (res.status === 200) {
          const currentDate = new Date();
          currentDate.setDate(currentDate.getDate() + 1);
          updateContextValue("user", res.data);
          updateContextValue("login", true);
          setCookie("token", res.token, { expires: currentDate, path: "/" });
          navigateTo("/");
        } else if (res.status === 401) {
          setErrors({ username: res.message, password: res.message });
        }
      })
      .catch((res) => {
        setLoading(false);
        setErrors({
          username: res.response.data.message,
          password: res.response.data.message,
        });
      });
  };

  return (
    <Container>
      <UpdateGameContainer />
      <Content>
        <Form onSubmit={handleSubmit}>
          <h1>Welcome to GCONN !</h1>
          <h4>Please log-in with your account!</h4>
          <Form.Input
            onChange={handleChange}
            name="username"
            error={errors.username}
            icon="user"
            iconPosition="left"
            placeholder="Username"
            style={{ borderRadius: "12px", overflow: "hidden" }}
          />
          <Form.Input
            labelPosition="right"
            type="password"
            error={errors.password}
            className="password-sign-in"
          >
            <Input
              onChange={handleChange}
              name="password"
              type={type}
              icon="lock"
              iconPosition="left"
              placeholder="Password"
            />
            <Label className="eye">
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
          <Form.Button
            type="submit"
            loading={loading}
            style={{ borderRadius: "12px", overflow: "hidden" }}
          >
            Log In
          </Form.Button>
          <h5>
            Don’t have an account?{" "}
            <b onClick={() => navigateTo("/sign-up")}>Sign-up</b>!
          </h5>
        </Form>
      </Content>
    </Container>
  );
}
