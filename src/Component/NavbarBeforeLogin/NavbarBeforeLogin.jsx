import React from 'react';
import { findDOMNode } from 'react-dom';
import { Link } from "react-router-dom";
import HomeIcon from '../../image/icon/home';
import LogInIcon from '../../image/icon/logIn';
import MarketIcon from '../../image/icon/market';
import SignUpIcon from '../../image/icon/SignUp';
import logoGconn from '../../image/logo-gconn-nobackground.png';
import './NavbarBeforeLogin.css';

function NavbarBeforeLogin(){

    function diklik(e){
        console.log(findDOMNode(e.parent));
    }
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
                <Link className="link" to="/" onClick={diklik}><HomeIcon diKlik={false} /> <h3>Home</h3></Link>
                <Link className="link" to="/market"><MarketIcon diKlik={false} /> <h3>Market</h3></Link>
                <hr className='hrNavbar' />
                <Link className="link" to="/sign-in" ><LogInIcon diKlik={false} /> <h3>Sign In</h3></Link>
                <Link className="link" to="/sign-up" ><SignUpIcon diKlik={false} /> <h3>Sign Up</h3></Link>
            </div>
        </div>
    );
}

export default NavbarBeforeLogin;