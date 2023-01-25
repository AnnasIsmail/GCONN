import React from "react";
import { useCookies } from 'react-cookie';
import Moment from 'react-moment';
import { useNavigate, useParams } from 'react-router-dom';
import { Button, Icon, Image, List } from 'semantic-ui-react';
import { SocketIO } from "../../App";
import FormatMoney from "../../Function/FormatMoney";
import ListAgentDetailProduct from "../ListAgentDetailProduct/ListAgentDetailProduct";
import ListSkinDetailProduct from "../ListSkinDetailProduct/ListSkinDetailProduct";
import PhotoDetailProduct from "../PhotoDetailProduct/PhotoDetailProduct";
import './DetailProduct.css';


function DetailProductValorant(props){

    const [cookies, setCookie, removeCookie] = useCookies();
    const navigasi = useNavigate();        
    const NavigateTo =(to)=>{
        navigasi(to)
    }
    const socket = React.useRef(React.useContext(SocketIO));
    const [ online , setOnline ] = React.useState(false);
    let [dataSeller , setDataSeller] = React.useState({});

    React.useEffect(()=>{
        fetch(`https://gconn-api-node-js.vercel.app/sellerData`, {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({_id: props.data.idSeller}),
        })
        .then((response) => response.json())
        .then((res)=>{
                // console.log(res.data)
                setDataSeller(res.data)
        });

    },[]);

    React.useEffect(()=>{
            socket.current.emit("getUsers");
            socket.current.on("getUsers", (data) => {
            const checkOnline = data.filter((dataFind) => dataFind.idUser === dataSeller.idUser);
            if(checkOnline.length > 0){
                setOnline(true);
            }
        });

    },[dataSeller]);

    let data = props.data
    let { id } = useParams();
    return(
        <>
            <h1 className="header">Valorant Account</h1>
            <div className="content-detail-product-container">
                <div className="tab-left">
                    <PhotoDetailProduct data={data.photo} />
                    <div className="seller">
                        <Image className="pp-seller" src={(dataSeller.photo !== undefined)? dataSeller.photo : "https://react.semantic-ui.com/images/wireframe/image.png"} size='tiny' />{' '}
                        <span>
                            <List.Item>
                                <List.Content>{dataSeller.sellerName}</List.Content>
                            </List.Item>
                            <List.Item>
                                <div className='status'>
                                    {(online)?
                                        <>
                                            <Icon name="circle" color='green' size='small' />
                                            Online
                                        </>
                                    :
                                        <>
                                            <Moment className='RightChat' style={{ textAlign: 'end', paddingLeft: 10 }} toNow>
                                                {dataSeller.lastOnline}
                                            </Moment>
                                        </>
                                    }
                                </div>
                            </List.Item>
                        </span>
                    </div>
                    {(cookies.Cr787980 !== dataSeller.idUser)?
                        <div className="button-container">
                            <Button animated='vertical' disabled={(cookies.Cr787980 === undefined)?true:false} onClick={()=>NavigateTo('/')}>
                                <Button.Content hidden>Favorite</Button.Content>
                                <Button.Content visible>
                                    <Icon name='favorite' />
                                </Button.Content>
                            </Button>
                            <Button animated='vertical' disabled={(cookies.Cr787980 === undefined)?true:false} >
                                <Button.Content hidden>Chat</Button.Content>
                                <Button.Content visible>
                                    <Icon name='chat' />
                                </Button.Content>
                            </Button>
                            <Button animated='vertical' disabled={(cookies.Cr787980 === undefined)?true:false} >
                                <Button.Content hidden>Share</Button.Content>
                                <Button.Content visible>
                                    <Icon name='share alternate' />
                                </Button.Content>
                            </Button>
                            {(props.data.status)&&
                                <Button animated='fade' onClick={()=>(cookies.Cr787980 !== undefined)?NavigateTo(`/detailproduk${id}/payment`):NavigateTo(`/sign-in`)}>
                                    <Button.Content visible>Buy Account</Button.Content>
                                    <Button.Content hidden>
                                        <Icon name='shopping cart' />
                                    </Button.Content>
                                </Button>
                            }
                        </div>
                    :
                    <div className="button-container">
                            <div></div>
                            <div></div>
                            <div></div>
                            <Button animated='fade'>
                                <Button.Content visible>Share</Button.Content>
                                <Button.Content hidden>
                                    <Icon name='share alternate' />
                                </Button.Content>
                            </Button>
                        </div>
                    }
                </div>
                <div className="tab-right">
                    <div className="description">
                        <h3>{data.header}</h3>
                        <h2><FormatMoney money={data.price} /> </h2>
                        <h5>Email Status: {data.emailStatus}</h5>
                        <h5>Region: {data.region}</h5>
                        <h5>Change Name Status: Available</h5>
                        <h5>Total VP: {data.totalVP} VP</h5>
                        <h5>Rank: {data.rank}</h5>
                        <h5>Battlepass: {data.battlepass}</h5>
                        <h5>Level: {data.level}</h5>
                        <h5>Reason to Sell: {data.reason}</h5>
                        <ListAgentDetailProduct data={data.agent} />
                        <ListSkinDetailProduct data={data.skin} game={data.game} />
                    </div>       
                </div>
            </div>
        </>
    );
}

export default DetailProductValorant;