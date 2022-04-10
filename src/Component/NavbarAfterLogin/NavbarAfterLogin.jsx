import HomeIcon from '../../image/icon/home';
import LogInIcon from '../../image/icon/logIn';
import MarketIcon from '../../image/icon/market';
import SignUpIcon from '../../image/icon/SignUp';
import StarIcon from '../../image/icon/star';
import StoreIcon from '../../image/icon/store';
import logoGconn from '../../image/logo-gconn-nobackground.png';
import './NavbarBeforeLogin.css';

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
            <div><HomeIcon diKlik="true" /> <h3>Home</h3></div>
            <div><MarketIcon diKlik="false" /> <h3>Market</h3></div>
            <div><StarIcon diKlik="true" /> <h3>Favourite</h3></div>
            <div><LogInIcon diKlik="false" /> <h3>Log In</h3></div>
            <div><SignUpIcon diKlik="false" /> <h3>Sign Up</h3></div>
            <div><StoreIcon diKlik="false" /> <h3>My Store</h3></div>
        </div>
    );
}

export default NavbarBeforeLogin;