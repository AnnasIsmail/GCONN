import React from "react";
import { Pagination } from 'semantic-ui-react';
import Produk from "../../Component/Produk/Produk";
import gambarValorant from './assets/1.png';
import './ProdukContainer.css';

function ProdukContainer(props){
    return(
        <div className="produk-container">
            <h1 className="name-produk-container">{props.name}</h1>
            <div className="container-produk-container">
                <Produk src={gambarValorant} header='AKUN MURAH MERIAH butuh uang dan spek laptop tidak memadai' price='650.000' />
                <Produk src={gambarValorant} header='AKUN MURAH MERIAH butuh uang dan spek laptop tidak memadai' price='650.000' />
                <Produk src={gambarValorant} header='AKUN MURAH MERIAH butuh uang dan spek laptop tidak memadai' price='650.000' />
                <Produk src={gambarValorant} header='AKUN MURAH MERIAH butuh uang dan spek laptop tidak memadai' price='650.000' />
                <Produk src={gambarValorant} header='AKUN MURAH MERIAH butuh uang dan spek laptop tidak memadai' price='650.000' />
                <Produk src={gambarValorant} header='AKUN MURAH MERIAH butuh uang dan spek laptop tidak memadai' price='650.000' />
                <Produk src={gambarValorant} header='AKUN MURAH MERIAH butuh uang dan spek laptop tidak memadai' price='650.000' />
                <Produk src={gambarValorant} header='AKUN MURAH MERIAH butuh uang dan spek laptop tidak memadai' price='650.000' />
                <Produk src={gambarValorant} header='AKUN MURAH MERIAH butuh uang dan spek laptop tidak memadai' price='650.000' />
                <Produk src={gambarValorant} header='AKUN MURAH MERIAH butuh uang dan spek laptop tidak memadai' price='650.000' />
                <Produk src={gambarValorant} header='AKUN MURAH MERIAH butuh uang dan spek laptop tidak memadai' price='650.000' />
                <Produk src={gambarValorant} header='AKUN MURAH MERIAH butuh uang dan spek laptop tidak memadai' price='650.000' />
                <Produk src={gambarValorant} header='AKUN MURAH MERIAH butuh uang dan spek laptop tidak memadai' price='650.000' />
                <Produk src={gambarValorant} header='AKUN MURAH MERIAH butuh uang dan spek laptop tidak memadai' price='650.000' />
                <Produk src={gambarValorant} header='AKUN MURAH MERIAH butuh uang dan spek laptop tidak memadai' price='650.000' />
            </div>
            <Pagination
                boundaryRange={0}
                defaultActivePage={1}
                ellipsisItem={null}
                firstItem={null}
                lastItem={null}
                siblingRange={1}
                totalPages={10}
                onPageChange={function(event, value){console.log(value.activePage); }}
            />
            
        </div>
    )
}

export default ProdukContainer;