import React from "react";
import { useNavigate } from 'react-router-dom';
import { Button, Icon } from 'semantic-ui-react';
import ListHeroDetailProduct from "../ListHeroDetailProduct/ListHeroDetailProduct";
import PhotoDetailProduct from "../PhotoDetailProduct/PhotoDetailProduct";
import './DetailProduct.css';


function DetailProductMobileLegend(props){

    const navigasi = useNavigate();        
    const NavigateTo =(to)=>{
        navigasi(to)
    }
    let data = props.data

    return(
        <>
            <h1 className="header">Mobile Legend Account</h1>
            <div className="content-detail-product-container">
                <div className="tab-left">
                    <PhotoDetailProduct data={data.photo} />
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
                        <h3>{data.header}</h3>
                        <h2>Rp. {data.price}.00</h2>
                        <h5><b>Devices:</b> {data.device}</h5>
                        <h5><b>CN/CF:</b> {data.CNCF}</h5>
                        <h5><b>Change Name Status:</b> Available</h5>
                        <h5><b>Hero Count:</b> {data.heroCount}</h5>
                        <h5><b>Level:</b> {data.level}</h5>
                        <h5><b>Rank:</b> {data.rank}</h5>
                        <h5><b>Reason to Sell:</b> {data.reason}</h5>
                        <ListHeroDetailProduct />
                    </div>       
                </div>
            </div>
        </>
    );
}

export default DetailProductMobileLegend;