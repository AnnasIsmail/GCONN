import React, { useContext, useEffect, useState } from "react";
import { Card } from "semantic-ui-react";
import { Context } from "../Function/Context";
import getWeaponDetail from "../Function/getWeaponDetail";
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
      getWeaponDetail(uuidWeapons, context, updateContextValue).then((res) => {
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
        <Card.Meta style={{ color: "white" }}>
          {chromas.length} Chromas
        </Card.Meta>
        <Card.Meta style={{ color: "white" }}>{levels.length} Levels</Card.Meta>
      </Card.Content>
      <ModalSkins
        open={open}
        name={title}
        image={image}
        chromas={chromas}
        setOpen={() => setOpen(false)}
        nameWeapon={weapon.displayName}
        category={weapon.shopData?.category}
        shop={weapon.shopData}
        levels={levels}
        stats={weapon.weaponStats}
        otherSkins={weapon.skins?.filter((data) => data.displayName !== title)}
      />
    </Card>
  );
}
