import React from "react";
import { Item } from 'semantic-ui-react';
import FormatMoney from "../../Function/FormatMoney";
import './SettingUpAnAccount.css';

function SettingUpAnAccount(props){
    let [sizeImage , setSizeImage] = React.useState('medium')
    let [dataAccount , setDataAccount] = React.useState({});
    let [dataSeller , setDataSeller] = React.useState({});
    let [srcImage , setSrcImage] = React.useState()

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

        fetch(`https://api-gconn.herokuapp.com/seller?id=${props.data.idSeller}`)
        .then((response) => response.json())
        .then((res)=>{
            res.map((data,index)=>{
                setDataSeller(data);
            })
        })

        fetch(`https://api-gconn.herokuapp.com/account?id=${props.data.idAccount}`)
        .then((response) => response.json())
        .then((res)=>{
            res.map((data,index)=>{
                setDataAccount(data);
                setSrcImage(data.photo[0])
            })
        })

    },[])

    return(
        <Item.Group className="order-customer">
        <Item>
          <Item.Image className="img" size={sizeImage} src={srcImage} />
    
          <Item.Content>
            <Item.Header as='a'>{dataAccount.header}</Item.Header>
            <Item.Meta>{dataAccount.game}</Item.Meta>
            <Item.Description>
                <h5><b>Store Name: </b>{dataSeller.sellerName}</h5>
                <h5><b>Transaction Date: </b> {props.data.date}</h5>
                <h5><b>Status: </b> {props.data.status}</h5>
                <h5><b>Payment Method: </b> {props.data.paymentMethod}</h5>
                <h5><b>Total Payment: </b><FormatMoney money={props.data.totalTransaction} /> </h5>
            </Item.Description>
            <Item.Extra>
                <button>Cancel Transaction</button>
                <button>Tanya Penjual</button>
            </Item.Extra>
          </Item.Content>
        </Item>
      </Item.Group>
    );
}

export default SettingUpAnAccount;