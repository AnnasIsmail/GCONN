import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Item } from "semantic-ui-react";
import styled from "styled-components";
import FormatMoney from "../Function/FormatMoney";

const Container = styled(Item.Group)`
  background-color: #1c34ad !important;
  border-radius: 10px;

  .item {
    align-items: center;
  }

  .content {
    padding: 10px !important;
    display: grid !important;
    justify-content: space-between;
    grid-template-columns: 1fr;
    width: 100% !important;
  }

  .content:after {
    display: none !important;
  }

  .header {
    color: white !important;
    text-decoration: none;
    font-size: 20px !important;
  }

  .meta {
    color: white !important;
  }

  .description h5 {
    color: white !important;
    font-weight: 500;
    font-size: 16px;
    display: flex;
    justify-content: space-between;
  }

  .extra {
    display: flex !important;
    justify-content: center;
  }

  .extra button {
    /* height: 45px; */
    font-weight: 400;
    font-size: 17px;
    border-radius: 5px;
    padding: 2px 10px;
    color: white;
    background-color: #00072b;
  }

  .extra button:hover {
    background-color: #393b41;
  }

  @media only screen and (max-width: 1350px) {
    .extra {
      flex-direction: column;
    }
  }

  @media only screen and (max-width: 1050px) {
    .item {
      display: grid !important;
      grid-template-columns: 1fr;
      justify-items: center;
    }

    .ui.items:not(.unstackable) > .item > .image,
    .ui.items:not(.unstackable) > .item > .image > img {
      width: 100% !important;
      max-height: none !important;
    }

    .ui.items:not(.unstackable) > .item > .image,
    .ui.items:not(.unstackable) > .item > .image > img {
      width: 100% !important;
      max-height: none !important;
      /* height: 250px; */
      object-fit: cover;
    }
  }
`;
function DoneTransaction({ data }) {
  let [sizeImage, setSizeImage] = React.useState(
    window.innerWidth < 770 ? "medium" : "large"
  );
  const navigate = useNavigate();
  const navigateTo = (to) => navigate(to);

  function getImageSize() {
    console.log(sizeImage);
    return window.innerWidth < 770 ? "medium" : "large";
  }

  useEffect(() => {
    function handleResize() {
      console.log("must", getImageSize());
      setSizeImage(getImageSize());
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Container>
      <Item>
        <Item.Image
          className="img"
          size={sizeImage}
          src={data.accountData.photo}
        />

        <Item.Content>
          <Item.Header as="a">{data.accountData.header}</Item.Header>
          <Item.Meta>{data.accountData.game}</Item.Meta>
          <Item.Description>
            <h5>
              <b>Transaction ID: </b>
              {data.response_midtrans.order_id}
            </h5>
            <h5>
              <b>Transaction Date: </b> {data.dateTime}
            </h5>
            <h5>
              <b>Status: </b> {data.status}
            </h5>
            <h5>
              <b>Payment Method: </b> {data.paymentMethod}
            </h5>
            <h5>
              <b>Total Payment: </b>
              <FormatMoney money={data.totalTransaction} />{" "}
            </h5>
          </Item.Description>
          <Item.Extra>
            <button
              onClick={() => navigateTo(`/detail-transaction${data._id}`)}
            >
              Detail Transaction
            </button>
          </Item.Extra>
        </Item.Content>
      </Item>
    </Container>
  );
}

export default DoneTransaction;
