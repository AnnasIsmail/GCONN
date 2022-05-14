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
            <Route path='/' element={<App login='true' page='home' />} />
            <Route path='/market' element={<App login='true' page='market' />} />
        </Routes>
        
    </BrowserRouter>
);

reportWebVitals();