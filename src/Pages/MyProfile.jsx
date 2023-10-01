import React, { useContext, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { Loader, Tab } from "semantic-ui-react";
import styled from "styled-components";
import DoneTransaction from "../Component/DoneTransaction";
import HeaderMyProfile from "../Component/HeaderMyProfile";
import NoData from "../Component/NoData/NoData";
import OnGoingTransaction from "../Component/OnGoingTransaction";
import { get } from "../Function/Api";
import { Context } from "../Function/Context";
import getUserData from "../Function/getUserData";

const Container = styled.div`
  display: grid;
  grid-template-rows: auto auto max-content;
`;
export default function MyProfile() {
  const navigate = useNavigate();
  const navigateTo = (to) => navigate(to);
  const [loadingProfile, setLoadingProfile] = useState(true);
  const [loadingTransaction, setLoadingTransaction] = useState(true);
  const [profile, setProfile] = React.useState({});
  const [dataOngoing, setDataOngoing] = useState([]);
  const [dataDone, setDataDone] = useState([]);
  const [cookies, setCookie, removeCookie] = useCookies();
  const { context, updateContextValue } = useContext(Context);
  if (!context.login && !context.user) {
    navigateTo("/");
  }

  useEffect(() => {
    if (cookies.token && context.user) {
      getUserData(context, updateContextValue, cookies.token)
        .then((res) => {
          setLoadingProfile(false);
          setProfile(res);
        })
        .catch(() => {
          removeCookie("token");
        });
      get(`transaction/user/${context.user._id}`, "main", {
        authorization: cookies.token,
      })
        .then((res) => {
          const dataOngoing = [];
          const dataDone = [];

          res.data.forEach((data) => {
            switch (data.status) {
              case "Waiting For Payment":
              case "Waiting for Seller to Respond":
              case "Seller Already Sent Credentials":
              case "Waiting for Seller to Send Credentials":
              case "Waiting for the seller to accept the cancellation":
              case "Waiting for admin's decision":
                dataOngoing.push(data);
                break;
              case "Transaction Failed":
              case "Done":
                dataDone.push(data);
                break;
              default:
                break;
            }
          });

          setDataOngoing(dataOngoing);
          setDataDone(dataDone);
          setLoadingTransaction(false);
        })
        .catch(() => {
          return setLoadingTransaction(false);
        });
    }
  }, []);

  let panes = [
    {
      menuItem: "Ongoing Transaction",
      render: () => (
        <>
          {dataOngoing.length > 0 ? (
            <>
              {dataOngoing.map((data, index) => (
                <OnGoingTransaction data={data} key={index} />
              ))}
            </>
          ) : (
            <NoData
              description="No Ongoing Transaction"
              goto="/market"
              button="Go To Market"
            />
          )}
        </>
      ),
    },
    {
      menuItem: "Done",
      render: () => (
        <>
          {dataDone.length > 0 ? (
            <>
              {dataDone.map((data, index) => (
                <DoneTransaction data={data} key={index} />
              ))}
            </>
          ) : (
            <NoData
              description="No Transaction Completed"
              goto="/market"
              button="Go To Market"
            />
          )}
        </>
      ),
    },
  ];
  return (
    <Container>
      {loadingProfile ? (
        <Loader
          style={{ marginTop: 50 }}
          active
          inline="centered"
          size="huge"
        />
      ) : (
        <HeaderMyProfile profile={profile} />
      )}

      {loadingTransaction ? (
        <Loader
          style={{ marginTop: 50 }}
          active
          inline="centered"
          size="huge"
        />
      ) : (
        <Tab
          menu={{
            secondary: true,
            pointing: true,
            inverted: true,
            attached: false,
            tabular: false,
          }}
          panes={panes}
        />
      )}
    </Container>
  );
}
