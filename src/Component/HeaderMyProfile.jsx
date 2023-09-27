import React from "react";
import { Header } from "semantic-ui-react";
import FormatMoney from "../Function/FormatMoney";
import checkSRCPhoto from "../Function/checkSRCPhoto";
import ModalEditProfile from "./ModalEdit/ModalEditProfile";

export default function HeaderMyProfile({ profile }) {
  return (
    <div className="header-my-store">
      <Header as="h2" icon textAlign="center">
        <img src={checkSRCPhoto(profile.photo)} alt="" />
        <Header.Content>
          {profile.fullName} <ModalEditProfile profile={profile} />{" "}
        </Header.Content>
        <span
          style={{
            textAlign: "start",
            display: "flex",
            justifyContent: "center",
            gap: 10,
          }}
        >
          <b>Balance</b>: <FormatMoney money={profile.balance} />{" "}
        </span>

        {/* <ModalHistoryBalance seller={props.seller} balance={props.balance} setOpen={false} closeOnDimmerClick={false} closeButton={false} /> */}
        {/* <ModalCashOut seller={props.seller} balance={props.balance} setOpen={false} closeOnDimmerClick={false} closeButton={false} /> */}
      </Header>
    </div>
  );
}
