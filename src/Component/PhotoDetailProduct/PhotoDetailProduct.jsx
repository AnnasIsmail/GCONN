import React from "react";
import { Image, Transition } from 'semantic-ui-react';
import coba1 from "./assets/coba1.png";
import coba2 from "./assets/coba2.png";
import coba3 from "./assets/coba3.png";
import './PhotoDetailProduct.css';

function PhotoDetailProduct(){
    const sourceImage = [coba1 , coba2 , coba3];
    const sourcePreview = React.useState(source[1])
    const [visible , setVisible] = React.useState(false);
    return(
        <div className="photo-detail-product">
            <Transition visible={true} animation='fly up' duration={300}>
                <Image size='small' src={coba1} />
            </Transition>
            <div className="container-photo-detail-produk">
                {sourceImage.map}
            </div>
        </div>
    )
}

export default PhotoDetailProduct;