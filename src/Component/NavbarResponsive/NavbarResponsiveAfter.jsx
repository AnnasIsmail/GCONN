import $ from 'jquery';
import React from 'react';
import { Link } from "react-router-dom";
import ChatIcon from '../../image/icon/chat';
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
    let [chat , setChat] = React.useState(false)

    if(props.page === "home"){
        home = true
    }else if(props.page === "market"){
        market = true
    }else if(props.page === "favorite"){
        favorite = true
    }else if(props.page === "my-store"){
        mystore = true
    }
    const openChatBar=()=>{
        let RightSideBar = $('.RightSideBar');
        let hrRightSideBar = $('.hrRightSlideBar');
        
        if( RightSideBar.css('right') === '10px'){
            hrRightSideBar.animate({'width':'40px'},500);
            RightSideBar.animate({'right':'-400px'},500);
            RightSideBar.clearQueue();
            hrRightSideBar.clearQueue();
        }else{
            hrRightSideBar.animate({'width':'365px'},500);
            RightSideBar.animate({'right':'10px'},500);
            RightSideBar.clearQueue();
            hrRightSideBar.clearQueue();
        }
    }

    React.useEffect(()=>{

    window.addEventListener('resize', (event) => {
        let RightSideBar = $('.RightSideBar');
        
        if(window.innerWidth < 730){
            if(RightSideBar.css('right') == '10px'){
                setChat(true)
                RightSideBar.css('right','10px');
            }else {
                setChat(false)
                RightSideBar.css('right','-400px');
            }
        }else{
            if(RightSideBar.css('right') == '10px'){
                RightSideBar.css('right','10px');
            }else{
                RightSideBar.css('right','-330px');
            }
            }
    });

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

    });

    return(
        <div className='navbar-responsive-after'>
            <Link id="HomeAfterResponsive" className="link" to="/"><HomeIcon diKlik={home} /></Link>
            <Link id="MarketAfterResponsive" className="link" to='/market' ><MarketIcon diKlik={market} /></Link>
            <Link id="FavoriteAfterResponsive" className="link" to='/favorite' ><StarIcon diKlik={favorite} /></Link>
            <Link id="MyStoreAfterResponsive" className='link' to='/mystore' ><StoreIcon diKlik={mystore} /></Link>
            <Link id="ChatAfterResponsive" onClick={()=>{openChatBar(); setChat((chat)?false:true)}} className='link' to="" ><ChatIcon diKlik={chat} /></Link>
        </div>
    );
}

export default NavbarResponsiveAfter;