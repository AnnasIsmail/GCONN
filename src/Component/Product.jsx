import React, { useContext, useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { useCookies } from "react-cookie";
import { useLocation, useNavigate } from "react-router-dom";
import { Button, Icon } from "semantic-ui-react";
import styled from "styled-components";
import { SocketIO } from "../App_";
import { Context } from "../Function/Context";
import FormatMoney from "../Function/FormatMoney";

const Container = styled.div`
  img {
    height: 157px;
    object-fit: cover;
  }

  .card {
    background-color: #1c34ad !important;
    border: none !important;
    border-radius: 10px 10px 0 0;
    width: auto !important;
    cursor: pointer;
  }

  .card-body {
    padding: 10px 10px 0 10px;
    height: 111px;
  }

  .card-text {
    min-height: 25px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    white-space: wrap;
    word-break: break-all;
    margin-bottom: 5px;
    font-size: 16px;
    font-weight: 450;
    line-height: 1.2;
  }

  .card-title {
    margin-bottom: 10px;
    font-weight: 600;
    font-size: 19px;
    text-transform: capitalize;
  }

  .card-subtitle {
    font-weight: 300;
    padding: 2px 0 7px 0;
  }

  .produk-chat {
    background-color: #00072b7a !important;
    min-height: 314px !important;
  }

  .produk-chat .card,
  .produk-chat .button-container {
    background-color: #00072b7a !important;
  }

  .button-container .btn :nth-child(1) {
    margin: 0 !important;
  }

  .edit-product {
    /* display: grid !important; */
    grid-template-columns: 100%;
  }

  .edit-product .button {
    width: 120px !important;
  }

  .like {
    color: #ffe21f !important;
  }
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;

  .button {
    background-color: #2444e3;
    color: #dcddde;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    width: 70px;
    z-index: inherit;
  }
  .button:hover {
    background-color: #2444e3;
    color: #dcddde;
  }
  .btn :nth-child(1) {
    margin: 0 !important;
  }
`;
const Footer = styled.div`
  background-color: #1c34ad !important;
  border-radius: 0 0 10px 10px;
  padding: 0 10px 10px 10px;
`;
const FilterMatch = styled.div`
  padding: 10px 0 0 10px;
`;

export default function Product({ data, dataSkins, dataAgents }) {
  const navigate = useNavigate();
  const { context, updateContextValue } = useContext(Context);
  let [like, setLike] = React.useState(false);
  const [cookies, setCookie, removeCookie] = useCookies();
  const socket = React.useRef(React.useContext(SocketIO));
  const [loadingChat, setLoadingChat] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [matchFilter, setMatchFilter] = useState(
    data.filter
      ? Object.entries(data.filter).filter(
          ([key, value]) => value !== undefined
        )
      : undefined
  );
  const [result, setResult] = React.useState(false);
  const pathName = useLocation().pathname;
  const handleConfirm = () => {
    setResult(true);
    setOpen(false);
  };
  const handleCancel = () => {
    setResult(false);
    setOpen(false);
  };
  const NavigateTo = (to) => {
    navigate(to);
  };
  useEffect(() => {
    setMatchFilter(
      data.filter
        ? Object.entries(data.filter).filter(
            ([key, value]) => value !== undefined
          )
        : undefined
    );
  }, [data.filter]);
  function clickFavorite() {
    if (like !== true) {
      fetch(`https://gconn-api-node-js.vercel.app/favoritesAdd`, {
        method: "POST",
        body: JSON.stringify({
          idUser: cookies.Cr787980,
          idAccount: data.id,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }).then(() => setLike(true));
    } else {
      // console.log(data.likeId)
      fetch(`https://gconn-api-node-js.vercel.app/favoritesDelete`, {
        method: "POST",
        body: JSON.stringify({
          id: data.likeId,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }).then(() => setLike(false));
    }
  }

  function deleteProduct() {
    fetch(`https://gconn-api-node-js.vercel.app/accountDetail/${data.id}`)
      .then((response) => response.json())
      .then((json) => {
        if (json.data.idSeller !== cookies.Cr787980) {
          NavigateTo("/mystore");
        } else {
          fetch(`https://gconn-api-node-js.vercel.app/accountDelete`, {
            method: "POST",
            body: JSON.stringify({ idDelete: data.id }),
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
          })
            .then((response) => response.json())
            .then((json) => {
              window.location.reload();
            });
        }
      });
  }

  function goToChat() {
    const currentdate = new Date();
    const dateTime =
      "" +
      (currentdate.getMonth() + 1) +
      "/" +
      currentdate.getDate() +
      "/" +
      currentdate.getFullYear() +
      " " +
      currentdate.getHours() +
      ":" +
      currentdate.getMinutes() +
      ":" +
      currentdate.getSeconds();

    setLoadingChat(true);
    fetch(`https://gconn-api-node-js.vercel.app/addChat`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        myID: cookies.Cr787980,
        idSeller: data.idSeller,
        accountID: data.id,
        role: "Seller",
        dateTime,
      }),
    })
      .then((response) => response.json())
      .then((json) => {
        socket.current.emit("goToDirectMessage", json);
        data.goToChat(json);
        setLoadingChat(false);
      });
  }

  return (
    <Container>
      <Card
        style={{ width: "18rem" }}
        onClick={() => NavigateTo(`/detail-product${data._id}`)}
      >
        <Card.Img variant="top" src={data.photo && data.photo[0]} />
        <Card.Body>
          <Card.Text>{data.header}</Card.Text>
          <Card.Subtitle>{data.game}</Card.Subtitle>
          <Card.Title>
            <FormatMoney money={data.price} />{" "}
          </Card.Title>
        </Card.Body>
      </Card>
      {/* {pathName === false ? (
        <> </>
      ) : pathName === "my-store" ? (
        <div className="button-container edit-product">
          <Button
            onClick={() => NavigateTo(`/editgamesell/${data.id}`)}
            animated="vertical"
          >
            <Button.Content hidden>Edit Product</Button.Content>
            <Button.Content visible>
              <Icon inverted color="grey" name="pencil alternate" />
            </Button.Content>
          </Button>
          <Button animated="vertical" onClick={() => setOpen(true)}>
            <Button.Content hidden>Delete Product</Button.Content>
            <Button.Content visible>
              <Icon inverted color="grey" name="trash" />
            </Button.Content>
          </Button>
        </div>
      ) : (
        <div className="button-container">
          {cookies.Cr787980 === undefined ? (
            <>
              <Button
                disabled
                animated="vertical"
                onClick={() => NavigateTo(`/sign-in`)}
              >
                <Button.Content className={like === true ? "like" : ""} hidden>
                  Favorite
                </Button.Content>
                <Button.Content visible>
                  <Icon
                    inverted
                    color={like === true ? "yellow" : "grey"}
                    name="favorite"
                  />
                </Button.Content>
              </Button>
              <Button
                disabled
                animated="vertical"
                loading={loadingChat}
                onClick={() => NavigateTo(`/sign-in`)}
              >
                <Button.Content hidden>Chat</Button.Content>
                <Button.Content visible>
                  <Icon inverted color="grey" name="chat" />
                </Button.Content>
              </Button>
              <Button animated="vertical">
                <Button.Content hidden>Share</Button.Content>
                <Button.Content visible>
                  <Icon inverted color="grey" name="share alternate" />
                </Button.Content>
              </Button>
            </>
          ) : (
            <>
              <Button animated="vertical" onClick={clickFavorite}>
                <Button.Content className={like === true ? "like" : ""} hidden>
                  Favorite
                </Button.Content>
                <Button.Content visible>
                  <Icon
                    inverted
                    color={like === true ? "yellow" : "grey"}
                    name="favorite"
                  />
                </Button.Content>
              </Button>
              <Button
                animated="vertical"
                loading={loadingChat}
                onClick={goToChat}
              >
                <Button.Content hidden>Chat</Button.Content>
                <Button.Content visible>
                  <Icon inverted color="grey" name="chat" />
                </Button.Content>
              </Button>
              <Button animated="vertical">
                <Button.Content hidden>Share</Button.Content>
                <Button.Content visible>
                  <Icon inverted color="grey" name="share alternate" />
                </Button.Content>
              </Button>
            </>
          )}
        </div>
      )} */}
      <Footer>
        <ButtonContainer>
          <Button
            disabled
            animated="vertical"
            onClick={() => NavigateTo(`/sign-in`)}
          >
            <Button.Content className={like === true ? "like" : ""} hidden>
              Favorite
            </Button.Content>
            <Button.Content visible>
              <Icon
                inverted
                color={like === true ? "yellow" : "grey"}
                name="favorite"
              />
            </Button.Content>
          </Button>
          <Button
            disabled
            animated="vertical"
            loading={loadingChat}
            onClick={() => NavigateTo(`/sign-in`)}
          >
            <Button.Content hidden>Chat</Button.Content>
            <Button.Content visible>
              <Icon inverted color="grey" name="chat" />
            </Button.Content>
          </Button>
          <Button animated="vertical">
            <Button.Content hidden>Share</Button.Content>
            <Button.Content visible>
              <Icon inverted color="grey" name="share alternate" />
            </Button.Content>
          </Button>
        </ButtonContainer>
        {matchFilter && (
          <FilterMatch>
            <div style={{ fontWeight: "bold", paddingBottom: "5px" }}>
              Filter Match
            </div>
            {matchFilter
              .filter(
                ([key, value]) =>
                  key !== "minimum_price" && key !== "maximum_price"
              )
              .map(([key, value]) => (
                <div key={key}>
                  <strong
                    style={{
                      textTransform: "capitalize",
                    }}
                  >
                    {key === "changeNameStatus" ? "Change Name Status" : key}:{" "}
                  </strong>
                  {key === "agent"
                    ? value
                        .map(
                          (agentId) =>
                            dataAgents?.find((data) => data.uuid === agentId)
                              .displayName
                        )
                        .join(", ")
                    : key === "skin"
                    ? value
                        .map(
                          (skinId) =>
                            dataSkins?.find((data) => data.uuid === skinId)
                              .displayName
                        )
                        .join(", ")
                    : Array.isArray(value)
                    ? value.join(", ")
                    : value}
                </div>
              ))}
          </FilterMatch>
        )}
      </Footer>
      <Modal show={open} onHide={handleCancel} id="modal">
        <Modal.Header closeButton>
          <Modal.Title>Delete Account</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete the account titled {data.header}?{" "}
        </Modal.Body>
        <Modal.Footer>
          <Button primary onClick={handleCancel}>
            Cancel
          </Button>
          <Button color="red" onClick={() => deleteProduct()}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}
