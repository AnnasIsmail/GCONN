import React from "react";
import Produk from "../../Component/Produk/Produk";
import './ProdukContainer.css';

function ProdukContainer(props){
    
    let [content , setContent] = React.useState();
    let account = {};
    let footer = props.footer
    
    // React.useEffect(()=>{
    //     fetch(`http://localhost:8000/account`)
    //     .then((response) => response.json())
    //     .then((res)=>{
    //         account = res
    //         load();
    //     });
    // },[]);

    React.useEffect(()=>{

        if(props.page === 'market-main-container'){
            fetch(`http://localhost:8000/account`)
            .then((response) => response.json())
            .then((res)=>{
                let dataResult = [];
                res.map((data , index)=>{
                    if(data.idSeller !== parseInt(localStorage.userId)){
                        dataResult.push(data); 
                    }
                })
                account = dataResult
                console.log(dataResult)
                load();
        });
        }else if(props.page === 'favorite-main-container'){

        }else if(props.page === 'my-product'){
            footer = props.footer
            if(props.data !== undefined){
                account = props.data;
                load();
            }
        }


    },[]);


    
    function load(){
        setContent(
        account.map((data , index)=>{
            return <Produk key={index} src={data.photo[0]} game={data.game} header={data.header} price={data.price} id={data.id} footer={footer} />
        })
        );
    }
    
    return(
        <div className="produk-container">
            {content}
        </div>
    )
}

export default ProdukContainer;