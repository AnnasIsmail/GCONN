import React from "react";
import { Item, Rating } from 'semantic-ui-react';
import './ReviewCustomer.css';

function ReviewCustomer(){

    let [sizeImage , setSizeImage] = React.useState('medium')

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
    })

    return(

    <Item.Group className="order-customer">
            <Item>
            <Item.Image className="img" size={sizeImage} src='https://cdn.discordapp.com/attachments/830080342026092566/980661811357577286/unknownw.png' />
        
            <Item.Content>
                <Item.Header as='a'>AKUN MURAH MERIAH butuh uang dan spek laptop tidak memadai</Item.Header>
                <Item.Meta>Valorant</Item.Meta>
                <Item.Description>
                    <h5><b>Nama Pembeli: </b>Joko Santoso</h5>
                    <h5><b>Nomor Transaksi: </b>TR00192638367</h5>
                    <h5><b>Status Transaksi: </b> Selesai</h5>
                    <h5><b>Jumlah Transaksi: </b>Rp. 650.000.00</h5>
                    <h5><b>Date Transaksi: </b> 13 May 2022</h5>
                    <h5><b>Rating: </b><Rating icon='star' defaultRating={3} maxRating={5} size='huge' disabled/></h5>
                </Item.Description>
            </Item.Content>
            </Item>
        </Item.Group>                                                 
    );
}

export default ReviewCustomer;