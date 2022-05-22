import React from "react";
import Produk from "../../Component/Produk/Produk";
import gambarValorant from './assets/1.png';
import './ProdukContainer.css';

function ProdukContainer(props){
    return(
        <div className="produk-container">
                <Produk src={gambarValorant} header='AKUN MURAH MERIAH butuh uang dan spek laptop tidak memadai' price='650.000' />
                <Produk src={gambarValorant} header='AKUN MURAH MERIAH butuh uang dan spek laptop tidak memadai' price='650.000' />
                <Produk src={gambarValorant} header='AKUN MURAH MERIAH butuh uang dan spek laptop tidak memadai' price='650.000' />
                <Produk src={gambarValorant} header='AKUN MURAH MERIAH butuh uang dan spek laptop tidak memadai' price='650.000' />
                <Produk src={gambarValorant} header='AKUN MURAH MERIAH butuh uang dan spek laptop tidak memadai' price='650.000' />
                <Produk src={gambarValorant} header='AKUN MURAH MERIAH butuh uang dan spek laptop tidak memadai' price='650.000' />
                <Produk src={gambarValorant} header='AKUN MURAH MERIAH butuh uang dan spek laptop tidak memadai' price='650.000' />

            {/* <Pagination
                defaultActivePage={1}
                firstItem={null}
                lastItem={null}
                pointing
                secondary
                totalPages={10}
            /> */}
            
        </div>
    )
}

export default ProdukContainer;