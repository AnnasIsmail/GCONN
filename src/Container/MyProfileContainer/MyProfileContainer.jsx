import React from "react";
import { Tab } from 'semantic-ui-react';
import HeaderMyStore from "../../Component/HeaderMyStore/HeaderMyStore";
import image from './assets/1.png';
import './MyProfileContainer.css';

function MyProfileContainer(){

                let panes = [
                {
                  menuItem: 'Waiting For Payment',
                  render: () => <Tab.Pane attached={false}>Tab 2 Content</Tab.Pane>,
                },
                {
                    menuItem: 'Waiting To Be Sent',
                    render: () => <Tab.Pane attached={false}>Tab 2 Content</Tab.Pane>,
                  },
                  {
                    menuItem: 'Already Sent',
                    render: () => <Tab.Pane attached={false}>Tab 2 Content</Tab.Pane>,
                  },
                  {
                    menuItem: 'Refund',
                    render: () => <Tab.Pane attached={false}>Tab 2 Content</Tab.Pane>,
                  },
                  {
                    menuItem: 'Refunded',
                    render: () => <Tab.Pane attached={false}>Tab 2 Content</Tab.Pane>,
                  },
                  {
                    menuItem: 'Transaction Canceled',
                    render: () => <Tab.Pane attached={false}>Tab 2 Content</Tab.Pane>,
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