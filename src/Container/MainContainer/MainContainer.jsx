import React from "react";
import ChooseGameSell from "../../Component/ChooseGameSell/ChooseGameSell";
import Filter from "../../Component/Filter/Filter";
import PhotoCarousel from '../../Component/PhotoCarousel/PhotoCarousel';
import SignIn from "../../Component/SignIn/SignIn";
import SignUp from "../../Component/SignUp/SignUp";
import AvailableGameContainer from '../AvailableGameContainer/AvailableGameContainer';
import DetailProductContainer from "../DetailProductContainer/DetailProductContainer";
import MyProfileContainer from "../MyProfileContainer/MyProfileContainer";
import MyStoreContainer from "../MyStoreContainer/MyStoreContainer";
import PaymentContainer from "../PaymentContainer/PaymentContainer";
import ProdukContainer from "../ProdukContainer/ProdukContainer";
import SellAccountContainer from "../SellAccountContainer/SellAccountContainer";
import UpdateGameContainer from "../UpdateGameContainer/UpdateGameContainer";
import './MainContainer.css';

function MainContainer(props){
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
                <Filter />
                <div className="container-market-main-container">
                    <ProdukContainer name='Valorant' />
                </div>
            </div>
            : (props.additionalClass === 'favorite-main-container')?
            <div className={`main-container ${props.additionalClass}`}>
                    <ProdukContainer name='Valorant' />
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
            :(props.additionalClass === 'my-profile-main-container')?
            <div className={`main-container ${props.additionalClass}`}>
                <MyProfileContainer />
            </div>
            :(props.additionalClass === 'choose-game-sell-main-container')?
            <div className={`main-container ${props.additionalClass}`}>
                <ChooseGameSell />
            </div>
            :(props.additionalClass === 'sell-account-main-container')?
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