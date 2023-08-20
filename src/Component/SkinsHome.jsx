import React from "react";
import { Card, Icon } from "semantic-ui-react";

export default function SkinsHome({ image, title, levels, chromas }) {
  return (
    <Card
      style={{
        minWidth: "230px",
        backgroundColor: "rgb(0, 7, 41)",
      }}
    >
      <div>
        <img
          src={image ? image : chromas[0].displayIcon}
          alt={title}
          style={{ width: "100%", padding: "10px" }}
        />
      </div>
      <Card.Content>
        <Card.Header style={{ color: "white" }}>{title}</Card.Header>
        <Card.Meta style={{ color: "white" }}>{levels.length} Levels</Card.Meta>
        <Card.Meta style={{ color: "white" }}>
          {chromas.length} Chromas
        </Card.Meta>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name="user" />
          10 Friends
        </a>
      </Card.Content>
    </Card>
  );
}
