import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import AgentHome from "../Component/AgentHome";
import { Context } from "../Function/Context";
import getAPIAgents from "../Function/getAPIAgents";
import getRandomItems from "../Function/getRandomItems";

const Container = styled.div`
  background: linear-gradient(
    18deg,
    rgba(28, 52, 173, 0.23012955182072825) 0%,
    rgba(28, 52, 173, 1) 100%
  );
  border-radius: 10px;

  .ui.card {
    margin: 0px;
  }
`;

const Header = styled.h2`
  font-size: 23px;
  margin: 0;
  padding: 10px 0 0 15px;
  font-weight: 600;
  text-align: left;
`;

const Content = styled.div`
  display: flex;
  max-width: 100%;
  overflow: auto;
  margin: 8px;
  margin-bottom: 0px;
  padding-bottom: 8px;
  gap: 8px;
`;

export default function AgentsHomeContainer() {
  const { context, updateContextValue } = useContext(Context);
  const [agents, setAgents] = useState([]);
  useEffect(() => {
    getAPIAgents(context, updateContextValue).then((res) => {
      setAgents(getRandomItems(res, 5));
    });
  }, []);
  return (
    <Container>
      <Header>Valorant Agents</Header>
      <Content>
        {agents.map((data, index) => (
          <AgentHome
            key={index}
            image={data?.displayIcon}
            title={data?.displayName}
            role={data?.role}
            abilities={data?.abilities}
            uuid={data.uuid}
          />
        ))}
      </Content>
    </Container>
  );
}
