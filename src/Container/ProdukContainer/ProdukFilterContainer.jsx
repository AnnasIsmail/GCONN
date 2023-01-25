import React from "react";
import { useCookies } from 'react-cookie';
import Produk from "../../Component/Produk/Produk";
import './ProdukContainer.css';

let account = {};
let allAccount = [] ;
let allFavorite = [] ;

function ProdukFilterContainer(props){
    
    const [cookies, setCookie, removeCookie] = useCookies();
    let [content , setContent] = React.useState();
    let footer = props.footer

    React.useEffect(()=>{

        function fetchData(){   
            // account = props.account;
            // allAccount = props.allAccount;
            // allFavorite = props.allFavorite;
            // console.log(account);
            // display()

            fetch(`https://gconn-api-node-js.vercel.app/accounts`)
            .then((response) => response.json())
            .then((res)=>{
                account = res.data;
                allAccount = res.data;

                fetch(`https://gconn-api-node-js.vercel.app/favorites/${cookies.Cr787980}`)
                    .then((response) => response.json())
                    .then((res)=>{
                        allFavorite = res.data;
                    }).then(()=>{
                        display();
                    })

            })
        }

        function setDataFilter(){
            // account = props.dataFilter;
            // allAccount = props.dataFilter;
            // allFavorite = props.allFavorite;
            // console.log('masuk')

            // console.log(allAccount);
            // display()
            
            
            fetch(`https://gconn-api-node-js.vercel.app/favorites/${cookies.Cr787980}`)
                    .then((response) => response.json())
                    .then((res)=>{
                        account = props.dataFilter;
                        allAccount = props.dataFilter;
                        allFavorite = res.data;
                        // console.log('masuk');
                    }).then(()=>{
                        display();
                    })
        }

        function display(){
            if(props.page === 'market-main-container'){
                load();
                let dataResult = [];

                allAccount.map((data , index)=>{
                    if(data.idSeller !== cookies.Cr787980){
                        let favorite = allFavorite.find((index)=>index.idAccount == data._id)
                        if(favorite !== undefined){
                            data.likeId = favorite._id
                            data.like = true;
                        }
                        dataResult.push(data); 
                    }
                    account = dataResult;
                    load();
                });
            }else if(props.page === 'favorite-main-container'){
                let dataResult = [];
                    allFavorite.map((favor , index)=>{
                        let account = allAccount.find((data)=>data._id == favor.idAccount)
                        account.like = true;
                        account.likeId = favor._id
                        dataResult.push(account); 

                    });
                    account = dataResult;
                    load();
            }else if(props.page === 'my-product'){
                footer = props.footer
                if(props.data !== undefined){
                    account = props.data;
                    load();
                }
            }
        }

        if(props.dataFilter){
            setDataFilter()
        }else{
            fetchData()
        }
    },[]);

    function load(){
        setContent(
        account.map((data , index)=>{
            return <Produk goToChat={(data)=>props.goToChat(data)} idSeller={data.idSeller} key={index} src={data.photo[0]} game={data.game} header={data.header} price={data.price} id={data._id} footer={footer} like={data.like} likeId={data.likeId} />
        })
        );
    }
    
    return(
        <div className="produk-container">
            {content}
        </div>
    )
}

export default ProdukFilterContainer;