import React from 'react';
import { Link } from "react-router-dom";
import HomeIcon from '../../image/icon/home';
import MarketIcon from '../../image/icon/market';
import StarIcon from '../../image/icon/star';
import StoreIcon from '../../image/icon/store';
import logoGconn from '../../image/logo-gconn-nobackground.png';
import './NavbarAfterLogin.css';

function NavbarBeforeLogin(props){

    let home  = false;
    let market = false;
    let favorite = false;
    let mystore = false;
    
    if(props.page === "home"){
        home = true
    }else if(props.page === "market"){
        market = true
    }else if(props.page === "favorite"){
        favorite = true
    }else if(props.page === "my-store"){
        mystore = true
    }

    React.useEffect(()=>{
        document.getElementById("HomeAfter").classList.remove('klik');
        document.getElementById("MarketAfter").classList.remove('klik');
        document.getElementById("FavoriteAfter").classList.remove('klik');
        document.getElementById("MyStoreAfter").classList.remove('klik');     
        
        if(props.page === "home"){
            document.getElementById("HomeAfter").classList.add('klik')
        }else if(props.page === "market"){
            document.getElementById("MarketAfter").classList.add('klik')
        }else if(props.page === "favorite"){
            document.getElementById("FavoriteAfter").classList.add('klik')
        }else if(props.page === "my-store"){
            document.getElementById("MyStoreAfter").classList.add('klik')
        }
    })

    return(
        <div className='navbar'>
            <span className='logo-gconn-before-navbar'>
                <img src={logoGconn} alt="" />
                <span>
                    <h1>GCONN</h1>
                    <h3>GAMES ACCOUNT MARKETPLACE</h3>
                </span>
            </span>
            <div className='main'>
                <Link id="HomeAfter" className="link" to="/"><HomeIcon diKlik={home} /> <h3>Home</h3></Link>
                <Link id="MarketAfter" className="link" to='/market' ><MarketIcon diKlik={market} /> <h3>Market</h3></Link>
                <Link id="FavoriteAfter" className="link" to='/favorite' ><StarIcon diKlik={favorite} /> <h3>Favourite</h3></Link>
                <hr className='hrNavbar' />
                <Link id="MyStoreAfter" className='link' to='/mystore' ><StoreIcon diKlik={mystore} /> <h3>My Store</h3></Link>
            </div>
        </div>
    );
}

export default NavbarBeforeLogin;