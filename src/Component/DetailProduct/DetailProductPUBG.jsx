import React from "react";
import { useNavigate } from 'react-router-dom';
import { Button, Icon } from 'semantic-ui-react';
import ListAgentDetailProduct from "../ListAgentDetailProduct/ListAgentDetailProduct";
import ListSkinDetailProduct from "../ListSkinDetailProduct/ListSkinDetailProduct";
import PhotoDetailProduct from "../PhotoDetailProduct/PhotoDetailProduct";
import './DetailProduct.css';


function DetailProductPUBG(props){

    const navigasi = useNavigate();        
    const NavigateTo =(to)=>{
        navigasi(to)
    }


    return(
        <>
            <h1 className="header">Valorant Account</h1>
            <div className="content-detail-product-container">
                <div className="tab-left">
                    <PhotoDetailProduct />
                    <div className="button-container">
                        <Button animated='vertical' onClick={()=>console.log('masuk BUT')}>
                            <Button.Content hidden>Favorite</Button.Content>
                            <Button.Content visible>
                                <Icon name='favorite' />
                            </Button.Content>
                        </Button>
                        <Button animated='vertical'>
                            <Button.Content hidden>Chat</Button.Content>
                            <Button.Content visible>
                                <Icon name='chat' />
                            </Button.Content>
                        </Button>
                        <Button animated='vertical'>
                            <Button.Content hidden>Share</Button.Content>
                            <Button.Content visible>
                                <Icon name='share alternate' />
                            </Button.Content>
                        </Button>
                        <Button animated='vertical' onClick={()=>NavigateTo('/detailproduk/payment')}>
                            <Button.Content visible>Buy</Button.Content>
                            <Button.Content hidden>
                                <Icon name='shopping cart' />
                            </Button.Content>
                        </Button>
                    </div>
                </div>
                <div className="tab-right">
                    <div className="descripption">
                        <h3>AKUN MURAH MERIAH butuh uang dan spek laptop tidak memadai</h3>
                        <h2>Rp. 2.000.000.00</h2>
                        <h5><b>Email Status:</b> Verifed</h5>
                        <h5><b>Region:</b> Asia</h5>
                        <h5><b>Change Name Status:</b> Available</h5>
                        <h5><b>Total VP:</b> 22.500 VP</h5>
                        <h5><b>Rank:</b> Gold 2</h5>
                        <ListAgentDetailProduct />
                         <ListSkinDetailProduct />
                    </div>       
                </div>
            </div>
        </>
    );
}

export default DetailProductPUBG;