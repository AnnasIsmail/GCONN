import React from "react";
import CloseButton from 'react-bootstrap/CloseButton';
import { Button, Dropdown, Header, Image, Input, Label, Segment } from 'semantic-ui-react';
import DropdownSkinMobilLegend from "../DropdownSkinMobilLegend/DropdownSkinMobilLegend";
import coba1 from "./assets/coba1.png";
import coba2 from "./assets/coba2.png";
import coba3 from "./assets/coba3.png";
import './SellAccountMobileLegend.css';

function SellAccountMobileLegend(){

    const androidOrIos = [
        { key: "All", text: 'All', value: "All" },
        { key: "Android", text: 'Android', value: "Android" },
        { key: "IOS", text: 'IOS', value: "IOS" },
      ]

      const CNCF = [
        { key: "None", text: 'None', value: "None" },
        { key: "Available", text: 'Available', value: "Available" },
        { key: "Not AVailable", text: 'Not Available', value: "Not AVailable" },
      ]

      const rank = [
        { key: "Warior", text: "Warior", value: "Warior" },
        { key: "Elite", text: "Elite", value: "Elite" },
        { key: "Grandmaster", text: "Grandmaster", value: "Grandmaster" },
        { key: "Epic", text: "Epic", value: "Epic" },
        { key: "Legend", text: "Legend", value: "Legend" },
        { key: "Mythic", text: "Mythic", value: "Mythic" },
        { key: "Mythical Glory", text: "Mythical Glory", value: "Mythical Glory" },
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
                        <h6>Android / IOS</h6>
                        <Dropdown clearable options={androidOrIos} selection placeholder="None" />
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
                    <div className="format">
                        <h6>Price</h6>
                        <Input labelPosition='right' type='text' placeholder='Price'>
                            <Label basic>Rp.</Label>
                            <input type="number" name="price" />
                            <Label>.00</Label>
                        </Input>
                    </div>
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
                        <h6>Change Flag and Change Name</h6>
                        <Dropdown clearable options={CNCF} selection placeholder="None" />
                    </div>
                </div>
                <div>
                    <h6>Add Image</h6>
                    <div>
                        <Segment>
                            <Header icon>
                            {/* <Icon name='image outline' />
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
                    <h6>Your Account Hero</h6>
                    <DropdownSkinMobilLegend />
                </div>
            </div>
        </div>
    );
}

export default SellAccountMobileLegend;