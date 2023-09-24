import React, { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useNavigate, useParams } from "react-router-dom";
import { Loader } from "semantic-ui-react";
import styled from "styled-components";
import { post } from "../Function/Api";

const Container = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
`;
export default function ActivateAccount() {
  const token = useParams().token;
  const navigate = useNavigate();
  const navigateTo = (to) => navigate(to);
  const [cookies, setCookie, removeCookie] = useCookies();

  useEffect(() => {
    post("user/activate_account", { token }, "main")
      .then((res) => {
        console.log(res.status === 401);
        if (res.status === 200) {
          const currentDate = new Date();
          currentDate.setDate(currentDate.getDate() + 1);
          setCookie("token", token, { expires: currentDate, path: "/" });
          navigateTo("/");
        } else if (res.status === 401) {
          navigateTo("/sign-in");
        }
      })
      .catch(() => {
        navigateTo("/sign-in");
      });
  });

  return (
    <Container>
      <Loader active inline="centered" size="huge" />;
    </Container>
  );
}
