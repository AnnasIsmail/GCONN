import React from "react";
import CloseButton from 'react-bootstrap/CloseButton';
import { Button, Dropdown, Header, Image, Input, Segment } from 'semantic-ui-react';
import DropdownSkinPUBG from "../DropdownSkinPUBG/DropdownSkinPUBG";
import coba1 from "./assets/coba1.png";
import coba2 from "./assets/coba2.png";
import coba3 from "./assets/coba3.png";
import './SellAccountPUBG.css';

function SellAccountPUBG(){

    const changeName = [
        { key: "Ready", text: 'Ready', value: "Ready" },
        { key: "Not Ready", text: 'Not Ready', value: "Not Ready" },
      ]

    const rank = [
        { key: "Bronze", text: "Bronze", value: "Bronze" },
        { key: "Silver", text: "Silver", value: "Silver" },
        { key: "Gold", text: "Gold", value: "Gold" },
        { key: "Platinum", text: "Platinum", value: "Platinum" },
        { key: "Diamond", text: "Diamond", value: "Diamond" },
        { key: "Crown", text: "Crown", value: "Crown" },
        { key: "Ace", text: "Ace", value: "Ace" },
        { key: "Conqueror", text: "Conqueror", value: "Conqueror" },
    ]

    const dataLogin = [
        { key: "Email", text: "Email", value: "Email" },
        { key: "Phone Number", text: "Phone Number", value: "Phone Number" },
        { key: "Facebook", text: "Facebook", value: "Facebook" },
        { key: "Twitter", text: "Twitter", value: "Twitter" },
        { key: "GPlay Games", text: "GPlay Games", value: "GPlay Games" },
        { key: "Guest", text: "Guest", value: "Guest" },

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
                        <h6>Level</h6>
                        <Input placeholder='Account Level' type="number" />
                    </div>
                </div>
                <div className="double-column dropdown-size">
                    <div>
                        <h6>Data Login</h6>
                        <Dropdown clearable options={dataLogin} selection placeholder="None" />
                    </div>
                    <div>
                        <h6>Price</h6>
                        <Input placeholder='Price Product' type="number" />
                    </div>
                </div>
                <div>
                    <h6>Description</h6>
                    <Input placeholder='Description Account' />
                </div>
                <div>
                    <h6>Reason to Sell</h6>
                    <Input placeholder='Reason to Sell Product' />
                </div>
            </div>
            <div className="right">
                <div className="double-column dropdown-size">
                    <div>
                        <h6>Rank</h6>
                        <Dropdown clearable options={rank} selection placeholder="None" />
                    </div>
                    <div>
                        <h6>Royale Pass</h6>
                        <Input placeholder='Royalepass' />
                    </div>
                </div>
                <div>
                    <h6>Add Image</h6>
                    <div>
                        <Segment>
                            <Header icon>
                            {/* <Icon name='pdf file outline' />
                            No image are listed for this customer. */}
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
                <div>
                    <h6>Your Account Skin</h6>
                    <DropdownSkinPUBG />
                </div>
            </div>
        </div>
    );
}

export default SellAccountPUBG;