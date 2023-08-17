import $ from "jquery";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import HomeIcon from "../../image/icon/home";
import MarketIcon from "../../image/icon/market";
import StarIcon from "../../image/icon/star";
import StoreIcon from "../../image/icon/store";
import logoGconn from "../../image/logo-gconn-nobackground.png";

// import NavbarAfterLogin from "../../Component/NavbarAfterLogin/NavbarAfterLogin";
// import NavbarBeforeLogin from "../../Component/NavbarBeforeLogin/NavbarBeforeLogin";

const Container = styled.div`
  background: rgba(28, 52, 173, 0.8);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
  border-radius: 10px;

  position: fixed;
  width: 60px;
  overflow: hidden;
  top: 10px;
  bottom: 10px;
  border-radius: 10px;
  left: 10px;
  z-index: 5;

  @media only screen and (max-width: 730px) {
    display: none;
  }
`;

const Content = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-bottom: 0.5rem;
  padding-top: 0.5rem;
  position: relative;

  .main {
    margin-top: 70px;
    display: grid;
    grid-template-columns: auto;
    row-gap: 30px;
  }

  .main .link {
    color: white;
    display: grid;
    grid-template-columns: auto 100px;
    justify-content: center;
    align-items: center;
    font-size: 23px;
    column-gap: 30px;
    padding-left: 10px;
    text-decoration: none;
  }

  .main .link h3 {
    margin: 0;
    font-weight: 400;
    font-size: 20px;
    margin-top: 5px;
    width: fit-content;
  }

  .main .link:hover {
    cursor: pointer;
  }

  .main hr {
    max-height: 0.5px;
    color: white;
    opacity: 1;
    margin: auto;
    margin-left: 20px;
    width: 45px;
    overflow: hidden;
  }

  .main .klik h3 {
    font-weight: 700;
  }
`;

const Logo = styled.div`
  padding-top: 25px;
  color: white;
  display: grid;
  grid-template-columns: 40% 1fr;
  padding-left: 10px;
  cursor: pointer;

  img {
    width: 40px;
    height: 40px;
  }

  h1 {
    font-weight: bold;
    font-size: 30px;
    padding-bottom: -10px;
  }

  h3 {
    margin-top: -10px;
    font-size: 7px;
  }

  span {
    display: flex;
    flex-direction: column;
    text-align: center;
  }
`;

function LeftSideBar(props) {
  let home = false;
  let market = false;
  let favorite = false;
  let mystore = false;
  React.useEffect(function () {
    let hrNav = $(".hrNavbar");
    let topBar = $(".top-bar");
    let LeftSideBar = $("#LeftSideBar");

    LeftSideBar.hover(
      function () {
        $(this).animate({ width: "200px" }, 300);
        hrNav.animate({ width: "160px" }, 300);
        $(this).clearQueue();
        hrNav.clearQueue();
      },
      function () {
        $(this).animate({ width: "60px" }, 300);
        hrNav.animate({ width: "30px" }, 300);
        $(this).clearQueue();
        hrNav.clearQueue();
      }
    );

    LeftSideBar.mouseleave(function () {
      $(this).animate({ width: "60px" }, 300);
      hrNav.animate({ width: "30px" }, 300);
      $(this).clearQueue();
      hrNav.clearQueue();
    });
  });

  return (
    <Container id="LeftSideBar">
      <Content>
        <Logo>
          <img src={logoGconn} alt="" />
          <span>
            <h1>GCONN</h1>
            <h3>GAMES ACCOUNT MARKETPLACE</h3>
          </span>
        </Logo>
        <div className="main">
          <Link id="HomeAfter" className="link" to="/">
            <HomeIcon diKlik={home} /> <h3>Home</h3>
          </Link>
          <Link id="MarketAfter" className="link" to="/market">
            <MarketIcon diKlik={market} /> <h3>Market</h3>
          </Link>
          <Link id="FavoriteAfter" className="link" to="/favorite">
            <StarIcon diKlik={favorite} /> <h3>Favourite</h3>
          </Link>
          <hr className="hrNavbar" />
          <Link id="MyStoreAfter" className="link" to="/mystore">
            <StoreIcon diKlik={mystore} /> <h3>My Store</h3>
          </Link>
        </div>
      </Content>
      {/* {props.login ? (
        <NavbarAfterLogin page={props.page} />
      ) : (
        <NavbarBeforeLogin page={props.page} />
      )} */}
    </Container>
  );
}

export default LeftSideBar;
