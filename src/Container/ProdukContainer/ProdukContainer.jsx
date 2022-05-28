import React from "react";
import Produk from "../../Component/Produk/Produk";
import './ProdukContainer.css';

function ProdukContainer(props){
    
    let account = {};
    let [content , setContent] = React.useState();

    React.useEffect(()=>{
        fetch('http://localhost:8000/account')
        .then((response) => response.json())
        .then((res)=>{
            account = res
            load();
        });
    },[]);

    
    function load(){
        setContent(
        account.map((data , index)=>{
            return <Produk key={index} src={data.photo[0]} game={data.game} header={data.header} price={data.price} id={data.id} />
        })
        );
    }
    
    return(
        <div className="produk-container">
            {content}

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