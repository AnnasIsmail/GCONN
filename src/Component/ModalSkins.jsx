import React, { useEffect, useState } from "react";
import { Icon, Image, Label, Modal } from "semantic-ui-react";

function getCategoryFromString(str) {
  const parts = str?.split("::");
  if (parts?.length > 1) {
    return parts[1];
  }
  return "";
}

export default function ModalSkins({
  open,
  name,
  image,
  chromas,
  setOpen,
  assetPath,
  nameWeapon,
  category,
}) {
  const [isOpen, setIsOpen] = useState(open);
  console.log(chromas);
  const closeModal = () => {
    setIsOpen(false);
    setOpen(false);
  };

  useEffect(() => {
    setIsOpen(open);
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
          backgroundColor: "rgb(0, 7, 41)",
          display: "flex",
          justifyContent: "space-between",
          color: "white",
        }}
      >
        {name}
        <Icon link name="close" onClick={closeModal} />
      </Modal.Header>
      <Modal.Content
        style={{
          backgroundColor: "rgb(0, 7, 41)",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          justifyContent: "space-evenly",
        }}
      >
        <Image
          size="medium"
          src={image ? image : chromas[0].displayIcon}
          wrapped
        />
        <Modal.Description
          style={{
            width: "300px",
            padding: 0,
          }}
        ></Modal.Description>
        <Modal.Description>
          <h4>
            {nameWeapon}
            <Label
              color="red"
              style={{
                padding: "4px 6px",
                fontSize: 15,
                marginLeft: 5,
              }}
            >
              {getCategoryFromString(category)}
            </Label>
          </h4>
          <p>Category: {getCategoryFromString(category)}</p>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions
        style={{
          backgroundColor: "rgb(0, 7, 41)",
        }}
      >
        {assetPath}
      </Modal.Actions>
    </Modal>
  );
}
