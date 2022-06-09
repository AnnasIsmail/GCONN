import React from "react";
import { Item, Rating } from 'semantic-ui-react';
import './ReviewCustomer.css';

function ReviewCustomer(props){

    let [sizeImage , setSizeImage] = React.useState('medium')
    let [dataAccount , setDataAccount] = React.useState({});
    let [dataCustomer , setDataCustomer] = React.useState({});
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

        fetch(`http://localhost:8000/users?id=${props.data.idUser}`)
        .then((response) => response.json())
        .then((res)=>{
            res.map((data,index)=>{
                setDataCustomer(data);
            })
        })

        fetch(`http://localhost:8000/account?id=${props.data.idAccount}`)
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
                    <h5><b>Nomor Transaksi: </b> {props.data.noTransaction}</h5>
                    <h5><b>Nama Pembeli: </b> {dataCustomer.fullName}</h5>
                    <h5><b>Transaction Date: </b> {props.data.date}</h5>
                    <h5><b>Status Transaksi: </b> {props.data.status}</h5>
                    <h5><b>Rating: </b><Rating icon='star' defaultRating={props.data.rating} maxRating={5} size='huge' disabled/></h5>
                </Item.Description>
            </Item.Content>
            </Item>
        </Item.Group>                                                 
    );
}

export default ReviewCustomer;