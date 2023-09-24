import { InlineIcon } from "@iconify/react";
import React, { useContext, useEffect, useRef, useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { Dropdown, Icon } from "semantic-ui-react";
import styled, { css } from "styled-components";
import { Context } from "../Function/Context";

const Container = styled.div`
  color: white;
  width: auto;
  display: grid;
  grid-template-columns: auto auto auto;
  height: 60px;
  column-gap: 10px;
  align-items: center;
  padding-top: 15px;

  :hover {
    cursor: pointer;
  }

  @media only screen and (max-width: 730px) {
    position: absolute;
    right: 0;
    background-color: rgb(0, 7, 41);
  }
`;

const Content = styled.div`
  @media only screen and (max-width: 730px) {
    transition: width 0.3s ease;
    overflow: hidden;
    ${({ isOpen, width }) =>
      isOpen
        ? css`
            width: ${width}px;
          `
        : css`
            width: 0;
          `}
  }
`;

const ImageProfile = styled.img`
  height: 60px;
  width: 60px;
  object-fit: cover;
  border-radius: 50%;
`;

const Name = styled.h1`
  font-weight: 600;
  font-size: 20px;
  width: fit-content;
  margin-bottom: 5px;
  min-width: 145px;
  text-transform: capitalize;
`;

const Status = styled.div`
  display: flex;
  align-items: baseline;
  gap: 5px;
  font-size: 15px;
  font-weight: 500;
`;

const Arrow = styled(InlineIcon)`
  width: 30px;
  height: 30px;
  margin: -5px 0 0 -3px;
  transition: transform 0.3s ease;
  ${({ isOpen }) =>
    isOpen
      ? css`
          transform: rotate(90deg);
        `
      : css`
          transform: rotate(0deg);
        `}
`;

const Menu = styled(Dropdown.Menu)`
  background-color: rgba(255, 255, 255, 0.7) !important;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(13.1px);
  -webkit-backdrop-filter: blur(15px);
  border: 1px solid rgba(28, 52, 173, 0.32);
  width: 254px !important;
  z-index: 20;
  position: absolute !important;
  margin-top: 4px;

  @media only screen and (max-width: 730px) {
    margin-left: -250px !important;
  }
`;
export default function Profile(props) {
  const navigate = useNavigate();
  const navigateTo = (to) => navigate(to);
  const { context, updateContextValue } = useContext(Context);
  const [profile, setProfile] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const widthH1 = useRef(null);
  const [cookies, setCookie, removeCookie] = useCookies();
  const [profileWidth, setProfileWidth] = useState(0);
  const profileRef = useRef(null);

  useEffect(() => {
    setProfile(context.user && context.user);
  }, [context.user, context.login]);

  useEffect(() => {
    function handleWindowResize() {
      if (!window.innerWidth < 730) {
        let width;
        try {
          width = widthH1.current.offsetWidth;
        } catch (error) {}
        setProfileWidth(width);
      }
    }

    function handleDocumentClick(e) {
      if (!profileRef.current.contains(e.target) && window.innerWidth < 730) {
        setProfileWidth(0);
      }
    }

    window.addEventListener("resize", handleWindowResize);
    document.addEventListener("mouseup", handleDocumentClick);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
      document.removeEventListener("mouseup", handleDocumentClick);
    };
  }, []);

  const profileContainer = (
    <Container
      onClick={() => {
        setProfileWidth(profileWidth === 0 ? widthH1.current.offsetWidth : 0);
        setIsOpen(!isOpen);
      }}
      ref={profileRef}
    >
      <ImageProfile
        src={
          profile?.photo !== ""
            ? profile?.photo
            : "https://react.semantic-ui.com/images/wireframe/image.png"
        }
        alt={`Photo profile of ${profile?.fullName}`}
      />
      <Content isOpen={isOpen} width={profileWidth}>
        {profile?.fullName?.indexOf(" ") === -1 ? (
          <Name ref={widthH1}>{props.fullName}</Name>
        ) : (
          <Name ref={widthH1}>
            {profile?.fullName?.slice(0, profile?.fullName?.indexOf(" "))}
          </Name>
        )}
        <Status>
          <Icon name="circle" color="green" />
          Online
        </Status>
      </Content>
      <Arrow icon="ep:arrow-right-bold" isOpen={isOpen} />
    </Container>
  );

  return (
    <Dropdown className="noselect" trigger={profileContainer} open={isOpen}>
      <Menu>
        <Dropdown.Header icon="user" content="Profile" />
        <Dropdown.Divider />
        <Dropdown.Item
          icon="edit"
          text="My Profile"
          onClick={() => navigateTo("/myprofile")}
        />
        <Dropdown.Divider />
        <Dropdown.Header icon="shopping bag" content="Seller" />
        <Dropdown.Divider />
        <Dropdown.Item
          icon="edit"
          text="My Seller Profile"
          onClick={() => navigateTo("/mystore")}
        />
        <Dropdown.Item
          icon="tag"
          text="Sell Account"
          onClick={() => navigateTo("/choosegamesell/sellaccountvalorant")}
        />
        <Dropdown.Divider />
        <Dropdown.Item
          icon="sign-out alternate"
          text="Sign Out"
          onClick={() => {
            removeCookie("token");
            navigateTo("/");
            updateContextValue("login", false);
            updateContextValue("user", null);
          }}
        />
      </Menu>
    </Dropdown>
  );
}
