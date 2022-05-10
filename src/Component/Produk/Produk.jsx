import React from "react";

function Produk(props){
    return(
        <div className="produk">
            <img src={props.src} alt="" />
            <h1>{props.header}</h1>
            <h3>{props.price}</h3>
        </div>
    );
}

export default Produk;