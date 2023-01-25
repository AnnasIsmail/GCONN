import React from "react";
import { Card } from 'react-bootstrap';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import { Button, Icon, Loader } from 'semantic-ui-react';
import FormatMoney from "../../Function/FormatMoney";

function ProductChat(props){
    const navigasi = useNavigate();
    let [like , setLike] = React.useState(props.like)
    const [cookies, setCookie, removeCookie] = useCookies();
    const [product , setProduct] = React.useState();
    const [loading , setLoading] = React.useState(true);
    const NavigateTo =(to)=>{
        navigasi(to)
    }
    function navigateToDetail(){
        if(props.click !== false){
            NavigateTo(`/detailproduk${props.id}`);
        }
    }

    function clickFavorite(){
        if(like !== true){
            fetch(`https://gconn-api-node-js.vercel.app/favoritesAdd`, {
                method: 'POST',
                body: JSON.stringify({
                  idUser: cookies.Cr787980,
                  idAccount: props.id
                }),
                headers: {
                  'Content-type': 'application/json; charset=UTF-8',
                },
              }).then(()=>setLike(true))
        }else{
            fetch(`https://gconn-api-node-js.vercel.app/favoritesDelete`, {
                method: 'POST',
                body: JSON.stringify({
                  id: props.likeId,
                }),
                headers: {
                  'Content-type': 'application/json; charset=UTF-8',
                },
            }).then(()=>setLike(false))
              
        }
    
    }
   
    React.useEffect(()=>{
        // console.log(props.id)
        if(props.id !== undefined){
            fetch(`https://gconn-api-node-js.vercel.app/accountDetail/${props.id}`)
            .then((response) => response.json())
            .then((res)=>{
                setLoading(false);
                if(res.status === 200){
                    setProduct(res.data);
                }else{
                    setProduct({
                        photo: [
                            "https://react.semantic-ui.com/images/wireframe/image.png"
                        ],
                        header: 'Account Not Found.',
                        game: '',
                        price: 0,
                    });
                }
                // console.log(res.data);
            });
        }
    },[]);

    return(
        <span className="produk produk-chat" >
            {(loading)?
                <Loader style={{ marginTop: 130 }} active inline='centered' size="huge" />
            :
            (product)?
            <>
                <Card style={{ width: '18rem' }} onClick={navigateToDetail}>
                    <Card.Img variant="top" src={product.photo[0]} className='foto-produk' id="fotoProduk" />
                    <Card.Body>
                        <Card.Text>{product.header}</Card.Text>
                        <Card.Subtitle>{product.game}</Card.Subtitle>
                        <Card.Title><FormatMoney money={product.price} /> </Card.Title>
                    </Card.Body>
                </Card>
                <div className="button-container  edit-product">
                    <Button animated='vertical' onClick={(product.game !== '')&&clickFavorite} disabled={(product.game === '')&&true} >
                        <Button.Content className={(like === true)? 'like': ''} hidden>Favorite</Button.Content>
                        <Button.Content visible>
                            <Icon inverted color={(like === true)? 'yellow': 'grey'} name='favorite' />
                        </Button.Content>
                    </Button>
                    <Button animated='vertical' disabled={(product.game === '')&&true}>
                        <Button.Content hidden>Share</Button.Content>
                        <Button.Content visible>
                            <Icon inverted color='grey' name='share alternate' />
                        </Button.Content>
                    </Button>
                </div>
            </>
            :
            <>
            </>
            
            }
            
        </span>
    );
}

export default ProductChat;