import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(  
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<App login={true} page='home' />} />
            <Route path='/market' element={<App login={true} page='market' />} />
            <Route path='/detailproduk' element={<App login={true} page='detail-product' />} />
            <Route path='/detailproduk/payment' element={<App login={true} page='payment' />} />
            <Route path='/favorite' element={<App login={true} page='favorite' />} />
            <Route path='/mystore' element={<App login={true} page='my-store' />} />
            <Route path='/myprofile' element={<App login={true} page='my-profile' />} />
            <Route path='/choosegamesell' element={<App login={true} page='choose-game-sell' />} />
            <Route path='/choosegamesell/:game' element={<App login={true} page='sell-account' />} />
            <Route path='sign-in' element={<App login={true} page='sign-in' />} />
            <Route path='sign-up' element={<App login={true} page='sign-up' />} />
        </Routes>
        
    </BrowserRouter>
);

reportWebVitals();