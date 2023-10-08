import React from "react";
import { Button } from "semantic-ui-react";
import styled from "styled-components";

const ButtonContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto !important;
  gap: 10px;
  /* background-color: #1C34AD !important; */
  border-radius: 10px;
  padding: 10px 0;

  .btn :nth-child(1) {
    margin: 0 !important;
  }

  .button {
    width: 100% !important;
  }

  .button {
    background-color: #2444e3;
    color: #dcddde;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    width: 70px;
    /* background: rgba(28, 52, 173, 0.77); */
    z-index: inherit;
  }

  .button:hover {
    background-color: #2444e3;
    color: #dcddde;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    width: 70px;
    background: rgba(28, 52, 173, 0.77);
    z-index: inherit;
  }
`;
export default function ActionDetailTransaction({ isSeller, status }) {
  return isSeller ? (
    status === "Waiting For Payment" ? (
      <ButtonContainer>
        <Button>Cancel Transaction</Button>
        <Button>Chat Customer</Button>
      </ButtonContainer>
    ) : status === "Waiting for Seller to Respond" ? (
      <ButtonContainer>
        <Button>Cancel Transaction</Button>
        <Button>Accept Transaction</Button>
      </ButtonContainer>
    ) : status === "Waiting for Seller to Send Credentials" ? (
      <ButtonContainer>
        <Button>Send Credentials</Button>
        <Button>Chat Customer</Button>
      </ButtonContainer>
    ) : status === "Seller Already Sent Credentials" ? (
      <ButtonContainer>
        <Button>Send Credentials</Button>
        <Button>Chat Customer</Button>
      </ButtonContainer>
    ) : status === "Waiting for the seller to accept the cancellation" ? (
      <ButtonContainer>
        <Button>Cancel Transaction</Button>
        <Button>Chat Customer</Button>
      </ButtonContainer>
    ) : (
      status === "Transaction Failed" ||
      (status === "Done" && (
        <ButtonContainer>
          <Button>Chat Customer</Button>
        </ButtonContainer>
      ))
    )
  ) : status === "Waiting For Payment" ? (
    <ButtonContainer>
      <Button>Cancel Transaction</Button>
      <Button>Check Payment Status</Button>
    </ButtonContainer>
  ) : status === "Waiting for Seller to Respond" ? (
    <ButtonContainer>
      <Button>Chat Seller</Button>
      <Button>Request Cancel Transaction</Button>
    </ButtonContainer>
  ) : status === "Waiting for Seller to Send Credentials" ? (
    <ButtonContainer>
      <Button>Chat Sellers</Button>
      <Button>Complete Transaction</Button>
    </ButtonContainer>
  ) : status === "Seller Already Sent Credentials" ? (
    <ButtonContainer>
      <Button>Chat Sellers</Button>
      <Button>Complete Transaction</Button>
    </ButtonContainer>
  ) : status === "Waiting for the seller to accept the cancellation" ? (
    <ButtonContainer>
      <Button>Cancel Transaction</Button>
      <Button>Chat Customer</Button>
    </ButtonContainer>
  ) : (
    status === "Transaction Failed" ||
    (status === "Done" && (
      <ButtonContainer>
        <Button>Chat Seller</Button>
      </ButtonContainer>
    ))
  );
}
