import React from 'react';
import { useCookies } from 'react-cookie';
import { Route, Routes } from "react-router-dom";
import { io } from 'socket.io-client';
import './App.css';
import AddSellAccount from './Pages/AddSellAccount';
import DetailTransaction from './Pages/DetailTransaction';
import DetailProduct from './Pages/Detailproduct';
import EditSellAccount from './Pages/EditSellAccount';
import Favorite from './Pages/Favorite';
import Home from './Pages/Home';
import Market from './Pages/Market';
import MyProfile from './Pages/MyProfile';
import MyStore from './Pages/MyStore';
import Payment from './Pages/Payment';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/Signup';

export const SocketIO = React.createContext();

function App(props) {
  const [cookies, setCookie, removeCookie] = useCookies();
  let login = false;
  if(cookies.Cr787980){
    login = true;
  }

  const chatRef = React.useRef();

  const goToChat = (data) => {
    chatRef.current.openDirectChat(data);
  }

  return (
    <SocketIO.Provider value={io("https://socket-gconn.annasismail.repl.co")}>
      <div className="App">
      <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/market' element={<Market />} />
            <Route path='/detail-product:id' element={<DetailProduct />} />
            <Route path='/detail-product:id/payment' element={<Payment />} />
            <Route path='/detail-transaction:id' element={<DetailTransaction />} />
            <Route path='/favorite' element={<Favorite />} />
            <Route path='/my-store' element={<MyStore />} />
            <Route path='/my-profile' element={<MyProfile />} />
            <Route path='/add-sell-account' element={<AddSellAccount />} />
            <Route path='/edit-sell-account/:id' element={<EditSellAccount />} />
            <Route path='sign-in' element={<SignIn />} />
            <Route path='sign-up' element={<SignUp />} />
        </Routes>
      </div>
    </SocketIO.Provider>
  );
}

export default App;
