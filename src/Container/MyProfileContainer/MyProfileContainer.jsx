import React from "react";
import { Tab } from 'semantic-ui-react';
import HeaderMyStore from "../../Component/HeaderMyStore/HeaderMyStore";
import NoData from "../../Component/NoData/NoData";
import image from './assets/1.png';
import noDataAlreadtSent from './assets/no data already sent.svg';
import noDataRefund from './assets/no data refund.svg';
import noDataRefunded from './assets/no data refunded.svg';
import noDataTransactionCanceled from './assets/no data transaction canceled.svg';
import noDataWaitingForPayment from './assets/no data waiting for payment.svg';
import noDataWaitingToBeSent from './assets/no data waiting to be sent.svg';
import './MyProfileContainer.css';

function MyProfileContainer(){

                let panes = [
                {
                    menuItem: 'Waiting For Payment',
                    render: () => <NoData src={noDataWaitingForPayment} description='There Is No Incomming Bill' /> ,
                },
                {
                    menuItem: 'Waiting To Be Sent',
                    render: () => <NoData src={noDataWaitingToBeSent} description='No Orders Processed Yet' /> ,
                  },
                  {
                    menuItem: 'Already Sent',
                    render: () => <NoData src={noDataAlreadtSent} description='No Orders Processed Yet' /> ,
                  },
                  {
                    menuItem: 'Refund',
                    render: () => <NoData src={noDataRefund} description='No Orders Processed Yet' /> ,
                  },
                  {
                    menuItem: 'Refunded',
                    render: () => <NoData src={noDataRefunded} description='No Orders Processed Yet' /> ,
                  },
                  {
                    menuItem: 'Transaction Canceled',
                    render: () => <NoData src={noDataTransactionCanceled} description='No Orders Processed Yet' /> ,
                  },
              ]

    return(
        <div className="my-profile-container">
            <HeaderMyStore StoreName='Ansellma Putri' src={image} />
            <Tab menu={{ secondary: true, pointing: true, inverted: true, attached: false, tabular: false }} panes={panes} />
        </div>
    );
}

export default MyProfileContainer;