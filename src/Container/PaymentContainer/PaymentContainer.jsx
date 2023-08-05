import React from "react";
import { useCookies } from "react-cookie";
import Moment from "react-moment";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Dropdown, Icon, Image, List, Loader } from "semantic-ui-react";
import { SocketIO } from "../../App_";
import Produk from "../../Component/Produk/Produk";
import FormatMoney from "../../Function/FormatMoney";
import "./PaymentContainer.css";

let account;
let dataSeller = {};
function PaymentContainer() {
  const navigasi = useNavigate();

  const NavigateTo = (to) => {
    navigasi(to);
  };

  const socket = React.useRef(React.useContext(SocketIO));
  const [online, setOnline] = React.useState(false);
  // let [account , setAccount] = React.useState();
  const [cookies, setCookie, removeCookie] = useCookies();
  let { id } = useParams();
  const [loading, setLoading] = React.useState(true);
  let [DataSeller, setDataSeler] = React.useState();
  let [totalPayment, setTotalPayment] = React.useState(0);
  const [goPaymentContent, setGoPaymentContent] = React.useState(false);
  let [produk, setProduk] = React.useState(
    "Mohon pilih produk terlebih dahulu di halaman market"
  );

  React.useEffect(() => {
    fetch(`https://gconn-api-node-js.vercel.app/accountDetail/${id}`)
      .then((response) => response.json())
      .then((res) => {
        // setAccount(res.data);
        account = res.data;
        load();
      });

    socket.current.on("getUsers", (data) => {
      if (dataSeller.idUser !== undefined) {
        const checkOnline = data.filter(
          (dataFind) => dataFind.idUser === dataSeller.idUser
        );
        if (checkOnline.length > 0) {
          setOnline(true);
        }
      }
    });
  }, []);

  function load() {
    fetch(`https://gconn-api-node-js.vercel.app/sellerData`, {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ _id: account.idSeller }),
    })
      .then((response) => response.json())
      .then((res) => {
        dataSeller = res.data;
        setDataSeler(res.data);
        socket.current.emit("getUsers");
      })
      .then(() => {
        setLoading(false);
        setTotalPayment(account.price);
      });
  }

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

  const [payment, setPayment] = React.useState("Please Choose Payment");
  const getPaymentMethod = (event, data) => {
    setPayment(data.value);
  };

  function goPayment() {
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

    let paymentMethod = "";
    switch (payment) {
      case "Permata Virtual Account":
        paymentMethod = "permata";
        break;
      case "BCA Virtual Account":
        paymentMethod = "bca";
        break;
      case "BNI Virtual Account":
        paymentMethod = "bni";
        break;
      case "BRI Virtual Account":
        paymentMethod = "bri";
        break;
      default:
        paymentMethod = "mandiri";
    }

    const dataPayment = {
      idUser: cookies.Cr787980,
      idSeller: dataSeller.idUser,
      idAccount: id,
      dateTime: dateTime,
      status: "",
      namePayment: payment,
      paymentMethod,
      totalTransaction: totalPayment,
      response_midtrans: "",
      credentials: {},
    };

    if (payment !== "Please Choose Payment" && payment !== "") {
      setLoading(true);
      setGoPaymentContent(true);

      fetch(`https://gconn-api-node-js.vercel.app/makePayment`, {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataPayment),
      })
        .then((response) => response.json())
        .then((res) => {
          console.log(res);

          if (res.status === 200) {
            res.data.forEach((data) =>
              NavigateTo(`/detaiTransaksi${data._id}`)
            );
          }
        });
    }
  }

  return (
    <div className="payment-container" style={{ minHeight: 350 }}>
      <h1 className="header">Payment</h1>
      {goPaymentContent ? (
        <div style={{ display: "flex", alignItems: "center", height: 350 }}>
          <Loader
            style={{ margin: "auto" }}
            active
            inline="centered"
            size="huge"
          />
        </div>
      ) : (
        <>
          <div className="content-payment-container">
            {/* {produk} */}

            {loading ? (
              <></>
            ) : (
              <div>
                <Produk
                  src={account.photo[0]}
                  game={account.game}
                  header={account.header}
                  price={account.price}
                  id={account.id}
                  footer={false}
                  click={false}
                />
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
                        {online ? (
                          <>
                            <Icon name="circle" color="green" size="small" />
                            Online
                          </>
                        ) : (
                          <>
                            <Moment
                              className="RightChat"
                              style={{ textAlign: "end", paddingLeft: 10 }}
                              toNow
                            >
                              {dataSeller.lastOnline}
                            </Moment>
                          </>
                        )}
                      </div>
                    </List.Item>
                  </span>
                </div>
              </div>
            )}

            <h6>Choose Payment Type</h6>
            <Dropdown
              clearable
              options={PaymentType}
              onChange={getPaymentMethod}
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
                <FormatMoney money={totalPayment} />
              </h5>
            </p>
            <Button animated="fade" onClick={goPayment}>
              <Button.Content visible>Check Out</Button.Content>
              {payment === "Please Choose Payment" || payment === "" ? (
                <Button.Content hidden>Please Choose Payment</Button.Content>
              ) : (
                <Button.Content hidden>
                  <FormatMoney money={totalPayment} /> with {payment}
                </Button.Content>
              )}
            </Button>
          </div>
        </>
      )}
    </div>
  );
}

export default PaymentContainer;
