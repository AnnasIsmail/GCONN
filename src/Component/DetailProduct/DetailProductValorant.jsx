import React from "react";
import { useNavigate, useParams } from 'react-router-dom';
import { Button, Icon, Image, List } from 'semantic-ui-react';
import ListAgentDetailProduct from "../ListAgentDetailProduct/ListAgentDetailProduct";
import ListSkinDetailProduct from "../ListSkinDetailProduct/ListSkinDetailProduct";
import PhotoDetailProduct from "../PhotoDetailProduct/PhotoDetailProduct";
import './DetailProduct.css';


function DetailProductValorant(props){

    const navigasi = useNavigate();        
    const NavigateTo =(to)=>{
        navigasi(to)
    }

    let data = props.data
    let { id } = useParams();
    console.log(id)
    return(
        <>
            <h1 className="header">Valorant Account</h1>
            <div className="content-detail-product-container">
                <div className="tab-left">
                    <PhotoDetailProduct data={data.photo} />
                    <div className="seller">
                        <Image className="pp-seller" src={"https://cdn.discordapp.com/attachments/955023472931799041/962880645355434024/IMG_9897.png"} size='tiny' />{' '}
                        <span>
                            <List.Item>
                                <List.Content>Ancelma</List.Content>
                            </List.Item>
                            <List.Item>
                                <List.Icon name="circle" color='green' />
                                <List.Content>Online</List.Content>
                            </List.Item>
                        </span>
                    </div>
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
                        <Button animated='fade' onClick={()=>NavigateTo(`/detailproduk${id}/payment`)}>
                            <Button.Content visible>Buy Account</Button.Content>
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
                        <h5><b>Email Status:</b> {data.emailStatus}</h5>
                        <h5><b>Region:</b> {data.region}</h5>
                        <h5><b>Change Name Status:</b> Available</h5>
                        <h5><b>Total VP:</b> {data.totalVP} VP</h5>
                        <h5><b>Rank:</b> {data.rank}</h5>
                        <h5><b>Level:</b> {data.level}</h5>
                        <h5><b>Reason to Sell:</b> {data.reason}</h5>
                        <ListAgentDetailProduct data={data.agent} />
                        <ListSkinDetailProduct data={data.skin} game={data.game} />
                    </div>       
                </div>
            </div>
        </>
    );
}

export default DetailProductValorant;