import React from "react";
import { useCookies } from "react-cookie";
import TopBar from "../Component/SayHello/SayHello";
import BottomBar from "../Container/BottomBar/BottomBar";
import LeftSideBar from "../Container/LeftSideBar/LeftSideBar";
import RightSlideBar from "../Container/RightSlide/RightSlideBar";

export default function MainLayout({ children }) {
  const [cookies, setCookie, removeCookie] = useCookies();
  let login = false;
  if (cookies.Cr787980) {
    login = true;
  }
  const chatRef = React.useRef();
  const goToChat = (data) => {
    chatRef.current.openDirectChat(data);
  };
  return (
    <div
      style={{
        position: "absolute",
        width: "75vw",
        height: "auto",
        margin: "auto",
        left: 0,
        right: 0,
        top: "80px",
        marginTop: "10px",
        bottom: "10px",
        overflow: "auto",
      }}
    >
      <TopBar goToChat={goToChat} login={login} />
      <LeftSideBar login={login} />
      <div>{children}</div>
      <RightSlideBar ref={chatRef} login={login} />
      <BottomBar login={login} />
    </div>
  );
}
