import React from "react";
import { Pagination } from 'semantic-ui-react';
import Produk from "../../Component/Produk/Produk";
import './ProdukContainer.css';

function ProdukContainer(props){
    return(
        <div className="produk-container">
            <h1 className="name-produk-container">{props.name}</h1>
            <div className="container-produk-container">
                <Produk  />
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