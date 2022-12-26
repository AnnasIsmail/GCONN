import React from "react";
import { useLocation } from 'react-router-dom';
import ChooseGameSell from "../../Component/ChooseGameSell/ChooseGameSell";
import Filter from "../../Component/Filter/Filter";
import PhotoCarousel from '../../Component/PhotoCarousel/PhotoCarousel';
import SignIn from "../../Component/SignIn/SignIn";
import SignUp from "../../Component/SignUp/SignUp";
import AvailableGameContainer from '../AvailableGameContainer/AvailableGameContainer';
import BillContainer from "../BillContainer/BillContainer";
import DetailProductContainer from "../DetailProductContainer/DetailProductContainer";
import MyProfileContainer from "../MyProfileContainer/MyProfileContainer";
import MyStoreContainer from "../MyStoreContainer/MyStoreContainer";
import PaymentContainer from "../PaymentContainer/PaymentContainer";
import ProdukContainer from "../ProdukContainer/ProdukContainer";
import ProdukFilterContainer from "../ProdukContainer/ProdukFilterContainer";
import SellAccountContainer from "../SellAccountContainer/SellAccountContainer";
import UpdateGameContainer from "../UpdateGameContainer/UpdateGameContainer";
import './MainContainer.css';

let data = {
    region: '',
    changeNameStatus: '',
    rank: '',
    game: '',
    skin: '',
    agent: '',
    priceMin: 0,
    priceMax: 0,
    sortBy: '',
    search:''
  }

function MainContainer(props){

    const pathName = useLocation().pathname;
    const [ dataFilter , setDataFilter] = React.useState(false)

    React.useEffect(()=>{
        if(pathName !== '/market'){
            setDataFilter(false);
        }
    })

    function rangePrice(v , minPrice , maxPrice){
        if(parseInt(v.price) >= minPrice && parseInt(v.price) <= maxPrice){
            return v
        }else if(isNaN(minPrice)  && parseInt(v.price) <= maxPrice || isNaN(minPrice) && maxPrice === 0){
            return v
        }else if(parseInt(v.price) >= minPrice && isNaN(maxPrice) || parseInt(v.price) >= minPrice && maxPrice === 0 ){
            return v
        }else if(isNaN(minPrice) && isNaN(maxPrice) ){
            return v
        }
    }

    function filter(v){
        setDataFilter(false);
        data = v;

        fetch('https://gconn-api-node-js.vercel.app/accountsFilter', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(v),
            }) 
        .then((response) => response.json())
            .then((json)=>{
                const filterData = json.data.filter((data)=>rangePrice(data , v.priceMin , v.priceMax))
                const inputSearchTextField = document.getElementById('inputSearchTextField').value;

                if(v.sortBy === 'New'){
                    
                }else if(v.sortBy === 'Highest Price'){
                    filterData.sort((a , b)=> parseInt(b.price) - parseInt(a.price));
                }else if(v.sortBy === 'Lowest Price'){
                    filterData.sort((a , b)=> parseInt(a.price) - parseInt(b.price));
                }else {
                    filterData.sort(() => Math.random() - 0.5)
                }

                let dataToSet = filterData

                if(inputSearchTextField != ''){
                    dataToSet = filterData.filter((data) => data.header.toLowerCase().includes(inputSearchTextField.toLowerCase()))
                }

                setDataFilter(dataToSet);
            })

    }

    return(
        <>
            {
            (props.additionalClass === 'home-main-container')?
            <div className={`main-container ${props.additionalClass}`}>
                <PhotoCarousel />
                <UpdateGameContainer />
                <AvailableGameContainer />
            </div>
            : (props.additionalClass === 'market-main-container')?
            <div className={`main-container ${props.additionalClass}`}>
                <Filter sendData={filter} dataFilter={dataFilter} />
                <input type="hidden" hidden id="searchMarket" onClick={()=>filter(data)} />
                <div className="container-market-main-container">
                    {(dataFilter)?
                        <ProdukFilterContainer dataFilter={dataFilter} page={props.additionalClass} />
                    :
                        <ProdukContainer page={props.additionalClass} />
                    }
                </div>
            </div>
            : (props.additionalClass === 'favorite-main-container')?
            <div className={`main-container market-main-container ${props.additionalClass}`}>
                <ProdukContainer page={props.additionalClass} />
            </div>
            : (props.additionalClass === 'my-store-main-container')?
            <div className={`main-container ${props.additionalClass}`}>
                <MyStoreContainer />
            </div>
            :(props.additionalClass === 'detail-product-main-container')?
            <div className={`main-container ${props.additionalClass}`}>
                <DetailProductContainer />
            </div>
            :(props.additionalClass === 'payment-main-container')?
            <div className={`main-container ${props.additionalClass}`}>
                <PaymentContainer />
            </div>
            :(props.additionalClass === 'bill-main-container')?
            <div className={`main-container ${props.additionalClass}`}>
                <BillContainer />
            </div>        
            :(props.additionalClass === 'my-profile-main-container')?
            <div className={`main-container ${props.additionalClass}`}>
                <MyProfileContainer />
            </div>
            :(props.additionalClass === 'choose-game-sell-main-container')?
            <div className={`main-container ${props.additionalClass}`}>
                <ChooseGameSell />
            </div>
            :(props.additionalClass === 'sell-account-main-container' || props.additionalClass === 'edit-account-main-container')?
            <div className={`main-container ${props.additionalClass}`}>
                <SellAccountContainer />
            </div>
            :(props.additionalClass === 'sign-in-main-container')?
            <div className={`main-container ${props.additionalClass}`}>
                <SignIn />
                <UpdateGameContainer />
            </div>
            : (props.additionalClass === 'sign-up-main-container')?
            <div className={`main-container ${props.additionalClass}`}>
                <SignUp />
                <UpdateGameContainer />
            </div>
            :
            <>
            
            </>
            }
        </>
    );
}

export default MainContainer;