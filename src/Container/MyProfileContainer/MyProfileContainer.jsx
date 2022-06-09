import React from "react";
import { Tab } from 'semantic-ui-react';
import AlreadySent from "../../Component/AlreadySent/AlreadySent";
import Done from "../../Component/Done/Done";
import HeaderMyStore from "../../Component/HeaderMyStore/HeaderMyStore";
import NoData from "../../Component/NoData/NoData";
import Refund from "../../Component/Refund/Refund";
import SettingUpAnAccount from "../../Component/SettingUpAnAccount/SettingUpAnAccount";
import TransactionCanceled from "../../Component/TransactionCanceled/TransactionCanceled";
import WaitingForPayment from "../../Component/WaitingForPayment/WaitingForPayment";
import './MyProfileContainer.css';

function MyProfileContainer(){

  let [WaitingForPaymentData , setWaitingForPaymentData] = React.useState();
  let [SettingUpAnAccountData , SetSettingUpAnAccountData] = React.useState();
  let [AlreadySentData , setAlreadySentData] = React.useState();
  let [RefundData , setRefundData] = React.useState();
  let [TransactionCanceledData , setTransactionCanceledData] = React.useState();
  let [DoneData , setDoneData] = React.useState();

  React.useEffect(()=>{
    fetch(`http://localhost:8000/transaction?idUser=${localStorage.userId}`)
            .then((response) => response.json())
            .then((res)=>{
              res.map((data , index)=>{
                if(data.status === "Waiting For Payment"){
                  setWaitingForPaymentData(data);
                }else if(data.status === "Setting Up an Account"){
                  SetSettingUpAnAccountData(data);
                }else if(data.status === "Already Sent"){
                  setAlreadySentData(data);
                }else if(data.status === "Refund"){
                  setRefundData(data);
                }else if(data.status === "Transaction Canceled"){
                  setTransactionCanceledData(data);
                }else if(data.status === "Done"){
                  setDoneData(data);
                }
              });
            });
  },[]);

  let panes = [
    {
      menuItem: 'Waiting For Payment',
      render: () =>
      <>
        {(WaitingForPaymentData !== undefined)?
          <WaitingForPayment data={WaitingForPaymentData} />
        :
          <NoData  description='There Is No Incomming Bill' goto="/market" button="Go To Market" /> 
        }
      </>
    },
    {
      menuItem: 'Setting Up an Account',
      render: () => 
      <>
        {(SettingUpAnAccountData !== undefined)?
        <SettingUpAnAccount data={SettingUpAnAccountData} />
        :
        <NoData description='No Orders Processed Yet' goto="/market" button="Go To Market" /> 
        }
      </>
    },
    {
      menuItem: 'Already Sent',
      render: () => 
      <>
        {(AlreadySentData !== undefined)?
        <AlreadySent data={AlreadySentData} />
        :
        <NoData description='No Orders Processed Yet' goto="/market" button="Go To Market" />
        }
      </>
    },
    {
      menuItem: 'Refund',
      render: () => 
      <>
        {(RefundData !== undefined)?
          <Refund data={RefundData} />
        :
          <NoData description='No Orders Processed Yet' goto="/market" button="Go To Market" /> 
        }
      </>
    },
    {
      menuItem: 'Transaction Canceled',
      render: () => 
      <>
        {(TransactionCanceledData !== undefined)?
        <TransactionCanceled data={TransactionCanceledData} />
        :
        <NoData description='No Orders Processed Yet' goto="/market" button="Go To Market" /> 
        }
      </>
    },
    {
      menuItem: 'Done',
      render: () => 
      <>
        {(DoneData !== undefined)?
        <Done data={DoneData} />
        :
        <NoData description='No Orders Processed Yet' goto="/market" button="Go To Market" /> 
        }
      </>
    },            
  ]

    return(
        <div className="my-profile-container">
            <HeaderMyStore pageEdit="profile" StoreName={localStorage.fullName} src={(localStorage.userPhoto !== "")? localStorage.userPhoto : "https://react.semantic-ui.com/images/wireframe/image.png"} />
            <Tab menu={{ secondary: true, pointing: true, inverted: true, attached: false, tabular: false }} panes={panes} />
        </div>
    );
}

export default MyProfileContainer;