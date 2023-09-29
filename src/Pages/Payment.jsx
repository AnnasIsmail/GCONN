import { useContext, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import Moment from "react-moment";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Dropdown, Image, List, Loader } from "semantic-ui-react";
import styled from "styled-components";
import Product from "../Component/Product";
import { get } from "../Function/Api";
import { Context } from "../Function/Context";
import FormatMoney from "../Function/FormatMoney";
import checkSRCPhoto from "../Function/checkSRCPhoto";
import getSellerData from "../Function/getSellerData";

const Container = styled.div`
  background: linear-gradient(
    18deg,
    rgba(28, 52, 173, 0.23012955182072825) 0%,
    rgba(28, 52, 173, 1) 100%
  );
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  min-height: 350px;
  border-radius: 15px;
  padding: 10px 20px 20px 20px;
  max-width: 600px;
  margin: auto;
`;
const Header = styled.h1`
  text-align: center;
  margin: 0;
  height: 40px;
  font-size: 35px;
  font-weight: 600;
`;
const LoadingContainer = styled.div`
  display: flex;
  align-items: center;
  height: 350px;
`;
const Content = styled.div`
  margin-top: 15px;
`;
const Seller = styled.div`
  display: flex;
  margin: 10px 5px;

  span {
    margin-top: 10px;
    padding-left: 10px;
  }

  span .item:nth-child(1) {
    font-weight: 600;
    font-size: 16px;
  }

  span .item:nth-child(2) {
    display: flex;
    margin-top: -5px;
    font-size: 12px;
  }
`;
const PaymentTypeComponent = styled.div`
  display: grid;
`;

const PaymentType = [
  // { key: 1, text: 'Gopay', value: 'Gopay' },
  // { key: 2, text: 'OVO', value: 'OVO' },
  // { key: 3, text: 'LinkAja', value: 'LinkAja' },
  // { key: 4, text: 'Transfer Bank', value: 'Transfer Bank' },
  // { key: 5, text: 'Brimo', value: 'Brimo' },
  // { key: 6, text: 'Virtual Account', value: 'Virtual Account' },
  // { key: 7, text: 'Jenius Pay', value: 'Jenius Pay' },
  // { key: 8, text: 'Go Pay Later', value: 'Go Pay Later' },
  // { key: 9, text: 'Credit Card', value: 'Credit Card' },
  {
    key: "Permata Virtual Account",
    text: "Permata Virtual Account",
    value: "Permata Virtual Account",
  },
  {
    key: "BCA Virtual Account",
    text: "BCA Virtual Account",
    value: "BCA Virtual Account",
  },
  {
    key: "Mandiri Bill Payment",
    text: "Mandiri Bill Payment",
    value: "Mandiri Bill Payment",
  },
  {
    key: "BNI Virtual Account",
    text: "BNI Virtual Account",
    value: "BNI Virtual Account",
  },
  {
    key: "BRI Virtual Account",
    text: "BRI Virtual Account",
    value: "BRI Virtual Account",
  },
];
export default function Payment() {
  const { context, updateContextValue } = useContext(Context);
  const [cookies] = useCookies();
  const navigate = useNavigate();
  const { id } = useParams();
  const navigateTo = (to) => navigate(to);
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState(false);
  const [dataSeller, setDataSeller] = useState({});
  const [idSeller, setIdSeller] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("Please Choose Payment");
  if (!context.login && !context.user) {
    navigateTo("/");
  }

  useEffect(() => {
    get(`/accountDetail/${id}`, "main")
      .then((response) => {
        setProduct(response.data);
        setIdSeller(response.data.idSeller);
      })
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    if (idSeller) {
      getSellerData(idSeller, cookies.token)
        .then((response) => {
          setDataSeller(response);
        })
        .catch((error) => console.error(error));
    }
  }, [idSeller]);

  return (
    <Container>
      <Header>Payment</Header>
      {!product ? (
        <LoadingContainer>
          <Loader
            style={{ margin: "auto" }}
            active
            inline="centered"
            size="huge"
          />
        </LoadingContainer>
      ) : (
        <Content>
          <Product
            style={{
              borderRadius: "10px",
              overflow: "hidden",
              margin: "auto",
              padding: "20px",
              paddingBottom: 0,
              backgroundColor: "#1c34ad",
            }}
            data={product}
            footer={false}
          />
          <Seller>
            <Image
              className="pp-seller"
              src={checkSRCPhoto(dataSeller.photo)}
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
          </Seller>
          <PaymentTypeComponent>
            <h6>Choose Payment Type</h6>
            <Dropdown
              clearable
              options={PaymentType}
              onChange={(e) => setPaymentMethod(e.target.innerText)}
              selection
              placeholder="None"
            />
            <p
              style={{
                margin: 0,
                marginTop: 13,
                marginBottom: 5,
                display: "flex",
                gap: 6,
                justifyContent: "space-between",
              }}
            >
              Total Payment:
              <h5>
                <FormatMoney money={product.price} />
              </h5>
            </p>
            <Button
              animated="fade"
              style={{ opacity: 1, backgroundColor: "#1935c2", color: "white" }}
            >
              <Button.Content visible>Check Out</Button.Content>
              {paymentMethod === "Please Choose Payment" ||
              paymentMethod === "" ? (
                <Button.Content hidden>Please Choose Payment</Button.Content>
              ) : (
                <Button.Content hidden>
                  <FormatMoney money={product.price} /> with {paymentMethod}
                </Button.Content>
              )}
            </Button>
          </PaymentTypeComponent>
        </Content>
      )}
    </Container>
  );
}
