import React from "react";
import { Tab } from 'semantic-ui-react';
import HeaderMyStore from "../../Component/HeaderMyStore/HeaderMyStore";
import NoData from "../../Component/NoData/NoData";
import OrderCustomer from "../../Component/OrderCustomer/OrderCustomer";
import ReviewCustomer from "../../Component/ReviewCustomer/ReviewCustomer";
import './MyStoreContainer.css';

function MyStoreContainer(){

  let [myProduct , setMyProduct] = React.useState();
  let [orderCustomer , setOrderCustomer] = React.useState();
  let [reviewCustomer , serReviewCustomer] = React.useState();

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
      <div className="order-customer-container">
          <OrderCustomer />
          <OrderCustomer />
          <OrderCustomer />
          <OrderCustomer />
          <OrderCustomer />
      </div>
      ,
    },
    {
      menuItem: 'Review Customer',
      render: () => 
      <div className="review-customer-container">
            <ReviewCustomer />
        </div>
      ,
    },
  ]                

    return(
        <div className="my-store-container">
            <HeaderMyStore pageEdit="seller" StoreName={localStorage.sellerName} src={(localStorage.sellerPhoto !== "")? localStorage.sellerPhoto : "https://react.semantic-ui.com/images/wireframe/image.png"} slogan={localStorage.sellerSlogan} />
            <Tab menu={{ secondary: true, pointing: true, inverted: true, attached: false, tabular: false }} panes={panes} />

        </div>
    );
}

export default MyStoreContainer;