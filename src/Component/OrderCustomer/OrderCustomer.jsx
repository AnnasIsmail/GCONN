import React from "react";
import { Image } from 'semantic-ui-react';
import './OrderCustomer.css';

function OrderCustomer(){
    return(
        <div className="order-customer">
            <div className="tab-left">
                <Image className="photo-produk" src="https://cdn.discordapp.com/attachments/830080342026092566/978567591654207508/coba1.png" alt="" />
            </div>
            <div className="tab-right">
                <div className="content">
                    <h5><b>Nama Pembeli: </b>Joko Santoso</h5>
                    <h5><b>Nama Produk: </b>AKUN MURAH MERIAH butuh uang dan spek laptop tidak memadai</h5>
                    <h5><b>Nomor Transaksi: </b>TR00192638367</h5>
                    <h5><b>Status Transaksi: </b>Menunggu Konfirmasi Penjual</h5>
                    <h5><b>Jumlah Transaksi: </b>Rp. 650.000.00</h5>
                </div>
                <div className="container-button">
                    <button>Cancel</button>
                    <button>Accept</button>
                </div>
            </div>
        </div>
    );
}

export default OrderCustomer;
