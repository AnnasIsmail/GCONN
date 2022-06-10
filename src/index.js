import 'bootstrap/dist/css/bootstrap.min.css';
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
            <Route path='/' element={<App  page='home' />} />
            <Route path='/market' element={<App  page='market' />} />
            <Route path='/detailproduk:id' element={<App  page='detail-product' />} />
            <Route path='/detailproduk:id/payment' element={<App  page='payment' />} />
            <Route path='/favorite' element={<App  page='favorite' />} />
            <Route path='/mystore' element={<App  page='my-store' />} />
            <Route path='/myprofile' element={<App  page='my-profile' />} />
            <Route path='/choosegamesell' element={<App  page='choose-game-sell' />} />
            <Route path='/choosegamesell/:game' element={<App  page='sell-account' />} />
            <Route path='sign-in' element={<App page='sign-in' />} />
            <Route path='sign-up' element={<App  page='sign-up' />} />
        </Routes>
        
    </BrowserRouter>
);

reportWebVitals();