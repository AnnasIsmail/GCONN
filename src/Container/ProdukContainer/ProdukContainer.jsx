import React from "react";
import Produk from "../../Component/Produk/Produk";
import './ProdukContainer.css';

function ProdukContainer(props){
    
    let [content , setContent] = React.useState();
    let account = {};
    let footer = props.footer
    let allAccount ;
    let allFavorite;
    
    // React.useEffect(()=>{
    //     fetch(`http://localhost:8000/account`)
    //     .then((response) => response.json())
    //     .then((res)=>{
    //         account = res
    //         load();
    //     });
    // },[]);

    React.useEffect(()=>{

        function fetchData(){
            fetch(`http://localhost:8000/account`)
            .then((response) => response.json())
            .then((res)=>{
                allAccount = res
            }).then(()=>{
                fetch(`http://localhost:8000/favorite?idUser=${localStorage.userId}`)
                .then((response) => response.json())
                .then((res)=>{
                    allFavorite = res
                }).then(()=>{
                    display();
                })
            })
        }

        function display(){
            if(props.page === 'market-main-container'){
                    let dataResult = [];
                    allAccount.map((data , index)=>{
                        if(data.idSeller !== parseInt(localStorage.userId)){
                            let favorite = allFavorite.find((index)=>index.idAccount == data.id)
                            if(favorite !== undefined){
                                data.likeId = favorite.id
                                data.like = true;
                            }
                            dataResult.push(data); 
                        }
                        account = dataResult
                        load();
                    });
            }else if(props.page === 'favorite-main-container'){
                let dataResult = [];
                    allFavorite.map((data , index)=>{
                        let account = allAccount.find((index)=>index.id == data.idAccount)
                        account.like = true;
                        account.likeId = data.id
                        dataResult.push(account); 
                    });
                    account = dataResult
                    load();
            }else if(props.page === 'my-product'){
                footer = props.footer
                if(props.data !== undefined){
                    account = props.data;
                    load();
                }
            }
        }

        fetchData()
    },[]);


    
    function load(){
        setContent(
        account.map((data , index)=>{
            return <Produk key={index} src={data.photo[0]} game={data.game} header={data.header} price={data.price} id={data.id} footer={footer} like={data.like} likeId={data.likeId} />
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