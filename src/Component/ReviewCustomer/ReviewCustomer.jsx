import React from "react";
import { Image, Rating } from 'semantic-ui-react';
import './ReviewCustomer.css';

function ReviewCustomer(){
    return(
        <div className="review-customer">
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
                    <h5><b>Date Transaksi: </b> 13 May 2022</h5>
                    <h5><b>Rating: </b><Rating icon='star' defaultRating={3} maxRating={5} size='huge'/></h5>
                    <h5><b>Comment: </b>  Akun sesuai deskripsi tetapi hanya kurang update rank saja sudah turun dari gold ke silver</h5>
                </div>
            </div>
        </div>
    );
}

export default ReviewCustomer;