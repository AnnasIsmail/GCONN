import React, { useEffect, useState } from "react";
import { Icon, Image, Modal } from "semantic-ui-react";

const colorBackground = "rgb(0, 7, 41)";

export default function ModalAgent({
  open,
  name,
  setOpen,

  image,
}) {
  const [isOpen, setIsOpen] = useState(open);
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
          backgroundColor: colorBackground,
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
          backgroundColor: colorBackground,
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          justifyContent: "space-evenly",
        }}
      >
        <Image size="medium" src={image} wrapped />
        <Modal.Description
          style={{
            width: "100%",
            gridColumn: "1 / span 2",
          }}
        ></Modal.Description>
      </Modal.Content>
      <Modal.Actions
        style={{
          textAlign: "start",

          backgroundColor: colorBackground,
        }}
      ></Modal.Actions>
    </Modal>
  );
}
