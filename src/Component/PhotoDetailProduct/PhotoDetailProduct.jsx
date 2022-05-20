import React from "react";
import { Icon, Image } from 'semantic-ui-react';
import coba1 from "./assets/coba1.png";
import coba2 from "./assets/coba2.png";
import coba3 from "./assets/coba3.png";
import './PhotoDetailProduct.css';

function PhotoDetailProduct(){
    const sourceImage = [coba1 , coba2 , coba3 , coba2 , coba3 , coba2 , coba3];
    const [sourcePreview , setSourcePreview]  = React.useState(sourceImage[1])
    return(
        <div className="photo-detail-product">
            <Image size='huge' src={sourcePreview} />
            <div className="container-control-container-photo-detail-product">
                <Icon link size='huge' name="caret left" />
                <div className="container-photo-detail-product">
                    {sourceImage.map((src , index)=>{
                        return(<Image key={index} src={src} size='small' onClick={()=>{
                            setSourcePreview(src);
                        }} />)
                    })}
                </div>
                <Icon link size='huge' name="caret right" />
            </div>
        </div>
    )
}

export default PhotoDetailProduct;