import React from "react";
import Produk from "../../Component/Produk/Produk";
import './ProdukContainer.css';

function ProdukContainer(props){
    return(
        <div className="produk-container">
            <h1 className="name-produk-container">{props.name}</h1>
            <div className="container-produk-container">
                <Produk />
            </div>
        </div>
    )
}

export default ProdukContainer;