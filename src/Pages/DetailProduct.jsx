import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import Moment from "react-moment";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Icon, Image, List, Loader } from "semantic-ui-react";
import styled from "styled-components";
import ListAgentDetailProduct from "../Component/ListAgentDetailProduct/ListAgentDetailProduct";
import ListSkinDetailProduct from "../Component/ListSkinDetailProduct/ListSkinDetailProduct";
import PhotoDetailProduct from "../Component/PhotoDetailProduct/PhotoDetailProduct";
import { get, post } from "../Function/Api";
import FormatMoney from "../Function/FormatMoney";

const Container = styled.div`
  width: 100%;
  background: linear-gradient(
    18deg,
    rgba(28, 52, 173, 0.23012955182072825) 0%,
    rgba(28, 52, 173, 1) 100%
  );
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.18);

  padding: 20px;
  border-radius: 15px;

  h1 {
    text-align: center;
    margin: 0;
    height: 40px;
    font-size: 40px;
    font-weight: 600;
    margin-bottom: 25px;
  }

  .seller {
    display: flex;
    margin: 10px 5px;
  }

  .seller span {
    margin-top: 10px;
    padding-left: 10px;
  }

  .seller span .item:nth-child(1) {
    font-weight: 600;
    font-size: 16px;
  }

  .seller span .item:nth-child(2) {
    display: flex;
    margin-top: -5px;
    font-size: 12px;
  }
`;
const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  overflow-x: hidden;

  h2 {
    font-weight: 500;
    padding: 5px 0 10px 0;
  }

  h5 {
    font-weight: 400;
  }

  @media only screen and (max-width: 1000px) {
    display: grid;
    grid-template-columns: 1fr;
    gap: 10px;
    .header {
      font-size: 30px;
      margin-bottom: 10px;
    }
  }
`;

const ContentRight = styled.div`
  padding: 0 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;

  h3 {
    margin-bottom: 7px;
    font-weight: bold;
  }
`;

const ContainerButton = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
  margin: 0 auto;
  margin-bottom: 80px;
  margin-top: 20px;

  .button {
    background-color: #1935c2;
    color: #dcddde;
  }

  .button:nth-child(4) {
    background: linear-gradient(
      18deg,
      rgba(28, 52, 173, 0.23012955182072825) 0%,
      rgba(28, 52, 173, 1) 100%
    );
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    color: #dcddde;
    height: 45px;
  }

  .fade:not(.show) {
    opacity: 1;
  }

  :nth-child(4) {
    grid-column: 1/4;
  }
`;

export default function DetailProduct() {
  const id = useParams().id;
  const [data, setData] = useState({});
  const [dataSeller, setDataSeller] = useState({});
  const [idSeller, setIdSeller] = useState(false);
  const [cookies] = useCookies();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const NavigateTo = (to) => {
    navigate(to);
  };
  useEffect(() => {
    get(`/accountDetail/${id}`)
      .then((response) => {
        setData(response.data);
        setIdSeller(response.data.idSeller);
        setLoading(false);
      })
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    if (idSeller) {
      post(`/sellerData`, { _id: idSeller })
        .then((response) => {
          setDataSeller(response.data);
        })
        .catch((error) => console.error(error));
    }
  }, [idSeller]);

  return (
    <Container>
      <h1>Valorant Account</h1>
      {loading ? (
        <Loader
          style={{ marginTop: 50 }}
          active
          inline="centered"
          size="huge"
        />
      ) : (
        <Content>
          <div>
            <PhotoDetailProduct data={data?.photo ? data.photo : []} />
            <div className="seller">
              <Image
                className="pp-seller"
                src={
                  dataSeller.photo !== undefined
                    ? dataSeller.photo
                    : "https://react.semantic-ui.com/images/wireframe/image.png"
                }
                size="tiny"
              />{" "}
              <span>
                <List.Item>
                  <List.Content>{dataSeller.sellerName}</List.Content>
                </List.Item>
                <List.Item>
                  <div className="status">
                    {/* {online ? (
                    <>
                      <Icon name="circle" color="green" size="small" />
                      Online
                    </>
                  ) : (
                    <> */}
                    <Moment
                      className="RightChat"
                      style={{ textAlign: "end", paddingLeft: 10 }}
                      toNow
                    >
                      {dataSeller.lastOnline}
                    </Moment>
                    {/* </> */}
                    {/* )} */}
                  </div>
                </List.Item>
              </span>
            </div>
            <ContainerButton>
              <Button
                animated="vertical"
                disabled={cookies.Cr787980 === undefined ? true : false}
                onClick={() => NavigateTo("/")}
              >
                <Button.Content hidden>Favorite</Button.Content>
                <Button.Content visible>
                  <Icon name="favorite" />
                </Button.Content>
              </Button>
              <Button
                animated="vertical"
                disabled={cookies.Cr787980 === undefined ? true : false}
              >
                <Button.Content hidden>Chat</Button.Content>
                <Button.Content visible>
                  <Icon name="chat" />
                </Button.Content>
              </Button>
              <Button animated="vertical">
                <Button.Content hidden>Share</Button.Content>
                <Button.Content visible>
                  <Icon name="share alternate" />
                </Button.Content>
              </Button>
              {data.status && (
                <Button
                  animated="fade"
                  onClick={() =>
                    cookies.Cr787980 !== undefined
                      ? NavigateTo(`/detailproduk${id}/payment`)
                      : NavigateTo(`/sign-in`)
                  }
                >
                  <Button.Content visible>Buy Account</Button.Content>
                  <Button.Content hidden>
                    <Icon name="shopping cart" />
                  </Button.Content>
                </Button>
              )}
            </ContainerButton>
          </div>
          <ContentRight>
            <div className="description">
              <h3>{data.header}</h3>
              <h2>
                <FormatMoney money={data.price} />{" "}
              </h2>
              <h5>Email Status: {data.emailStatus}</h5>
              <h5>Region: {data.region}</h5>
              <h5>Change Name Status: Available</h5>
              <h5>Total VP: {data.totalVP} VP</h5>
              <h5>Rank: {data.rank}</h5>
              <h5>Battlepass: {data.battlepass}</h5>
              <h5>Level: {data.level}</h5>
              <h5>Reason to Sell: {data.reason}</h5>
              {data.agent && (
                <>
                  <ListAgentDetailProduct data={data.agent} />
                  <ListSkinDetailProduct data={data.skin} game={data.game} />
                </>
              )}
            </div>
          </ContentRight>
        </Content>
      )}
    </Container>
  );
}
