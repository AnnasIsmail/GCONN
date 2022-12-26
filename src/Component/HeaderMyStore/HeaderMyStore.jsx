import React from "react";
import { useLocation } from 'react-router-dom';
import { Header } from 'semantic-ui-react';
import FormatMoney from "../../Function/FormatMoney";
import ModalCashOut from "../ModalEdit/ModalCashOut";
import ModalEditStore from "../ModalEdit/ModalEditMyStore";
import ModalEditProfile from "../ModalEdit/ModalEditProfile";
import './HeaderMyStore.css';

function HeaderMyStore(props){
    const location = useLocation();
    let sellerName = "";
    if(location.pathname === '/mystore'){
        sellerName = props.seller.sellerName;
    }
    return(
        (sellerName === "" && location.pathname === '/mystore')?
            <ModalEditStore seller={props.seller} setOpen={true} closeOnDimmerClick={false} closeButton={false} />
        :
        <div className="header-my-store">
        {(props.pageEdit === 'profile' || localStorage.sellerName !== "")?
            <Header as='h2' icon textAlign='center'>
                <img src={props.src} alt="" />
                <Header.Content>{props.StoreName} {(props.pageEdit === "profile")? <ModalEditProfile profile={props.profile} /> : <ModalEditStore seller={props.seller} setOpen={false} closeOnDimmerClick={false} closeButton={false} /> }</Header.Content>
                <span className="slogan">"{props.slogan}"</span>
                <br className="slogan"/>
                <span style={{ textAlign: 'start', display: 'flex', justifyContent: 'center', gap: 10 }} ><b>Balance</b>: <FormatMoney money={props.balance} /> <ModalCashOut seller={props.seller} balance={props.balance} setOpen={false} closeOnDimmerClick={false} closeButton={false} /> </span>
            </Header>
        :
        <ModalEditStore setOpen={true} closeOnDimmerClick={true} closeButton={true} />
        }
      </div>
    );
}

export default HeaderMyStore;