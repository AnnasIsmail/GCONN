import React from "react";
import { Tab } from 'semantic-ui-react';
import HeaderMyStore from "../../Component/HeaderMyStore/HeaderMyStore";
import NoData from "../../Component/NoData/NoData";
import OrderCustomer from "../../Component/OrderCustomer/OrderCustomer";
import ReviewCustomer from "../../Component/ReviewCustomer/ReviewCustomer";
import ProdukContainer from "../ProdukContainer/ProdukContainer";
import './MyStoreContainer.css';

function MyStoreContainer(){

  let [MyProductData , setMyProductData] = React.useState();
  let [OrderCustomerData , setOrderCustomerData] = React.useState();
  let [ReviewCustomerData , setReviewCustomerData] = React.useState();

  React.useEffect(()=>{
    fetch(`http://localhost:8000/transaction?idSeller=${localStorage.userId}`)
    .then((response) => response.json())
    .then((res)=>{
      res.map((data , index)=>{
          if(data.status !== "Done"){
            setOrderCustomerData(data);
          }else if(data.status === "Done"){
            setReviewCustomerData(data);
          }
        });
      });

      fetch(`http://localhost:8000/account?idSeller=${localStorage.userId}`)
      .then((response) => response.json())
      .then((res)=>{
        setMyProductData(res)
        });
    
  },[]);

    let panes = [
    {
      menuItem: 'My Product',
      render: () =>    
      <>       
        {(MyProductData !== undefined)?
          <div className="container-my-store-main-container">
            <ProdukContainer data={MyProductData} footer="edit-product" page="my-product" />
          </div>
        :
          <NoData description='There are no accounts that you have marketed yet' goto="/choosegamesell" button="Go To Sell Account" />
        }     
      </> 
    },
    {
      menuItem: 'Order Customer',
      render: () => 
      <>
      {(OrderCustomerData !== undefined)?
        <div className="order-customer-container">
            <OrderCustomer data={OrderCustomerData} />
        </div>
      :
      <NoData description='There are no accounts that you have marketed yet' goto="/choosegamesell" button="Go To Sell Account" />
    }
      </>
      ,
    },
    {
      menuItem: 'Review Customer',
      render: () => 
      <>
        {(ReviewCustomerData !== undefined)?
        <div className="review-customer-container">
              <ReviewCustomer data={ReviewCustomerData} />
        </div>
        :
        <NoData description='There are no accounts that you have marketed yet' goto="/choosegamesell" button="Go To Sell Account" />
        }
      </>
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