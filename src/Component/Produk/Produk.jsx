import React from "react";
import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { Button, Icon } from 'semantic-ui-react';
import './Produk.css';

function Produk(props){
    const navigasi = useNavigate();
    
    const NavigateTo =(to)=>{
        navigasi(to)
    }
    return(
        <div className="produk" >
        <Card style={{ width: '18rem' }} onClick={()=>NavigateTo('/detailproduk')}>
            <Card.Img variant="top" src={props.src} />
            <Card.Body>
                <Card.Text>{props.header}</Card.Text>
                <Card.Title>{props.price}</Card.Title>
            </Card.Body>
        </Card>
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
                </div>
             </div>
    );
}

export default Produk;