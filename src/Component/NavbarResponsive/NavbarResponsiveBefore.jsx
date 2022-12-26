import React from 'react';
import { Link } from "react-router-dom";
import HomeIcon from '../../image/icon/home';
import LogInIcon from '../../image/icon/logIn';
import MarketIcon from '../../image/icon/market';
import SignUpIcon from '../../image/icon/SignUp';
import './NavbarResponsive.css';

function NavbarResponsiveBefore(props){

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
        document.getElementById("HomeBeforeResponsive").classList.remove('klik');
        document.getElementById("MarketBeforeResponsive").classList.remove('klik');
        document.getElementById("SignInBeforeResponsive").classList.remove('klik');
        document.getElementById("SignUpBeforeResponsive").classList.remove('klik');     
        
        if(props.page === "home"){
            document.getElementById("HomeBeforeResponsive").classList.add('klik')
        }else if(props.page === "market"){
            document.getElementById("MarketBeforeResponsive").classList.add('klik')
        }else if(props.page === "sign-in"){
            document.getElementById("SignInBeforeResponsive").classList.add('klik')
        }else if(props.page === "sign-up"){
            document.getElementById("SignUpBeforeResponsive").classList.add('klik')
        }

    })

    return(
        <div className='navbar-responsive-before'>
            <Link id='HomeBeforeResponsive' className="link" to="/" ><HomeIcon diKlik={home} /></Link>
            <Link id='MarketBeforeResponsive' className="link" to="/market"><MarketIcon diKlik={market} /></Link>
            <Link id='SignInBeforeResponsive' className="link" to="/sign-in" ><LogInIcon diKlik={signIn} /></Link>
            <Link id='SignUpBeforeResponsive' className="link" to="/sign-up" ><SignUpIcon diKlik={signUp} /></Link>
        </div>
    );
}

export default NavbarResponsiveBefore;