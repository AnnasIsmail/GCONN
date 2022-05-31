import React from "react";
import { Tab } from 'semantic-ui-react';
import HeaderMyStore from "../../Component/HeaderMyStore/HeaderMyStore";
import NoData from "../../Component/NoData/NoData";
import './MyProfileContainer.css';

function MyProfileContainer(){

                let panes = [
                {
                    menuItem: 'Waiting For Payment',
                    render: () => <NoData  description='There Is No Incomming Bill' /> ,
                },
                {
                    menuItem: 'Waiting To Be Sent',
                    render: () => <NoData description='No Orders Processed Yet' /> ,
                  },
                  {
                    menuItem: 'Already Sent',
                    render: () => <NoData description='No Orders Processed Yet' /> ,
                  },
                  {
                    menuItem: 'Refund',
                    render: () => <NoData description='No Orders Processed Yet' /> ,
                  },
                  {
                    menuItem: 'Refunded',
                    render: () => <NoData description='No Orders Processed Yet' /> ,
                  },
                  {
                    menuItem: 'Transaction Canceled',
                    render: () => <NoData description='No Orders Processed Yet' /> ,
                  },
              ]

    return(
        <div className="my-profile-container">
            <HeaderMyStore StoreName={localStorage.fullName} src={localStorage.userPhoto} />
            <Tab menu={{ secondary: true, pointing: true, inverted: true, attached: false, tabular: false }} panes={panes} />
        </div>
    );
}

export default MyProfileContainer;