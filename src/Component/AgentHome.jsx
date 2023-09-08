import React, { useContext, useEffect, useState } from "react";
import { Card } from "semantic-ui-react";
import { Context } from "../Function/Context";
import getAgentDetail from "../Function/getAgentDetail";
import ModalAgent from "./ModalAgent";

export default function AgentHome({ image, title, role, abilities, uuid }) {
  const [open, setOpen] = useState(false);
  const { context, updateContextValue } = useContext(Context);
  useEffect(() => {
    if (open) {
      getAgentDetail(uuid, context, updateContextValue).then((res) => {
        console.log(res);
      });
    }
  }, [open]);
  return (
    <Card
      onClick={() => setOpen(true)}
      style={{
        minWidth: "230px",
        backgroundColor: "rgb(0, 7, 41)",
        boxShadow: "none",
        borderRadius: "15px",
        minHeight: "250px",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          height: "160px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src={image}
          alt={title}
          style={{ padding: "10px", maxHeight: "160px" }}
        />
      </div>
      <Card.Content
        style={{
          display: "flex",
          flexDirection: "column",
          maxHeight: "200px",
        }}
      >
        <Card.Header style={{ color: "white" }}>{title}</Card.Header>
        <Card.Meta style={{ color: "white", opacity: 0.7 }}>
          {role?.displayName}
        </Card.Meta>
        <Card.Description style={{ color: "white" }}>
          {abilities.map((data, index) => (
            <div>
              {data?.slot}: <b>{data?.displayName}</b>
            </div>
          ))}
        </Card.Description>
      </Card.Content>
      <ModalAgent
        open={open}
        image={image}
        name={title}
        setOpen={() => setOpen(false)}
      />
    </Card>
  );
}
