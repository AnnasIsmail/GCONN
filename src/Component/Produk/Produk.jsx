import React from "react";
import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { Button, Icon } from 'semantic-ui-react';
import FormatMoney from "../../Function/FormatMoney";
import './Produk.css';

function Produk(props){
    const navigasi = useNavigate();
    let [like , setLike] = React.useState(props.like)

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
            fetch(`http://localhost:8000/favorite`, {
                method: 'POST',
                body: JSON.stringify({
                  idUser: localStorage.userId,
                  idAccount: props.id
                }),
                headers: {
                  'Content-type': 'application/json; charset=UTF-8',
                },
              }).then(()=>setLike(true))
        }else{
            fetch(`http://localhost:8000/favorite/${props.likeId}`, {
                method: 'DELETE',
            }).then(()=>setLike(false))
              
        }
    
    }
    

    return(
        <div className="produk" >
        <Card style={{ width: '18rem' }} onClick={navigateToDetail}>
            <Card.Img variant="top" src={props.src} className='foto-produk' id="fotoProduk" />
            <Card.Body>
                <Card.Text>{props.header}</Card.Text>
                <Card.Subtitle>{props.game}</Card.Subtitle>
                <Card.Title>Rp. <FormatMoney money={props.price} /> </Card.Title>
            </Card.Body>
        </Card>
            {(props.footer === false)?
            <> </>
            : (props.footer === 'edit-product')?
            <div className="button-container edit-product">
                    <Button animated='vertical'>
                        <Button.Content hidden>Edit Product</Button.Content>
                        <Button.Content visible>
                            <Icon inverted color='grey' name='pencil alternate' />
                        </Button.Content>
                    </Button>
                </div>
            :
                <div className="button-container">
                    <Button animated='vertical' onClick={clickFavorite} >
                        <Button.Content className={(like === true)? 'like': ''} hidden>Favorite</Button.Content>
                        <Button.Content visible>
                            <Icon inverted color={(like === true)? 'yellow': 'grey'} name='favorite' />
                        </Button.Content>
                    </Button>
                    <Button animated='vertical'>
                        <Button.Content hidden>Chat</Button.Content>
                        <Button.Content visible>
                            <Icon inverted color='grey' name='chat' />
                        </Button.Content>
                    </Button>
                    <Button animated='vertical'>
                        <Button.Content hidden>Share</Button.Content>
                        <Button.Content visible>
                            <Icon inverted color='grey' name='share alternate' />
                        </Button.Content>
                    </Button>
                </div>
            }
             </div>
    );
}

export default Produk;