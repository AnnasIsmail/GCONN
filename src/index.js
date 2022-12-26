import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<App  page='home' />} />
            <Route path='/market' element={<App  page='market' />} />
            <Route path='/detailproduk:id' element={<App  page='detail-product' />} />
            <Route path='/detailproduk:id/payment' element={<App  page='payment' />} />
            <Route path='/detaiTransaksi:id' element={<App  page='bill' />} />
            <Route path='/favorite' element={<App  page='favorite' />} />
            <Route path='/mystore' element={<App  page='my-store' />} />
            <Route path='/myprofile' element={<App  page='my-profile' />} />
            <Route path='/choosegamesell' element={<App  page='choose-game-sell' />} />
            <Route path='/choosegamesell/:game' element={<App  page='sell-account' />} />
            <Route path='/editgamesell/:id' element={<App  page='sell-account' />} />
            <Route path='sign-in' element={<App page='sign-in' />} />
            <Route path='sign-up' element={<App  page='sign-up' />} />
        </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
