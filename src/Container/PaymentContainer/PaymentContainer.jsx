import React from "react";
import { useParams } from 'react-router-dom';
import { Button, Dropdown } from 'semantic-ui-react';
import Produk from "../../Component/Produk/Produk";
import './PaymentContainer.css';

function PaymentContainer(){

    let account = {};
    let { id } = useParams();
    console.log(id)
    let [produk , setProduk] = React.useState(
        "Mohon pilih produk terlebih dahulu di halaman market"
    )

    React.useEffect(()=>{
        fetch(`http://localhost:8000/account?id=${id}`)
        .then((response) => response.json())
        .then((res)=>{
            account = res
            load();
        });
    },[]);

    function load(){
        setProduk(
            account.map((data , index)=>{
                return <Produk key={index} src={data.photo[0]} game={data.game} header={data.header} price={data.price} id={data.id} footer={false} />
            })
        )
    }

    const PaymentType = [
        { key: 1, text: 'Gopay', value: 'Gopay' },
        { key: 2, text: 'OVO', value: 'OVO' },
        { key: 3, text: 'LinkAja', value: 'LinkAja' },
        { key: 4, text: 'Transfer Bank', value: 'Transfer Bank' },
        { key: 5, text: 'Brimo', value: 'Brimo' },
        { key: 6, text: 'Virtual Account', value: 'Virtual Account' },
        { key: 7, text: 'Jenius Pay', value: 'Jenius Pay' },
        { key: 8, text: 'GoPayLater', value: 'GoPayLater' },
        { key: 9, text: 'Credit Card', value: 'Credit Card' },
      ]
      
      const [payment , setPayment] = React.useState('Please Choose Payment');
      const getPaymentMethod =(event , data)=>{
        setPayment(data.value)
      }

    return(
        <div className="payment-container">
            <h1 className="header">Payment</h1>
            <div className="content-payment-container">
                    {produk}
                    <h6>Choose Payment Type</h6>
                    <Dropdown clearable options={PaymentType} onChange={getPaymentMethod} selection placeholder="None" />
                    <Button animated='fade'>
                        <Button.Content visible>Check Out</Button.Content>
                        <Button.Content hidden>RP. 650.000 with {payment}</Button.Content>
                    </Button>
            </div>
        </div>
    )
}

export default PaymentContainer;