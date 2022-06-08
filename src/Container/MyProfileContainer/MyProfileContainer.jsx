import React from "react";
import { Tab } from 'semantic-ui-react';
import AlreadySent from "../../Component/AlreadySent/AlreadySent";
import Done from "../../Component/Done/Done";
import HeaderMyStore from "../../Component/HeaderMyStore/HeaderMyStore";
import Refund from "../../Component/Refund/Refund";
import SettingUpAnAccount from "../../Component/SettingUpAnAccount/SettingUpAnAccount";
import TransactionCanceled from "../../Component/TransactionCanceled/TransactionCanceled";
import WaitingForPayment from "../../Component/WaitingForPayment/WaitingForPayment";
import './MyProfileContainer.css';

function MyProfileContainer(){

                let panes = [
                {
                    menuItem: 'Waiting For Payment',
                    render: () =>
                    <>
                      {/* <NoData  description='There Is No Incomming Bill' /> , */}
                      <WaitingForPayment />
                    </>
                },
                {
                    menuItem: 'Setting Up an Account',
                    render: () => 
                    <>
                      {/* <NoData description='No Orders Processed Yet' /> , */}
                      <SettingUpAnAccount />
                    </>
                  },
                  {
                    menuItem: 'Already Sent',
                    render: () => 
                    <>
                      {/* <NoData description='No Orders Processed Yet' /> , */}
                      <AlreadySent />
                    </>
                  },
                  {
                    menuItem: 'Refund',
                    render: () => 
                    <>
                      {/* <NoData description='No Orders Processed Yet' /> , */}
                      <Refund />
                    </>
                  },
                  {
                    menuItem: 'Transaction Canceled',
                    render: () => 
                    <>
                      {/* <NoData description='No Orders Processed Yet' /> , */}
                      <TransactionCanceled />
                    </>
                  },
                  {
                    menuItem: 'Done',
                    render: () => 
                    <>
                      {/* <NoData description='No Orders Processed Yet' /> , */}
                      <Done />
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