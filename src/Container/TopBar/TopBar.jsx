import React from 'react';
import { useCookies } from 'react-cookie';
import Button from "../../Component/Button/Button";
import Profile from "../../Component/Profile/Profile";
import SayHello from '../../Component/SayHello/SayHello';
import SearchTextField from "../../Component/SearchTextField/SearchTextField";
import './TopBar.css';

function TopBar(props){
    
    const [cookies, setCookie, removeCookie] = useCookies();
    const [profile , setProfile] = React.useState({});
    const [profileComp , setProfileComp] = React.useState();

    React.useEffect(() => {
        if(props.login){
            fetch('https://gconn-api-node-js.vercel.app/userData', {
                method: 'POST', // or 'PUT'
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({_id: cookies.Cr787980}),
                }) 
            .then((response) => response.json())
            .then(function (response) {
                if(response.status === 200){
                    setProfile(response.data);
                    setProfileComp(<Profile profile={response.data} />)
                }else{
                    removeCookie('Cr787980');
                }
            });
        }
    },[]);

    return(
        <div>
        {
        (props.login)?
            (props.page ==='bill-top-bar' || props.page ==='home-top-bar' || props.page ==='sell-account-top-bar' || props.page === 'favorite-top-bar' || props.page === 'my-store-top-bar' || props.page === 'detail-produk-top-bar' || props.page === 'detail-product-top-bar' || props.page === 'payment-top-bar')?
            <div className="top-bar">
                <SayHello login={props.login} profile={profile} />{profileComp}
            </div>
            :(props.page === 'market-top-bar' )?
            <div className="top-bar">
                <SearchTextField />{profileComp} 
            </div>
            :(props.page === 'my-profile-top-bar')?
            <div className="top-bar">
                <div></div> {profileComp}
            </div>
            :
            <div className="top-bar">
                
            </div>
        :
            (props.page === 'home-top-bar')?
            <div className="top-bar">
                <SayHello /><Button text='Sign In' additionalClass='sign-in-button' onclick='/sign-in' /> 
            </div>
            :(props.page === 'market-top-bar')?
            <div className="top-bar">
                <SearchTextField /> <Button text='Sign In' additionalClass='sign-in-button' onclick='/sign-in' /> 
            </div>
            :
            <div className="top-bar">
                
            </div>
        }
        </div>
    );
};

export default TopBar;