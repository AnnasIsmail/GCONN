import React from "react";
import Filter from "../../Component/Filter/Filter";
import PhotoCarousel from '../../Component/PhotoCarousel/PhotoCarousel';
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
            </div>
            :
            <>
            
            </>
            }
        </>
    );
}

export default MainContainer;