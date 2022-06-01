import React from 'react';
import { Link } from "react-router-dom";
import HomeIcon from '../../image/icon/home';
import MarketIcon from '../../image/icon/market';
import StarIcon from '../../image/icon/star';
import StoreIcon from '../../image/icon/store';
import './NavbarResponsive.css';

function NavbarResponsiveAfter(props){
    
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
        document.getElementById("HomeAfterResponsive").classList.remove('klik');
        document.getElementById("MarketAfterResponsive").classList.remove('klik');
        document.getElementById("FavoriteAfterResponsive").classList.remove('klik');
        document.getElementById("MyStoreAfterResponsive").classList.remove('klik');     
        
        if(props.page === "home"){
            document.getElementById("HomeAfterResponsive").classList.add('klik')
        }else if(props.page === "market"){
            document.getElementById("MarketAfterResponsive").classList.add('klik')
        }else if(props.page === "favorite"){
            document.getElementById("FavoriteAfterResponsive").classList.add('klik')
        }else if(props.page === "my-store"){
            document.getElementById("MyStoreAfterResponsive").classList.add('klik')
        }
    })

    return(
        <div className='navbar-responsive-after'>
            <Link id="HomeAfterResponsive" className="link" to="/"><HomeIcon diKlik={home} /></Link>
            <Link id="MarketAfterResponsive" className="link" to='/market' ><MarketIcon diKlik={market} /></Link>
            <Link id="FavoriteAfterResponsive" className="link" to='/favorite' ><StarIcon diKlik={favorite} /></Link>
            <Link id="MyStoreAfterResponsive" className='link' to='/mystore' ><StoreIcon diKlik={mystore} /></Link>
        </div>
    );
}

export default NavbarResponsiveAfter;