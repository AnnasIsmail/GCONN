import React from "react";
import { Label } from 'semantic-ui-react';
import './ListAgentDetailProduct.css';

function ListAgentDetailProduct(){
    return(
        <div className="list-skin-detail-product">
            <h4>Agent</h4>
            <div className="container-list-skin-detail-product agent">
                <Label as='a'>
                    <img src='https://media.valorant-api.com/agents/dade69b4-4f5a-8528-247b-219e5a1facd6/displayiconsmall.png' />
                    Brimstone``
                </Label> 
                <Label as='a'>
                    <img src='https://media.valorant-api.com/agents/dade69b4-4f5a-8528-247b-219e5a1facd6/displayiconsmall.png' />
                    Fade
                </Label> 
                <Label as='a'>
                    <img src='https://media.valorant-api.com/agents/dade69b4-4f5a-8528-247b-219e5a1facd6/displayiconsmall.png' />
                    Fade
                </Label> 
                <Label as='a'>
                    <img src='https://media.valorant-api.com/agents/dade69b4-4f5a-8528-247b-219e5a1facd6/displayiconsmall.png' />
                    Fade
                </Label> 
                <Label as='a'>
                    <img src='https://media.valorant-api.com/agents/dade69b4-4f5a-8528-247b-219e5a1facd6/displayiconsmall.png' />
                    Fade
                </Label> 
                <Label as='a'>
                    <img src='https://media.valorant-api.com/agents/dade69b4-4f5a-8528-247b-219e5a1facd6/displayiconsmall.png' />
                    Fade
                </Label> 
            </div>
        </div>
    );
}

export default ListAgentDetailProduct;