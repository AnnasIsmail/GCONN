import React from "react";
import { Tab } from 'semantic-ui-react';
import HeaderMyStore from "../../Component/HeaderMyStore/HeaderMyStore";
import ProdukContainer from "../ProdukContainer/ProdukContainer";
import image from './assets/1.png';
import './MyStoreContainer.css';

function MyStoreContainer(){

                let panes = [
                {
                  menuItem: 'My Product',
                  render: () =>                 
                  <div className="container-my-store-main-container">
                    <ProdukContainer name='Valorant' />
                    <ProdukContainer name='Valorant' />
                    <ProdukContainer name='Valorant' />
                </div>,
                },
                {
                  menuItem: 'Order Customer',
                  render: () => <Tab.Pane attached={false}>Tab 2 Content</Tab.Pane>,
                },
                {
                  menuItem: 'Review Customer',
                  render: () => <Tab.Pane attached={false}>Tab 3 Content</Tab.Pane>,
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