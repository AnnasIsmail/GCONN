import React from "react";
import { Card } from "semantic-ui-react";
import ModalSkins from "./ModalSkins";

export default function SkinHome({ image, title, levels, chromas, data }) {
  const [open, setOpen] = React.useState(false);

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
        textDecoration: "none",
      }}
    >
      <div
        style={{
          height: "160px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <img
          src={image ? image : chromas[0].displayIcon}
          alt={title}
          style={{ width: "100%", padding: "10px", maxHeight: "160px" }}
        />
      </div>
      <Card.Content
        style={{
          display: "flex",
          flexDirection: "column",
          placeContent: "flex-end",
          maxHeight: "90px",
        }}
      >
        <Card.Header style={{ color: "white" }}>{title}</Card.Header>
        <Card.Meta style={{ color: "white" }}>{levels.length} Levels</Card.Meta>
        <Card.Meta style={{ color: "white" }}>
          {chromas.length} Chromas
        </Card.Meta>
      </Card.Content>
      <ModalSkins open={open} name={data.displayName} />
    </Card>
  );
}
