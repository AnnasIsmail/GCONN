import React from "react";
import ListAgentDetailProduct from "../../Component/ListAgentDetailProduct/ListAgentDetailProduct";
import ListSkinDetailProduct from "../../Component/ListSkinDetailProduct/ListSkinDetailProduct";
import PhotoDetailProduct from "../../Component/PhotoDetailProduct/PhotoDetailProduct";
import './DetailProductContainer.css';

function DetailProductContainer(){
    return(
        <>
            <div className="tab-left">
                <PhotoDetailProduct />
                <ListSkinDetailProduct />
            </div>
            <div className="tab-right">
                <h3>AKUN MURAH MERIAH butuh uang dan spek laptop tidak memadai</h3>
                <h2>Rp. 2.000.000.00</h2>
                <h5>Email Status: Verifed</h5>
                <h5>Region: Asia</h5>
                <h5>Change Name Status: Available</h5>
                <h5>Total VP: 22.500 VP</h5>
                <h5>Rank: Gold 2</h5>
                <ListAgentDetailProduct />
            </div>
        </>
    );  
}

export default DetailProductContainer;