import $ from "jquery";
import { useEffect } from "react";
import styled from "styled-components";
import LinkNav from "../../Component/LinkNav";
import logoGconn from "../../image/logo-gconn-nobackground.png";

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

const Main = styled.div`
  margin-top: 70px;
  display: grid;
  grid-template-columns: auto;
  row-gap: 30px;

  hr {
    max-height: 0.5px;
    color: white;
    opacity: 1;
    margin: auto;
    margin-left: 20px;
    width: 30px;
    overflow: hidden;
  }

  .klik h3 {
    font-weight: 700;
  }
`;

function LeftSideBar() {
  useEffect(() => {
    const hrNav = $(".hrNavbar");
    const LeftSideBar = $("#LeftSideBar");
    const animationDuration = 300;

    const animateBars = (sidebarWidth, hrNavWidth) => {
      LeftSideBar.animate({ width: sidebarWidth }, animationDuration);
      hrNav.animate({ width: hrNavWidth }, animationDuration);
      LeftSideBar.clearQueue();
      hrNav.clearQueue();
    };

    const handleMouseEnter = () => {
      animateBars("200px", "160px");
    };

    const handleMouseLeave = () => {
      animateBars("60px", "30px");
    };

    LeftSideBar.hover(handleMouseEnter, handleMouseLeave);
    LeftSideBar.mouseleave(handleMouseLeave);
  }, []);

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
        <Main>
          <LinkNav
            path="/"
            label="Home"
            icon="fluent:home-32-regular"
            iconActive="fluent:home-48-filled"
          />
          <LinkNav
            path="/market"
            label="Market"
            icon="clarity:shopping-bag-line"
            iconActive="clarity:shopping-bag-solid"
          />
          <LinkNav
            path="/favorite"
            label="Favorite"
            icon="ph:star"
            iconActive="ph:star-fill"
          />
          <hr className="hrNavbar" />
          <LinkNav
            path="/mystore"
            label="My Store"
            icon="clarity:store-line"
            iconActive="clarity:store-solid"
          />
        </Main>
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
