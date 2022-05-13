import React from "react";
import { Header } from 'semantic-ui-react';
import './HeaderMyStore.css';

function HeaderMyStore(props){
    return(
        <div className="header-my-store">
            <Header as='h2' icon textAlign='center'>
                <img src={props.src} alt="" />
                <Header.Content>{props.StoreName}</Header.Content>
                <span>"{props.slogan}"</span>
            </Header>
      </div>
    );
}

export default HeaderMyStore;