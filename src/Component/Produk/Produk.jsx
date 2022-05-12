import React from "react";
import { Card } from 'react-bootstrap';
import { Button, Icon } from 'semantic-ui-react';
import './Produk.css';

function Produk(props){
    return(
        <div className="produk">
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.src} />
            <Card.Body>
                <Card.Title>{props.header}</Card.Title>
                <Card.Text>{props.price}</Card.Text>
                <div className="button-container">
                <Button animated='vertical'>
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
            </Card.Body>
        </Card>
             </div>
    );
}

export default Produk;