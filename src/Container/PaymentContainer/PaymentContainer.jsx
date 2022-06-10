import React from "react";
import { useParams } from 'react-router-dom';
import { Button, Dropdown, Image, List } from 'semantic-ui-react';
import Produk from "../../Component/Produk/Produk";
import FormatMoney from "../../Function/FormatMoney";
import './PaymentContainer.css';

function PaymentContainer(){

    let account = {};
    let { id } = useParams();
    let [DataSeller , setDataSeler]  = React.useState({});
    let dataSeller   = {};
    let [totalPayment , setTotalPayment] = React.useState(0)
    let [produk , setProduk] = React.useState(
        "Mohon pilih produk terlebih dahulu di halaman market"
    )

    
    React.useEffect(()=>{
        fetch(`http://localhost:8000/account?id=${id}`)
        .then((response) => response.json())
        .then((res)=>{
            account = res;
            load();
        });

    },[]);

    function load(){

        account.map((data , index)=>{
            fetch(`http://localhost:8000/seller?id=${data.idSeller}`)
            .then((response) => response.json())
            .then((res)=>{
                res.map((data , index)=>{
                    dataSeller = data;
                    setDataSeler(data);
                })
            }).
            then(()=>{
                setProduk(
                    account.map((data , index)=>{
                        setTotalPayment(data.price)
                        return(
                            <div key={index}>
                            <Produk  src={data.photo[0]} game={data.game} header={data.header} price={data.price} id={data.id} footer={false} click={false} />
                            <div className="seller">
                                <Image className="pp-seller" src={(dataSeller.photo !== undefined)? dataSeller.photo : "https://react.semantic-ui.com/images/wireframe/image.png"} size='tiny' />{' '}
                                <span>
                                    <List.Item>
                                        <List.Content>{dataSeller.sellerName}</List.Content>
                                    </List.Item>
                                    <List.Item>
                                        <List.Icon name="circle" color='green' />
                                        <List.Content>Online</List.Content>
                                    </List.Item>
                                </span>
                            </div>
                            </div>
                        );
                    })
                )
            })
        })
    }

    const PaymentType = [
        { key: 1, text: 'Gopay', value: 'Gopay' },
        { key: 2, text: 'OVO', value: 'OVO' },
        { key: 3, text: 'LinkAja', value: 'LinkAja' },
        { key: 4, text: 'Transfer Bank', value: 'Transfer Bank' },
        { key: 5, text: 'Brimo', value: 'Brimo' },
        { key: 6, text: 'Virtual Account', value: 'Virtual Account' },
        { key: 7, text: 'Jenius Pay', value: 'Jenius Pay' },
        { key: 8, text: 'Go Pay Later', value: 'Go Pay Later' },
        { key: 9, text: 'Credit Card', value: 'Credit Card' },
      ]
      
      const [payment , setPayment] = React.useState('Please Choose Payment');
      const getPaymentMethod =(event , data)=>{
        setPayment(data.value)
      }

      function checkOutPayment(){
          let date = new Date()
          console.log(payment)
        if(payment !== "" && payment !== "Please Choose Payment"){

            fetch('http://localhost:8000/transaction', {
                method: 'POST',
                body: JSON.stringify({
                    "noTransaction": `TR${Date.now()}`,
                    "idSeller": DataSeller.id,
                    "idUser": parseInt(localStorage.userId),
                    "idAccount": parseInt(id),
                    "date": `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`,
                    "totalTransaction": totalPayment,
                    "status": "Waiting For Payment",
                    "paymentMethod": payment,
                    "rating": 0,
                    "comment": ""
                }),
                headers: {
                  'Content-type': 'application/json; charset=UTF-8',
                },
              })
        }
      }

    return(
        <div className="payment-container">
            <h1 className="header">Payment</h1>
            <div className="content-payment-container">
                    {produk}
                    <h6>Choose Payment Type</h6>
                    <Dropdown clearable options={PaymentType} onChange={getPaymentMethod} selection placeholder="None" />
                    <Button onClick={checkOutPayment} animated='fade'>
                        <Button.Content visible>Check Out</Button.Content>
                        <Button.Content hidden>RP. <FormatMoney money={totalPayment} /> with {payment}</Button.Content>
                    </Button>
            </div>
        </div>
    )
}

export default PaymentContainer;