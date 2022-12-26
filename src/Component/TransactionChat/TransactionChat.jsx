import React from "react";
import Moment from 'react-moment';
import { useNavigate } from 'react-router-dom';
import { Button, Card, Loader } from 'semantic-ui-react';
import FormatMoney from "../../Function/FormatMoney";
import './TransactionChat.css';

// let account;
export default function TransactionChat(props){

    const [transaction , setTransaction] = React.useState();
    const [account , setAccount] = React.useState();
    const [loading , setLoading] = React.useState(true);
    const navigasi = useNavigate();
    const NavigateTo =(to)=>{
        navigasi(to)
    }

    function getTransaction(){
        fetch(`https://gconn-api-node-js.vercel.app/getTransaction/${props.id}`)
        .then((response) => response.json())
        .then((res)=>{
            setTransaction(res.data);
            fetch(`https://gconn-api-node-js.vercel.app/accountDetail/${res.data.idAccount}`)
            .then((response) => response.json())
            .then((res)=>{
                setAccount(res.data)
                setLoading(false)
            });
        });
    }


    React.useEffect(()=> {
        getTransaction();
    },[])

    return(
        <div className="transaction-chat">
            {(loading)?
                <Loader style={{ margin: 'auto' }} active inline='centered' size="huge" />
            :
                <Card className="transaction-chat" style={{ width: 350 }}>
                <Card.Content>
                    <Card.Header>{account.header}</Card.Header>
                    <Card.Meta><Moment local>{transaction.dateTime}</Moment></Card.Meta>
                    <Card.Description>
                        <b>Transaction ID:</b> {transaction.response_midtrans.order_id}
                        <br />
                        <b>Transaction Status: </b> {transaction.status}
                        <br />
                        <b>Payment Method: </b> {transaction.paymentMethod}
                        <br />
                        <b>Total Payment: </b><FormatMoney money={transaction.totalTransaction} /> 
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <div className='ui two buttons'>
                    <Button basic onClick={()=>NavigateTo(`/detaiTransaksi${transaction._id}`)} color='blue'>
                        Detail Transaction
                    </Button>
                    </div>
                </Card.Content>
                </Card>
            }
        </div>
    );
}