import { Link } from "react-router-dom";
import HomeIcon from '../../image/icon/home';
import MarketIcon from '../../image/icon/market';
import StarIcon from '../../image/icon/star';
import StoreIcon from '../../image/icon/store';
import logoGconn from '../../image/logo-gconn-nobackground.png';
import './NavbarAfterLogin.css';

function NavbarBeforeLogin(){

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
                <Link className="link" to="/coba"><HomeIcon diKlik="false" /> <h3>Home</h3></Link>
                <div><MarketIcon diKlik="false" /> <h3>Market</h3></div>
                <div><StarIcon diKlik="false" /> <h3>Favourite</h3></div>
                <hr className='hrNavbar' />
                <div className='klik'><StoreIcon diKlik="true" /> <h3>My Store</h3></div>
            </div>
        </div>
    );
}

export default NavbarBeforeLogin;