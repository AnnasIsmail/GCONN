import React, { useContext, useEffect, useState } from "react";
import { Card } from "semantic-ui-react";
import { Context } from "../Function/Context";
import getWeaponsDetail from "../Function/getWeaponsDetail";
import ModalSkins from "./ModalSkins";

export default function SkinHome({
  image,
  title,
  levels,
  chromas,
  assetPath,
  uuidWeapons,
}) {
  const { context, updateContextValue } = useContext(Context);
  const [open, setOpen] = useState(false);
  const [weapon, setWeapon] = useState({});
  useEffect(() => {
    if (open) {
      console.log(uuidWeapons);
      getWeaponsDetail(uuidWeapons, context, updateContextValue).then((res) => {
        console.log("WEAPON DETAIL", res);
        setWeapon(res);
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
      <ModalSkins
        open={open}
        name={title}
        image={image}
        chromas={chromas}
        setOpen={() => setOpen(false)}
        assetPath={assetPath}
        nameWeapon={weapon.displayName}
        category={weapon.category}
      />
    </Card>
  );
}
