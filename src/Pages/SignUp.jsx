import moment from "moment";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Checkbox, Form, Icon, Input, Label } from "semantic-ui-react";
import styled from "styled-components";
import validator from "validator";
import ModalSuccessRegister from "../Component/ModalSuccessRegister";
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


 :nth-child(8) {
  height: 35px;
}

 :nth-child(8){
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

.password-sign-up .eye{
  border-radius: 0 12px 12px 0 !important;
}

 .label{
  border-radius: 5px !important;
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

 .button, .button:hover, .button:focus{
  margin: 0;
  font-size: 18px;
  font-weight: 600;
  font-family: 'Poppins' !important;
  color: #DCDDDE;
  background-color: #2444E3;
  width: 100%;
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

export default function SignUp() {
  const navigate = useNavigate();
  const navigateTo = (to) => navigate(to);
  const { context, updateContextValue } = useContext(Context);
  if (context.login && context.user) {
    navigateTo("/");
  }
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});

  const [type, setType] = useState("password");
  const [eye, setEye] = useState("eye slash");
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const handleChange = (e, { name, value }) => {
    setFormData({ ...formData, [name]: value });
  };

  const isValidFullName = (fullName) => {
    const lowercaseRegex = /[a-z]/;
    const uppercaseRegex = /[A-Z]/;

    const hasLowercase = lowercaseRegex.test(fullName);
    const hasUppercase = uppercaseRegex.test(fullName);

    if (fullName.length < 10) {
      setErrors({
        fullName: "Full Name must be at least 10 characters long.",
      });
    } else if (!hasLowercase) {
      setErrors({
        fullName: "Full Name must contain at least one lowercase letter.",
      });
      return false;
    } else if (!hasUppercase) {
      setErrors({
        fullName: "Full Name must contain at least one uppercase letter.",
      });
      return false;
    } else {
      setErrors({ fullName: undefined });
      return true;
    }
  };

  const isValidUsername = (username) => {
    const lowercaseRegex = /[a-z]/;
    const uppercaseRegex = /[A-Z]/;
    const numberRegex = /[0-9]/;

    const hasLowercase = lowercaseRegex.test(username);
    const hasUppercase = uppercaseRegex.test(username);
    const hasNumber = numberRegex.test(username);

    if (username.length < 8) {
      setErrors({
        username:
          "Username must be at least 8 characters between 16 characters long.",
      });
    } else if (!hasLowercase) {
      setErrors({
        username: "Username must contain at least one lowercase letter.",
      });
      return false;
    } else if (!hasUppercase) {
      setErrors({
        username: "Username must contain at least one uppercase letter.",
      });
      return false;
    } else if (!hasNumber) {
      setErrors({
        username: "Username must contain at least one number.",
      });
      return false;
    } else {
      setErrors({ username: undefined });
      return true;
    }
  };

  const isValidEmail = (email) => {
    const valid = validator.isEmail(email);
    if (valid) {
      setErrors({ email: undefined });
      return true;
    } else {
      setErrors({ email: "Email is invalid." });
      return false;
    }
  };

  const isValidPassword = (password, confirmPassword) => {
    if (password.length < 8) {
      setErrors({
        password: "Password must be more than 8 characters.",
      });
      return false;
    }

    const lowercaseRegex = /[a-z]/;
    const uppercaseRegex = /[A-Z]/;
    const numberRegex = /[0-9]/;

    const hasLowercase = lowercaseRegex.test(password);
    const hasUppercase = uppercaseRegex.test(password);
    const hasNumber = numberRegex.test(password);

    if (!hasLowercase) {
      setErrors({
        password: "Password must contain at least one lowercase letter.",
      });
      return false;
    }
    if (!hasUppercase) {
      setErrors({
        password: "Password must contain at least one uppercase letter.",
      });
      return false;
    }

    if (!hasNumber) {
      setErrors({
        password: "Password must contain at least one number.",
      });
      return false;
    }

    if (password !== confirmPassword) {
      setErrors({
        password: "Password and confirm password do not match.",
        confirmPassword: "Password and confirm password do not match.",
      });
      return false;
    }

    setErrors({ password: undefined, confirmPassword: undefined });
    return true;
  };

  const handleSubmit = async () => {
    setLoading(true);
    const { fullName, email, username, password, confirmPassword } = formData;
    let isValid = true;

    const fullNameValid = await isValidFullName(fullName);
    if (!fullNameValid) {
      setLoading(false);
      isValid = false;
    }

    if (isValid) {
      const usernameValid = await isValidUsername(username);
      if (!usernameValid) {
        setLoading(false);
        isValid = false;
      }
    }

    if (isValid) {
      const emailValid = await isValidEmail(email);
      if (!emailValid) {
        setLoading(false);
        isValid = false;
      }
    }

    if (isValid) {
      const passwordValid = await isValidPassword(password, confirmPassword);
      if (!passwordValid) {
        setLoading(false);
        isValid = false;
      }
    }

    if (isValid) {
      setErrors({});
      const currentTime = moment().format("DD/MM/YYYY HH:mm:ss");
      post(
        "user/register",
        {
          fullName,
          username,
          email,
          password,
          lastOnline: currentTime,
          createdAt: currentTime,
          updatedAt: currentTime,
        },
        "main"
      ).then((res) => {
        setLoading(false);
        if (res.status === 201) {
          setOpen(true);
        } else if (res.status === 208) {
          setErrors({
            username: res.message,
            email: res.message,
          });
        }
      });
    }
  };

  return (
    <Container>
      <UpdateGameContainer />
      <Content>
        <Form onSubmit={handleSubmit}>
          <h1>Welcome to GCONN !</h1>
          <h4>Please Sign-Up with your account!</h4>
          <Form.Input
            onChange={handleChange}
            name="fullName"
            icon="user"
            error={errors.fullName}
            iconPosition="left"
            placeholder="Full Name"
            style={{ borderRadius: "12px", overflow: "hidden" }}
          />
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
            onChange={handleChange}
            name="email"
            error={errors.email}
            icon="envelope"
            iconPosition="left"
            placeholder="Email"
            style={{ borderRadius: "12px", overflow: "hidden" }}
          />
          <Form.Input
            labelPosition="right"
            type="password"
            error={errors.password}
            className="password-sign-up"
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
          <Form.Input
            labelPosition="right"
            type="password"
            error={errors.confirmPassword}
            className="password-sign-up"
          >
            <Input
              onChange={handleChange}
              name="confirmPassword"
              type={type}
              icon="lock"
              iconPosition="left"
              placeholder="Confirm Password"
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
          <Checkbox label="Please remind me the newest promotions and news" />
          <Form.Button
            type="submit"
            style={{ borderRadius: "12px", overflow: "hidden" }}
            loading={loading}
          >
            Sign Up
          </Form.Button>
          <h5>
            Have an account?{" "}
            <b onClick={() => navigateTo("/sign-in")}>Log-in</b>!
          </h5>
        </Form>
      </Content>
      <ModalSuccessRegister
        name={formData.fullName}
        open={open}
        setOpen={() => setOpen(false)}
      />
    </Container>
  );
}
