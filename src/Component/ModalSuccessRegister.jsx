import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Modal } from "semantic-ui-react";

const colorBackground = "rgb(0, 7, 41)";

export default function ModalSuccessRegister({ name, open, setOpen }) {
  const [isOpen, setIsOpen] = useState(open);
  const closeModal = () => {
    setIsOpen(false);
    setOpen(false);
  };
  useEffect(() => {
    setIsOpen(open);
  }, [open]);

  const navigate = useNavigate();
  const navigateTo = (to) => navigate(to);
  return (
    <Modal
      open={isOpen}
      style={{
        top: "auto",
        left: "auto",
        height: "auto",
      }}
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
        Successfully Sign Up
      </Modal.Header>
      <Modal.Content
        style={{
          backgroundColor: colorBackground,
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          justifyContent: "space-evenly",
        }}
      >
        Congratulations, {name}! Your account has been successfully created.
        Please check your email to activate your account before logging in
      </Modal.Content>
      <Modal.Actions
        style={{
          textAlign: "start",
          backgroundColor: colorBackground,
        }}
      >
        <Button
          style={{
            backgroundColor: "#2444E3",
            color: "white",
          }}
          onClick={() => navigateTo("/sign-in")}
        >
          Login
        </Button>
      </Modal.Actions>
    </Modal>
  );
}
