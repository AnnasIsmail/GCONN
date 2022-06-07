import React from "react";
import { Item } from 'semantic-ui-react';
import './OrderCustomer.css';

function OrderCustomer(){

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
            <Item.Header as='a'>selena thunder, kof aurora, stun chou(wr kecil bs di up)</Item.Header>
            <Item.Meta>Valorant</Item.Meta>
            <Item.Description>
                <h5><b>Nomor Transaksi: </b>TR00192638367</h5>
                <h5><b>Nama Pembeli: </b>Joko Santoso</h5>
                <h5><b>Transaction Date: </b> 2 December 2021</h5>
                <h5><b>Status Transaksi: </b>Menunggu Konfirmasi Penjual</h5>
                <h5><b>Jumlah Transaksi: </b>Rp. 650.000.00</h5>
            </Item.Description>
            <Item.Extra>
                <button>Detail Product</button>
                <button>Cancel</button>
                <button>Accept</button>
                <button>Detail Transaction</button>
            </Item.Extra>
          </Item.Content>
        </Item>
      </Item.Group>
    );
}

export default OrderCustomer;
