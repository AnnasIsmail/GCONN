import moment from "moment";
import { useContext, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import Moment from "react-moment";
import { useNavigate, useParams } from "react-router-dom";
import {
  Button,
  Dropdown,
  Image,
  List,
  Loader,
  Message,
} from "semantic-ui-react";
import styled from "styled-components";
import Product from "../Component/Product";
import { get, post } from "../Function/Api";
import { Context } from "../Function/Context";
import FormatMoney from "../Function/FormatMoney";
import checkSRCPhoto from "../Function/checkSRCPhoto";

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
  margin: 25px 5px;

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
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState(false);
  const [dataSeller, setDataSeller] = useState({});
  const [idSeller, setIdSeller] = useState(false);
  const [error, setError] = useState(false);
  const [payment, setPayment] = useState("Please Choose Payment");
  if (!context.login && !context.user) {
    navigateTo("/");
  }

  useEffect(() => {
    get(`/account/${id}`, "main")
      .then((response) => {
        setProduct(response.data);
        setIdSeller(response.data.idSeller);
        setDataSeller(response.data.sellerData);
      })
      .catch((error) => console.error(error));
  }, []);

  const createTransaction = () => {
    setLoading(true);
    setError(false);
    const paymentMethods = {
      "Permata Virtual Account": "permata",
      "BCA Virtual Account": "bca",
      "BNI Virtual Account": "bni",
      "BRI Virtual Account": "bri",
      "Mandiri Bill Payment": "mandiri",
    };
    const paymentMethod = paymentMethods[payment];
    if (!paymentMethod) {
      return setError(true);
    }
    const dateTime = moment().format("DD/MM/YYYY HH:mm:ss");
    const dataPayment = {
      idUser: context.user._id,
      idSeller,
      idAccount: id,
      dateTime,
      status: "Waiting For Payment",
      namePayment: payment,
      paymentMethod,
      totalTransaction: product.price,
    };
    post("transaction/create", dataPayment, "main", {
      authorization: cookies.token,
    })
      .then((res) => {
        setLoading(false);
        if (res.data[0]) {
          navigateTo(`/detail-transaction${res.data[0]._id}`);
        }
      })
      .catch(() => {
        setLoading(false);
      });
  };

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
            {error && (
              <Message negative>
                <Message.Header>Please Choose Payment Method</Message.Header>
              </Message>
            )}
            <Dropdown
              minCharacters
              error={error}
              clearable
              closeOnChange
              options={PaymentType}
              onChange={(e) => {
                if (e._reactName === "onClick") {
                  setPayment(e.target.innerText);
                  setError(false);
                } else {
                  setError(true);
                }
              }}
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
              onClick={createTransaction}
              loading={loading}
            >
              <Button.Content visible>Check Out</Button.Content>
              {payment === "Please Choose Payment" || payment === "" ? (
                <Button.Content hidden>Please Choose Payment</Button.Content>
              ) : (
                <Button.Content hidden>
                  <FormatMoney money={product.price} /> with {payment}
                </Button.Content>
              )}
            </Button>
          </PaymentTypeComponent>
        </Content>
      )}
    </Container>
  );
}
