import React from "react";
import { Header } from 'semantic-ui-react';
import ModalEditStore from "../ModalEdit/ModalEditMyStore";
import ModalEditProfile from "../ModalEdit/ModalEditProfile";
import './HeaderMyStore.css';

function HeaderMyStore(props){
    return(
        <div className="header-my-store">
        {(props.pageEdit === 'profile' || localStorage.sellerName !== "")?
            <Header as='h2' icon textAlign='center'>
                <img src={props.src} alt="" />
                <Header.Content>{props.StoreName} {(props.pageEdit === "profile")? <ModalEditProfile /> : <ModalEditStore setOpen={false} closeOnDimmerClick={false} closeButton={false} /> }</Header.Content>
                <span>"{props.slogan}"</span>
            </Header>
        :
        <ModalEditStore setOpen={true} closeOnDimmerClick={true} closeButton={true} />
        }
      </div>
    );
}

export default HeaderMyStore;