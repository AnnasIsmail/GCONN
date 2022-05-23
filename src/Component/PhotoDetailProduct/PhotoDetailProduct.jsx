import React from "react";
import { Carousel } from 'react-bootstrap';
import { Icon, Image } from 'semantic-ui-react';
import coba1 from "./assets/coba1.png";
import coba2 from "./assets/coba2.png";
import coba3 from "./assets/coba3.png";
import './PhotoDetailProduct.css';

function PhotoDetailProduct(){
    const sourceImage = [coba1 , coba2 , coba3 , coba2 , coba3 , coba2 , coba3];

    const [index, setIndex] = React.useState(0);
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };

    return(
        <div className="photo-detail-product">
            {/* <Image size='huge' src={sourcePreview} /> */}
            <Carousel activeIndex={index} onSelect={handleSelect} indicators={false} interval={null} >
                {sourceImage.map((src , index)=>{
                    return(
                <Carousel.Item>
                    <img className="d-block w-100" src={src} alt="First slide"/>
                </Carousel.Item>
                )})}
            </Carousel>
            <div className="container-control-container-photo-detail-product">
                <Icon link size='huge' name="caret left" />
                <div className="container-photo-detail-product">
                    {sourceImage.map((src , index)=>{
                        return(<Image key={index} src={src} size='small' onClick={()=>{
                            handleSelect(index);
                        }} />)
                    })}
                </div>
                <Icon link size='huge' name="caret right" />
            </div>
        </div>
    )
}

export default PhotoDetailProduct;