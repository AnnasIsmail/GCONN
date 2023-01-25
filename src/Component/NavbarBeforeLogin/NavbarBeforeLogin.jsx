import React from 'react';
import { Link } from "react-router-dom";
import HomeIcon from '../../image/icon/home';
import LogInIcon from '../../image/icon/logIn';
import MarketIcon from '../../image/icon/market';
import SignUpIcon from '../../image/icon/SignUp';
import logoGconn from '../../image/logo-gconn-nobackground.png';
import './NavbarBeforeLogin.css';

function NavbarBeforeLogin(props){
    let home  = false;
    let market = false;
    let signIn = false;
    let signUp = false;
    
    if(props.page === "home"){
        home = true
    }else if(props.page === "market"){
        market = true
    }else if(props.page === "sign-in"){
        signIn = true
    }else if(props.page === "sign-up"){
        signUp = true
        }

    React.useEffect(()=>{
        document.getElementById("HomeBefore").classList.remove('klik');
        document.getElementById("MarketBefore").classList.remove('klik');
        document.getElementById("SignInBefore").classList.remove('klik');
        document.getElementById("SignUpBefore").classList.remove('klik');     
        
        if(props.page === "home"){
            document.getElementById("HomeBefore").classList.add('klik')
        }else if(props.page === "market"){
            document.getElementById("MarketBefore").classList.add('klik')
        }else if(props.page === "sign-in"){
            document.getElementById("SignInBefore").classList.add('klik')
        }else if(props.page === "sign-up"){
            document.getElementById("SignUpBefore").classList.add('klik')
        }

    })

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
                <Link id='HomeBefore' className="link" to="/" ><HomeIcon diKlik={home} /> <h3>Home</h3></Link>
                <Link id='MarketBefore' className="link" to="/market"><MarketIcon diKlik={market} /> <h3>Market</h3></Link>
                <hr className='hrNavbar' />
                <Link id='SignInBefore' className="link" to="/sign-in" ><LogInIcon diKlik={signIn} /> <h3>Log In</h3></Link>
                <Link id='SignUpBefore' className="link" to="/sign-up" ><SignUpIcon diKlik={signUp} /> <h3>Sign Up</h3></Link>
            </div>
        </div>
    );
}

export default NavbarBeforeLogin;