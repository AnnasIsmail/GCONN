import React from "react";
import Filter from "../../Component/Filter/Filter";
import PhotoCarousel from '../../Component/PhotoCarousel/PhotoCarousel';
import SignIn from "../../Component/SignIn/SignIn";
import AvailableGameContainer from '../AvailableGameContainer/AvailableGameContainer';
import ProdukContainer from "../ProdukContainer/ProdukContainer";
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
                <ProdukContainer name='Valorant' />
                <ProdukContainer name='Valorant' />
                <ProdukContainer name='Valorant' />
            </div>
            : (props.additionalClass === 'sign-in-main-container')?
            <div className={`main-container ${props.additionalClass}`}>
                <SignIn />
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