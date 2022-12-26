import React from "react";
import { Card } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import { Button, Icon } from 'semantic-ui-react';
import { SocketIO } from "../../App";
import FormatMoney from "../../Function/FormatMoney";
import './Produk.css';

function Produk(props){
    const navigasi = useNavigate();
    let [like , setLike] = React.useState(props.like)
    const [cookies, setCookie, removeCookie] = useCookies();
    const socket = React.useRef(React.useContext(SocketIO));

    const [open , setOpen] = React.useState(false);
    const [result , setResult] = React.useState(false);

    const handleConfirm = () =>{ setResult(true); setOpen(false) }
    const handleCancel = () =>{ setResult(false); setOpen(false) }

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
            console.log(props.likeId)
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
    
    function deleteProduct(){

        fetch(`https://gconn-api-node-js.vercel.app/accountDetail/${props.id}`)
        .then((response) => response.json())
        .then((json) => {
            if(json.data.idSeller !== cookies.Cr787980){
                NavigateTo('/mystore');
            }else{
                fetch(`https://gconn-api-node-js.vercel.app/accountDelete`,{
                    method: 'POST',
                    body: JSON.stringify({idDelete: props.id}),
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                    }})
                .then((response) => response.json())
                .then((json) => {
                    window.location.reload()
                });   
            }

        });  

    }

    function goToChat(){
        fetch(`https://gconn-api-node-js.vercel.app/addChat`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                myID: cookies.Cr787980,
                idSeller: props.idSeller,
                accountID: props.id
            })
        })
        .then((response) => response.json())
        .then((json) => {
            socket.current.emit("goToDirectMessage", json);
        });   
    }

    return(
        <div className="produk" >
        <Card style={{ width: '18rem' }} onClick={navigateToDetail}>
            <Card.Img variant="top" src={props.src} className='foto-produk' id="fotoProduk" />
            <Card.Body>
                <Card.Text>{props.header}</Card.Text>
                <Card.Subtitle>{props.game}</Card.Subtitle>
                <Card.Title><FormatMoney money={props.price} /> </Card.Title>
            </Card.Body>
        </Card>
            {(props.footer === false)?
            <> </>
            : (props.footer === 'edit-product')?
            <div className="button-container edit-product">
                    <Button onClick={()=> NavigateTo(`/editgamesell/${props.id}`)} animated='vertical'>
                        <Button.Content hidden>Edit Product</Button.Content>
                        <Button.Content visible>
                            <Icon inverted color='grey' name='pencil alternate' />
                        </Button.Content>
                    </Button>
                    <Button animated='vertical' onClick={() => setOpen(true)}>
                        <Button.Content hidden>Delete Product</Button.Content>
                        <Button.Content visible>
                            <Icon inverted color='grey' name='trash' />
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
                    <Button animated='vertical' onClick={goToChat}>
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
                <Modal show={open} onHide={handleCancel} id="modal">
        <Modal.Header closeButton>
          <Modal.Title>Delete Account</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete the account titled {props.header}? </Modal.Body>
        <Modal.Footer>
          <Button primary onClick={handleCancel}>
            Cancel
          </Button>
          <Button color="red" onClick={()=>deleteProduct()}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
             </div>
    );
}

export default Produk;