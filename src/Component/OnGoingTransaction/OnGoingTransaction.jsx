import React from "react";
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import { Item } from 'semantic-ui-react';
import { SocketIO } from "../../App";
import FormatMoney from "../../Function/FormatMoney";
import './OnGoingTransaction.css';

function OnGoingTransaction(props){

    let [sizeImage , setSizeImage] = React.useState('medium')
    let [dataAccount , setDataAccount] = React.useState({});
    let [srcImage , setSrcImage] = React.useState()
    const navigasi = useNavigate();
    const [cookies, setCookie, removeCookie] = useCookies();
    const socket = React.useRef(React.useContext(SocketIO));
    
    const NavigateTo =(to)=>{
        navigasi(to)
    }

    function goToChat(){
        fetch(`https://gconn-api-node-js.vercel.app/addChat`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                myID: props.data.idUser,
                idSeller: props.data.idSeller,
                transactionID: props.data._id
            })
        })
        .then((response) => response.json())
        .then((json) => {
            let data = {};

            if(json.statusData === 'new'){
                data = json.data[0]._id
            }else{
                data = json.data._id
            }
            
            socket.current.emit("goToDirectMessage", json);
        });   
    }

    React.useEffect(()=>{

        if(window.innerWidth <= 1050){
            setSizeImage('medium')
        }else{
            setSizeImage('large')
        }
        
        window.addEventListener('resize', (event) => {

            if(window.innerWidth <= 1050){
                setSizeImage('medium')
            }else{
                setSizeImage('large')
            }
        });


        fetch(`https://gconn-api-node-js.vercel.app/accountDetail/${props.data.idAccount}`)
        .then((response) => response.json())
        .then((res)=>{
                setDataAccount(res.data);
                setSrcImage(res.data.photo[0])
        });

    },[])

    return(
        <Item.Group className="order-customer">
        <Item>
          <Item.Image className="img" size={sizeImage} src={srcImage} />
          <Item.Content>
            <Item.Header as='a'>{dataAccount.header}</Item.Header>
            <Item.Meta>{dataAccount.game}</Item.Meta>
            <Item.Description>
                <h5><b>Transaction ID: </b>{props.data.response_midtrans.order_id}</h5>
                <h5><b>Transaction Date: </b> {props.data.dateTime}</h5>
                <h5><b>Status: </b> {props.data.status}</h5>
                <h5><b>Payment Method: </b> {props.data.paymentMethod}</h5>
                <h5><b>Total Payment: </b><FormatMoney money={props.data.totalTransaction} /> </h5>
            </Item.Description>
            <Item.Extra>
                <button onClick={goToChat}>Chat Seller</button>
                <button onClick={()=>NavigateTo(`/detaiTransaksi${props.data._id}`)}>Detail Transaction</button>
            </Item.Extra>
          </Item.Content>
        </Item>
      </Item.Group>
    )
}

export default OnGoingTransaction;