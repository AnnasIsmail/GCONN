import React from "react";
import { useCookies } from 'react-cookie';
import { Loader, Tab } from 'semantic-ui-react';
import DoneTransaction from "../../Component/DoneTransaction/DoneTransaction";
import HeaderMyStore from "../../Component/HeaderMyStore/HeaderMyStore";
import NoData from "../../Component/NoData/NoData";
import OnGoingTransaction from "../../Component/OnGoingTransaction/OnGoingTransaction";
import ProdukContainer from "../ProdukContainer/ProdukContainer";
import './../../Component/OrderCustomer/OrderCustomer.css';
import './MyStoreContainer.css';


function MyStoreContainer(props){

  const [cookies, setCookie, removeCookie] = useCookies();
  const [seller , setSeller] = React.useState({});
  const [loading , setLoading] = React.useState(true);
  const [loadingProfile , setLoadingProfile] = React.useState(true);
  const [balance , setBalance] = React.useState(0);

  const [dataOngoing , setDataOngoing] = React.useState([]);
  const [dataDone , setDataDone] = React.useState([]);
  const render = React.useRef(0);

  let [MyProductData , setMyProductData] = React.useState([]);


  React.useEffect(()=>{
    fetch('https://gconn-api-node-js.vercel.app/sellerData', {
      method: 'POST', // or 'PUT'
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({_id: cookies.Cr787980}),
      }) 
  .then((response) => response.json())
  .then(function (response) {
      // console.log(response)
      if(response.status === 200){
        setSeller(response.data);
        setBalance(response.userBalance.balance);
        setLoadingProfile(false);
      }
      // else{
      //     window.location.reload()
      // }
  })

  fetch(`https://gconn-api-node-js.vercel.app/accountsOwner/${cookies.Cr787980}`)
  .then((response) => response.json())
  .then((res)=>{
    setMyProductData(res.data);
  });


  // if(render.current === 1){
    fetch(`https://gconn-api-node-js.vercel.app/getTransactionByIDSeller/${cookies.Cr787980}`)
    .then((response) => response.json())
    .then((res)=>{
        res.data.forEach((data, index) => {
            if(data.status === 'Waiting For Payment' || data.status === 'Waiting for Seller to Respond' || data.status === 'Seller Already Sent Credentials' || data.status === 'Waiting for Seller to Send Credentials'|| data.status === 'Waiting for the seller to accept the cancellation'|| data.status === "Waiting for admin's decision"){
              const dataToSet = dataOngoing;
            dataToSet.push(data)
            setDataOngoing(dataToSet);
          }else  if(data.status === 'Transaction Failed' || data.status === 'Done'){
            const dataToSet = dataDone;
            dataToSet.push(data)
            setDataDone(dataToSet);
          }
        });
        setLoading(false);
    });
  
  },[]);

  React.useEffect(()=>{
    render.current += 1;
  })

    let panes = [
    {
      menuItem: 'My Product',
      render: () =>    
      <>       
        {(MyProductData.length !== 0)?
          <div className="container-my-store-main-container">
            <ProdukContainer  goToChat={(data)=>props.goToChat(data)} data={MyProductData} footer="edit-product" seller={seller} page="my-product" />
          </div>
        :
          <NoData description='There are no accounts that you have marketed yet' goto="/choosegamesell/sellaccountvalorant" button="Go To Sell Account" />
        }     
      </> 
    },
    {
      menuItem: 'Ongoing Transaction',
      render: () => 
      <>
      {(dataOngoing.length > 0)?
        <div className="order-customer-container">
          {dataOngoing.map((data , index)=> <OnGoingTransaction  goToChat={(data)=>props.goToChat(data)} data={data} key={index} />)}
        </div>
      :
      <NoData description='There are no accounts that you have marketed yet' goto="/choosegamesell/sellaccountvalorant" button="Go To Sell Account" />
    }
      </>
      ,
    },
    {
      menuItem: 'Transaction Done',
      render: () => 
      <>
        {(dataDone.length > 0)?
        <div className="review-customer-container">
          {dataDone.map((data , index)=> <DoneTransaction  goToChat={(data)=>props.goToChat(data)} data={data} key={index} />)}
        </div>
        :
        <NoData description='There are no accounts that you have marketed yet' goto="/choosegamesell/sellaccountvalorant" button="Go To Sell Account" />
        }
      </>
      ,
    },
  ]                
    return(
        <div className="my-store-container">
            {(loadingProfile)?
              <Loader style={{ marginTop: 50 }} active inline='centered' size="huge" />
            :
              <HeaderMyStore pageEdit="seller" seller={seller} StoreName={seller.sellerName} src={(seller.photo !== "")? seller.photo : "https://react.semantic-ui.com/images/wireframe/image.png"} slogan={seller.slogan} balance={balance} />
            }
            {(loading)?
              <Loader style={{ marginTop: 50 }} active inline='centered' size="huge" />
            :
              <Tab menu={{ secondary: true, pointing: true, inverted: true, attached: false, tabular: false }} panes={panes} />
            } 
        </div>
    );
}

export default MyStoreContainer;