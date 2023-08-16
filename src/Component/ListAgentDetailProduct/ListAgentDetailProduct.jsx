import React from "react";
import { Header, Label, Loader } from "semantic-ui-react";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 20px;

  a {
    text-decoration: none;
  }

  .ui.attached.header {
    background-color: #1935c2;
    color: #dcddde;
    border: none;
    font-size: 15px;
    text-align: center;
    margin-bottom: 10px;
  }
`;

const ContainerAgents = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 10px;
  justify-content: space-between;
  color: black;
  overflow: hidden;
  overflow-y: auto;
  max-height: 250px;
  border-radius: 0 0 5px 5px;

  img {
    height: 35px;
  }

  .ui.attached.segment {
    display: flex;
    align-items: center;
    gap: 15px;
    font-weight: 500;
    font-size: 15px;
    justify-content: space-evenly;
  }

  .label {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-content: center;
  }

  .ui.label:last-child,
  .ui.label:first-child {
    margin: 0 0.14285714em !important;
  }
`;

function ListAgentDetailProduct(props) {
  let [content, setContent] = React.useState();
  let [allAgent, setAllAgent] = React.useState([]);
  let [agent, setAgent] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    fetch(`https://valorant-api.com/v1/agents`)
      .then((response) => response.json())
      .then((res) => {
        setAllAgent(res.data);
      });
  }, []);

  React.useEffect(() => {
    if (allAgent.length !== 0) {
      props.data.forEach((data) => {
        let addArray = [];
        addArray = agent;
        const oneAgent = allAgent.find(
          (dataAllAgent) => dataAllAgent.uuid === data
        );
        addArray.push(oneAgent);
        setAgent(addArray);
      });
      setLoading(false);
    }
  }, [allAgent]);

  return agent.length !== 0 ? (
    <Container>
      <Header as="h5" attached="top">
        List Agent
      </Header>
      <ContainerAgents>
        {loading ? (
          <Loader
            style={{ marginTop: 50 }}
            active
            inline="centered"
            size="huge"
          />
        ) : (
          <>
            {agent.map((data, index) => {
              if (index < props.data.length) {
                return (
                  <Label key={index}>
                    <img src={data.displayIconSmall} alt={data.displayName} />
                    {data.displayName}
                  </Label>
                );
              }
            })}
          </>
        )}
      </ContainerAgents>
    </Container>
  ) : (
    <></>
  );
}

export default ListAgentDetailProduct;
