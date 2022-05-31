import React from "react";
import { Tab } from 'semantic-ui-react';
import HeaderMyStore from "../../Component/HeaderMyStore/HeaderMyStore";
import NoData from "../../Component/NoData/NoData";
import OrderCustomerContainer from "../OrderCustomerContainer/OrderCustomerContainer";
import ReviewCustomerContainer from "../ReviewCustomerContainer/ReviewCustomerContainer";
import image from './assets/1.png';
import './MyStoreContainer.css';

function MyStoreContainer(){

  let [myProduct , setMyProduct] = React.useState();
  let [orderCustomer , setOrderCustomer] = React.useState();
  let [reviewCustomer , serReviewCustomer] = React.useState();

  function load(){

  }

    let panes = [
    {
      menuItem: 'My Product',
      render: () =>                 
      <NoData description='There are no accounts that you have marketed yet' goto="sell" />
      // <div className="container-my-store-main-container">
      //   <ProdukContainer name='Valorant' />
      // </div>,
    },
    {
      menuItem: 'Order Customer',
      render: () => 
      <OrderCustomerContainer />
      ,
    },
    {
      menuItem: 'Review Customer',
      render: () => 
      <ReviewCustomerContainer />
      ,
    },
  ]                

    return(
        <div className="my-store-container">
            <HeaderMyStore StoreName='Ansell Store' src={image} slogan="Tokonya Anselma Putri" />
            <Tab menu={{ secondary: true, pointing: true, inverted: true, attached: false, tabular: false }} panes={panes} />

        </div>
    );
}

export default MyStoreContainer;