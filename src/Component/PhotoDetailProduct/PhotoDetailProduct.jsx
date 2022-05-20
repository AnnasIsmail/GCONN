import React from "react";
import { Image, Transition } from 'semantic-ui-react';
import coba1 from "./assets/coba1.png";
import coba2 from "./assets/coba2.png";
import coba3 from "./assets/coba3.png";
import './PhotoDetailProduct.css';

function PhotoDetailProduct(){
    const sourceImage = [coba1 , coba2 , coba3];
    const [sourcePreview , setSourcePreview]  = React.useState(sourceImage[1])
    const [visible , setVisible] = React.useState(false);
    return(
        <div className="photo-detail-product">
            <Transition visible={true} animation='fly up' duration={300}>
                <Image size='big' src={sourcePreview} />
            </Transition>
            <div className="container-photo-detail-product">
                {sourceImage.map((src , index)=>{
                    return(<Image key={index} src={src} size='small' onClick={()=>setSourcePreview(src)} />)
                })}
            </div>
        </div>
    )
}

export default PhotoDetailProduct;