import React from 'react';
import HomeIcon from '../../image/icon/home';
import LogInIcon from '../../image/icon/logIn';
import MarketIcon from '../../image/icon/market';
import SignUpIcon from '../../image/icon/SignUp';
import logoGconn from '../../image/logo-gconn-nobackground.png';
import './NavbarBeforeLogin.css';

function NavbarBeforeLogin(){

    return(
        <div id='navbar' className='navbar'>
            <div className='logo-gconn-before-navbar'>
                <img src={logoGconn} alt="" />
                <span>
                    <h1>GCONN</h1>
                    <h3>GAMES ACCOUNT MARKETPLACE</h3>
                </span>
            </div>
            <div className='main'>
                <div className='klik'><HomeIcon diKlik="true" /> <h3>Home</h3></div>
                <div><MarketIcon diKlik="false" /> <h3>Market</h3></div>
                <span><hr /></span>
                <div><LogInIcon diKlik="false" /> <h3>Sign In</h3></div>
                <div><SignUpIcon diKlik="false" /> <h3>Sign Up</h3></div>
            </div>
        </div>
    );
}

export default NavbarBeforeLogin;