import React from "react";
import { useCookies } from "react-cookie";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Button from "../../Component/Button/Button";
import SayHello from "../../Component/SayHello/SayHello";
import SearchTextField from "../../Component/SearchTextField/SearchTextField";
import "./TopBar.css";

const Container = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  height: 80px;
  width: calc(100vw - 180px);
  margin: auto;
  display: flex;
  justify-content: space-between;
  max-width: 1300px;

  @media only screen and (max-width: 730px) {
    height: 80px;
    width: 100vw;
    padding: 0 15px;
    justify-content: space-between;
  }
`;

const buttonStyle = `
background: linear-gradient(18deg, rgba(28,52,173,0.23012955182072825) 0%, rgba(28,52,173,1) 100%);
border-radius: 10px;
padding: 5px 4vw;
margin: auto 0;
font-weight: normal;

@media only screen and (max-width: 430px) {
    display: none;
}
`;

function TopBar(props) {
  const [cookies, setCookie, removeCookie] = useCookies();
  const [profile, setProfile] = React.useState({});
  const [profileComp, setProfileComp] = React.useState();
  const location = useLocation();
  const currentPath = location.pathname;

  React.useEffect(() => {
    // post("/userData", { _id: "64c4a7a68c805813e315e12f" })
    //   .then((response) => console.log(response))
    // .catch((error) => console.error(error));
    // if (props.login) {
    //   fetch("https://gconn-api-node-js.vercel.app/userData", {
    //     method: "POST", // or 'PUT'
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({ _id: cookies.Cr787980 }),
    //   })
    //     .then((response) => response.json())
    //     .then(function (response) {
    //       if (response.status === 200) {
    //         setProfile(response.data);
    //         setProfileComp(
    //           <Profile
    //             goToChat={(data) => props.goToChat(data)}
    //             profile={response.data}
    //           />
    //         );
    //       } else {
    //         removeCookie("Cr787980");
    //         // window.location.reload();
    //       }
    //     });
    // }
  }, []);

  return (
    <div>
      {
        props.login ? (
          props.page === "bill-top-bar" ||
          props.page === "home-top-bar" ||
          props.page === "sell-account-top-bar" ||
          props.page === "favorite-top-bar" ||
          props.page === "my-store-top-bar" ||
          props.page === "detail-produk-top-bar" ||
          props.page === "detail-product-top-bar" ||
          props.page === "payment-top-bar" ? (
            <div className="top-bar">
              <SayHello login={props.login} profile={profile} />
              {profileComp}
            </div>
          ) : props.page === "market-top-bar" ? (
            <div className="top-bar">
              <SearchTextField />
              {profileComp}
            </div>
          ) : props.page === "my-profile-top-bar" ? (
            <div className="top-bar">
              <div></div> {profileComp}
            </div>
          ) : (
            <div className="top-bar"></div>
          )
        ) : (
          // (props.page === 'home-top-bar')?
          <Container>
            <SayHello />
            <Button
              text="Log In"
              additionalStyle={buttonStyle}
              onclick="/sign-in"
            />
          </Container>
        )
        // :(props.page === 'market-top-bar')?
        // <div className="top-bar">
        //     <SearchTextField /> <Button text='Log In' additionalClass='sign-in-button' onclick='/sign-in' />
        // </div>
        // :
        // <div className="top-bar">

        // </div>
      }
    </div>
  );
}

export default TopBar;
