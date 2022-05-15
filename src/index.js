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
            <Route path='/' element={<App login={false} page='home' />} />
            <Route path='/market' element={<App login={false} page='market' />} />
            <Route path='/favorite' element={<App login={false} page='favorite' />} />
            <Route path='/mystore' element={<App login={false} page='my-store' />} />
            <Route path='sign-in' element={<App login={false} page='sign-in' />} />
            <Route path='sign-up' element={<App login={false} page='sign-up' />} />
        </Routes>
        
    </BrowserRouter>
);

reportWebVitals();