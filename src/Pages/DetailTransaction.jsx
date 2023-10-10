import { Icon } from "@iconify/react";
import React, { useContext, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Loader, Segment } from "semantic-ui-react";
import styled from "styled-components";
import ActionDetailTransaction from "../Component/ActionDetailTransaction";
import CountdownTimer from "../Component/CountdownTimer";
import Product from "../Component/Product";
import { get } from "../Function/Api";
import { Context } from "../Function/Context";
import copyTextToClipboard from "../Function/copyTextClipboard";

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
const Content = styled.div`
  margin-top: 15px;
`;
const Text = styled.span`
  margin: 10px 0;
  display: flex;
  justify-content: space-between;
  gap: 10px;
`;
export default function DetailTransaction() {
  const { context, updateContextValue } = useContext(Context);
  const navigate = useNavigate();
  const navigateTo = (to) => navigate(to);
  const [cookies, setCookie, removeCookie] = useCookies();
  const [transaction, setTransaction] = useState({});
  const [isSeller, setIsSeller] = useState(false);
  const [status, setStatus] = useState(null);
  const { id } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!context.login && !context.user) {
      navigateTo("/");
    }
  });

  const setAllData = (data) => {
    setLoading(false);
    setTransaction(data);
    setIsSeller(data.idSeller === context.user._id);
    setStatus(data.status);
  };

  useEffect(() => {
    get(`transaction/${id}`, "main", { authorization: cookies.token }).then(
      (res) => {
        setAllData(res.data);
      }
    );
  }, []);

  return (
    <Container>
      <Header>Detail Transaction</Header>
      {loading ? (
        <div style={{ display: "flex", alignItems: "center", height: 350 }}>
          <Loader
            style={{ margin: "auto" }}
            active
            inline="centered"
            size="huge"
          />
        </div>
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
            data={transaction.accountData}
            footer={false}
          />
          {(transaction.status === "Waiting For Payment" &&
            transaction.response_midtrans.payment_type === "bank_transfer") ||
            (transaction.response_midtrans.payment_type === "echannel" && (
              <Segment
                raised
                style={{
                  background: `linear-gradient(18deg,rgba(28, 52, 173, 0.23012955182072825) 0%,rgba(28, 52, 173, 1) 100%)`,
                }}
              >
                <Text>
                  Complete Payment in
                  <h4>
                    <CountdownTimer
                      time={transaction.response_midtrans.expiry_time}
                    />
                  </h4>
                </Text>
                {transaction.paymentMethod === "Mandiri Bill Payment" ? (
                  <>
                    <Text>
                      <span>
                        Biller Code
                        <h5>{transaction.response_midtrans.biller_code}</h5>
                      </span>
                      <Button
                        onClick={() =>
                          copyTextToClipboard(
                            transaction.response_midtrans.biller_code
                          )
                        }
                        inverted
                      >
                        <h5>
                          Copy <Icon icon="fluent:copy-16-regular" />
                        </h5>
                      </Button>
                    </Text>
                    <Text>
                      <span>
                        Bill Key
                        <h5>{transaction.response_midtrans.bill_key}</h5>
                      </span>
                      <Button
                        onClick={() =>
                          copyTextToClipboard(
                            transaction.response_midtrans.bill_key
                          )
                        }
                        inverted
                      >
                        <h5>
                          Copy <Icon icon="fluent:copy-16-regular" />
                        </h5>
                      </Button>
                    </Text>
                  </>
                ) : (
                  <Text>
                    <span>
                      Virtual Account Number
                      <h5>
                        {transaction.response_midtrans.va_numbers[0].va_number}
                      </h5>
                    </span>
                    <Button
                      onClick={() =>
                        copyTextToClipboard(
                          transaction.response_midtrans.va_numbers[0].va_number
                        )
                      }
                      inverted
                    >
                      <h5>
                        Copy <Icon icon="fluent:copy-16-regular" />
                      </h5>
                    </Button>
                  </Text>
                )}
              </Segment>
            ))}
          <Text>
            Transaction ID:
            <h5>{transaction.response_midtrans.order_id}</h5>
          </Text>
          <Text>
            Status:
            <h5>{transaction.status}</h5>
          </Text>
          <Text>
            Payment Type:
            <h5>{transaction.paymentMethod}</h5>
          </Text>
          <Text>
            Customer: <h5>{transaction.user.fullName}</h5>
          </Text>
          <Text>
            Store:
            <h5>{transaction.seller.sellerName}</h5>
          </Text>
          <ActionDetailTransaction
            isSeller={isSeller}
            status={status}
            id={id}
            setAllData={setAllData}
          />
        </Content>
      )}
    </Container>
  );
}
