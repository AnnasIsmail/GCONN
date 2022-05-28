import React from "react";
import { Carousel } from 'react-bootstrap';
import { Icon, Image } from 'semantic-ui-react';
import './PhotoDetailProduct.css';

function PhotoDetailProduct(props){
    const sourceImage = props.data;

    const [index, setIndex] = React.useState(0);
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };

    const slide =(to)=>{
        if(to === 'left'){
            document.getElementById('containerPhotoDetailProduct').scrollLeft += -40;
        }
        else{
            document.getElementById('containerPhotoDetailProduct').scrollLeft += 40;
        }
    }

    return(
        <div className="photo-detail-product">
            <Carousel activeIndex={index} onSelect={handleSelect} indicators={false} interval={null} >
                {sourceImage.map((src , index)=>{
                    return(
                <Carousel.Item key={index}>
                    <img className="d-block w-100" src={src} alt="First slide"/>
                </Carousel.Item>
                )})}
            </Carousel>
            <div className="container-control-container-photo-detail-product">
                <Icon link size='huge' onClick={()=>slide('left')} name="caret left" />
                <div id="containerPhotoDetailProduct" className="container-photo-detail-product">
                    {sourceImage.map((src , index)=>{
                        return(<Image key={index} src={src} size='small' onClick={()=>{
                            handleSelect(index);
                        }} />)
                    })}
                </div>
                <Icon link size='huge' onClick={()=>slide('right')} name="caret right" />
            </div>
        </div>
    )
}

export default PhotoDetailProduct;