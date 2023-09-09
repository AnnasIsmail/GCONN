import { useEffect, useState } from "react";
import { Accordion, Icon, Image, Label, Modal } from "semantic-ui-react";
import styled from "styled-components";
import AgentHome from "./AgentHome";
const colorBackground = "rgb(0, 7, 41)";
const ContainerOtherAgents = styled.div`
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
const OtherAgents = styled.div`
  display: flex;
  max-width: 100%;
  overflow: auto;
  margin: 8px;
  margin-bottom: 0px;
  padding-bottom: 8px;
  gap: 8px;
`;
function getOtherAgents(roles, role, name) {
  return roles
    .find((data) => data?.displayName === role?.displayName)
    ?.agents.filter((agent) => agent.displayName !== name);
}
export default function ModalAgent({
  open,
  name,
  setOpen,
  abilities,
  image,
  description,
  role,
  allRoles,
}) {
  const [isOpen, setIsOpen] = useState(open);
  const [activeAbilities, setActiveAbilities] = useState(-1);
  const [otherAgents, setOtherAgents] = useState([]);
  const handleAbilitiesClick = (abilitiesIndex) => {
    const newAbilitiesIndex =
      activeAbilities === abilitiesIndex ? -1 : abilitiesIndex;
    setActiveAbilities(newAbilitiesIndex);
  };
  const closeModal = () => {
    setIsOpen(false);
    setOpen(false);
  };
  useEffect(() => {
    setIsOpen(open);
    if (allRoles && role) {
      setOtherAgents(getOtherAgents(allRoles, role, name));
    }
  }, [open]);
  return (
    <Modal
      open={isOpen}
      style={{
        top: "auto",
        left: "auto",
        height: "auto",
      }}
      onClose={closeModal}
      dimmer="blurring"
    >
      <Modal.Header
        style={{
          backgroundColor: colorBackground,
          display: "flex",
          justifyContent: "space-between",
          color: "white",
        }}
      >
        <div>
          {name}
          <Label
            color="red"
            style={{
              padding: "4px 6px",
              fontSize: 15,
              marginLeft: 5,
            }}
          >
            {role?.displayName}
          </Label>
        </div>
        <Icon link name="close" onClick={closeModal} />
      </Modal.Header>
      <Modal.Content
        style={{
          backgroundColor: colorBackground,
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          justifyContent: "space-evenly",
        }}
      >
        <Image size="medium" src={image} wrapped />
        <Modal.Description>
          <h4 style={{ fontWeight: "bold", margin: "10px 0" }}>Description</h4>
          <p>{description}</p>
        </Modal.Description>
        <Modal.Description
          style={{
            width: "100%",
            paddingRight: "10px",
          }}
        >
          <div
            style={{
              width: "100%",
              display: "flex",
              padding: " 10px 10px 0 0",
            }}
          >
            <img
              src={role?.displayIcon}
              alt={role?.displayName}
              style={{ margin: "auto" }}
            />
          </div>
          <h4 style={{ fontWeight: "bold", margin: "10px 0" }}>
            What is a {role?.displayName} ?
          </h4>
          <p>{role?.description}</p>
        </Modal.Description>
        <Modal.Description
          style={{
            width: "100%",
          }}
        >
          <h4 style={{ fontWeight: "bold", margin: "10px 0" }}>Abilities</h4>
          <Accordion
            styled
            style={{
              backgroundColor: colorBackground,
              border: "1px solid rgba(255, 255, 255, 0.7)",
            }}
          >
            {abilities?.map((data, index) => (
              <div key={index}>
                <Accordion.Title
                  active={activeAbilities === index}
                  onClick={() => handleAbilitiesClick(index)}
                  style={{
                    color: "white",
                    border: "1px solid rgba(255, 255, 255, 0.7)",
                    borderRadius: "3px",
                  }}
                >
                  <Icon name="dropdown" />
                  {data.slot} ({data.displayName})
                </Accordion.Title>
                <Accordion.Content
                  active={activeAbilities === index}
                  style={{
                    padding: "15px",
                    display: activeAbilities === index ? "flex" : "none",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <img src={data?.displayIcon} alt={data?.displayName} />
                  <p>{data.description}</p>
                </Accordion.Content>
              </div>
            ))}
          </Accordion>
        </Modal.Description>
      </Modal.Content>
      {otherAgents.length !== 0 && (
        <Modal.Actions
          style={{
            textAlign: "start",
            backgroundColor: colorBackground,
          }}
        >
          {role && (
            <ContainerOtherAgents>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "end",
                }}
              >
                <h5
                  style={{
                    margin: 0,
                    fontWeight: "bold",
                    paddingLeft: "10px",
                    paddingTop: "10px",
                  }}
                >
                  Other Skins
                </h5>
                <h5 style={{ margin: 0, paddingRight: "20px" }}>
                  {otherAgents?.length} results
                </h5>
              </div>
              <OtherAgents>
                {otherAgents?.map((data, index) => (
                  <AgentHome
                    key={index}
                    image={data?.displayIcon}
                    title={data?.displayName}
                    role={data?.role}
                    abilities={data?.abilities}
                    uuid={data.uuid}
                  />
                ))}
              </OtherAgents>
            </ContainerOtherAgents>
          )}
        </Modal.Actions>
      )}
    </Modal>
  );
}
