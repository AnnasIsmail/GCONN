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
            console.log(account);
            load();
        });
    },[]);

    
    function load(){
        setContent(
        account.map((data , index)=>{
            return <Produk src={data.photo[0]} header={data.header} price='650.000' />
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