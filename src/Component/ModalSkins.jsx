import React, { useEffect, useState } from "react";
import { Icon, Image, Modal } from "semantic-ui-react";

export default function ModalSkins({ open, name }) {
  const [isOpen, setIsOpen] = useState(open);
  const closeModal = () => {
    setIsOpen(false);
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
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        {name}
        <Icon link name="close" onClick={closeModal} />
      </Modal.Header>
      <Modal.Content image>
        <Image
          size="medium"
          src="https://react.semantic-ui.com/images/wireframe/image-square.png"
          wrapped
        />
        <Modal.Description>
          <p>Would you like to upload this image?</p>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>asd</Modal.Actions>
    </Modal>
  );
}
