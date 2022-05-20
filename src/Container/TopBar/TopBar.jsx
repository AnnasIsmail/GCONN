import React from "react";
import Button from "../../Component/Button/Button";
import Profile from "../../Component/Profile/Profile";
import SayHello from '../../Component/SayHello/SayHello';
import SearchTextField from "../../Component/SearchTextField/SearchTextField";
import './TopBar.css';

function TopBar(props){
    return(
        <div>
        {
        (props.login)?
            (props.page ==='home-top-bar' || props.page ==='sell-account-top-bar')?
            <div className="top-bar">
                <SayHello Username="Anselma Putri" /><Profile Username="Anselma Putri" /> 
            </div>
            :(props.page === 'market-top-bar' || props.page === 'favorite-top-bar' || props.page === 'my-store-top-bar' || props.page === 'detail-produk-top-bar')?
            <div className="top-bar">
                <SearchTextField /><Profile Username="Anselma Putri" />  
            </div>
            :(props.page === 'my-profile-top-bar')?
            <div className="top-bar">
                <div></div> <Profile Username="Anselma Putri" />  
            </div>
            :
            <div className="top-bar">
                
            </div>
        :
            (props.page === 'home-top-bar')?
            <div className="top-bar">
                <SayHello Username="Please Do Sign In or Sign Up" /><Button text='Sign In' additionalClass='sign-in-button'/> 
            </div>
            :(props.page === 'market-top-bar')?
            <div className="top-bar">
                <SearchTextField /> <Button text='Sign In' additionalClass='sign-in-button'/> 
            </div>
            :
            <div className="top-bar">
                
            </div>
        }
        </div>
    );
};

export default TopBar;