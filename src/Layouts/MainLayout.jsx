import React from 'react'
import TopBar from '../Component/SayHello/SayHello'
import BottomBar from '../Container/BottomBar/BottomBar'
import LeftSideBar from '../Container/LeftSideBar/LeftSideBar'
import RightSlideBar from '../Container/RightSlide/RightSlideBar'

export default function MainLayout({ children }) {
  return (
    <div>
        <TopBar goToChat={goToChat} page={`${props.page}-top-bar`} login={login} />
        <LeftSideBar login={login} page={props.page}/>
        <div>{ children }</div>
        <RightSlideBar ref={chatRef} login={login}/>
        <BottomBar login={login} page={props.page} />
    </div>
  )
}
