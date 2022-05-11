import React from "react";
import { Button, Card } from 'react-bootstrap';
import { Icon } from 'semantic-ui-react';
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
                    <Button variant="primary"><Icon name="favorite" /></Button>
                    <Button variant="primary"><Icon name="chat" /></Button>
                    <Button variant="primary"><Icon name="share alternate" /></Button>
                </div>
            </Card.Body>
        </Card>
             </div>
    );
}

export default Produk;