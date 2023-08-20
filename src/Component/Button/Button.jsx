import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import "./Button.css";

// Move the styled component definition outside of the Button function
const ButtonComponent = styled.div`
  height: auto;
  width: auto;
  font-size: 20px;
  text-align: center;
  cursor: pointer;
  ${(props) => props.additionalStyle}
`;

function Button({ text, additionalStyle, onclick }) {
  const navigate = useNavigate();

  const NavigateTo = (to) => {
    navigate(to);
  };

  return (
    <ButtonComponent
      additionalStyle={additionalStyle}
      onClick={() => NavigateTo(onclick)}
    >
      {text}
    </ButtonComponent>
  );
}

export default Button;
