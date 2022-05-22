import React from "react";
import CloseButton from 'react-bootstrap/CloseButton';
import { Button, Dropdown, Header, Image, Input, Segment } from 'semantic-ui-react';
import DropdownSkinValorant from "../DropdownSkinValorant/DropdownSkinValorant";
import coba1 from "./assets/coba1.png";
import coba2 from "./assets/coba2.png";
import coba3 from "./assets/coba3.png";
import RankPUBG from "./assets/Rank PUBG.png";
import './SellAccountPUBG.css';

function SellAccountPUBG(){

    const changeName = [
        { key: 1, text: 'Ready', value: 1 },
        { key: 2, text: 'Not Ready', value: 1 },
      ]

    return(
        <div className="sell-account-valorant double-column">
            <div className="left">
                <div>
                    <h6>Title</h6>
                    <Input placeholder='Title Product' />
                </div>
                <div>
                    <h6>Nickname</h6>
                    <Input placeholder='Nickname Account' />
                </div>
                <div className="double-column dropdown-size">
                    <div>
                        <h6>Change Name Status</h6>
                        <Dropdown clearable options={changeName} selection placeholder="None" />
                    </div>
                    <div>
                        <h6>Account Level</h6>
                        <Input placeholder='Account Level' type="number" />
                    </div>
                </div>
                <div className="double-column dropdown-size">
                    <div>
                        <h6>Hero Count</h6>
                        <Input placeholder='Hero Count' type="number" />
                    </div>
                    <div>
                        <h6>Price</h6>
                        <Input placeholder='Price Product' type="number" />
                    </div>
                </div>
                <div>
                    <h6>Reason to Sell</h6>
                    <Input placeholder='Reason to Sell Product' />
                </div>
            </div>
            <div className="right">
                <div className="rank">
                    <h6>Rank</h6>
                    <img src={RankPUBG} alt="" />
                </div>
                <div>
                    <h6>Add Image</h6>
                    <div>
                        <Segment>
                            <Header icon>
                            {/* <Icon name='pdf file outline' />
                            No documents are listed for this customer. */}
                        <div className="container-image-sell-account-valorant">
                            <span>
                                <Image src={coba1} />
                                <CloseButton aria-label="Hide" />
                            </span>
                            <span>
                                <Image src={coba2} />
                                <CloseButton aria-label="Hide" />
                            </span>
                            <span>
                                <Image src={coba3} />
                                <CloseButton aria-label="Hide" />
                            </span>
                        </div>
                            </Header>
                            <Button primary>Add Document</Button>
                        </Segment>
                    </div>
                </div>
                <div id='penting'>
                    <h6>Your Account Valorant Skin</h6>
                    <DropdownSkinValorant  />
                </div>
            </div>
        </div>
    );
}

export default SellAccountPUBG;