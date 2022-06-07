import $ from 'jquery';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Dropdown, Icon } from 'semantic-ui-react';
import ArrowDown from '../../image/icon/svg file/arrow_down.svg';
import './Profile.css';

function Profile(props){

    let widthH1 = React.useRef(null)
    React.useEffect(()=>{
        $(".profile").click(()=>{
            if(window.innerWidth < 700){
                if($("#menuProfile").hasClass("visible") === true){
                    $(".profile-responsive").animate({width: 0}, 500);
                    $(".profile-responsive").clearQueue();
                }else{
                    $(".profile-responsive").animate({width: widthH1.current.offsetWidth}, 500);
                    $(".profile-responsive").clearQueue();
                }
            }
        })


        window.addEventListener('resize', (event) => {

            if(window.innerWidth < 730){
                if( $("#menuProfile").hasClass("visible") === false){
                    $(".profile-responsive").css("width", 0);
                }
            }else{
                $(".profile-responsive").css("width", widthH1.current.offsetWidth);
            }
        });

        $(document).mouseup(function(e) {
            var profile = $(".profile");

            if (!profile.is(e.target) && profile.has(e.target).length === 0) {
                if(window.innerWidth < 700){
                    $(".profile-responsive").animate({width: 0}, 500)
                }
            }
        });
    })

    let profileContainer = (
        <div className='profile'>
            <img src={localStorage.userPhoto} alt="" />
            <span className='profile-responsive'>
                <h1 ref={widthH1} >{localStorage.fullName}</h1>
                <div className='status'><Icon name="circle" color='green' />Online</div>
            </span>
            <img src={ArrowDown} alt="" />
        </div>
    )
        
    const navigasi = useNavigate();
    
    const NavigateTo =(to)=>{
        navigasi(to)
    }


    return(
            <Dropdown className='noselect' trigger={profileContainer} >
                <Dropdown.Menu id="menuProfile">
                <Dropdown.Header icon="user" content="Profile" />
                <Dropdown.Divider />
                <Dropdown.Item  icon="edit" text="Edit Profile" description="2 new" onClick={()=>NavigateTo('/myprofile')} />
                <Dropdown.Item  icon="bell" text="Notification" description="2 new" />
                <Dropdown.Divider />
                <Dropdown.Header icon="shopping bag" content="Seller" />
                <Dropdown.Divider />
                <Dropdown.Item  icon="edit" text="Edit Seller Profile" description="2 new" onClick={()=>NavigateTo('/mystore')} />
                <Dropdown.Item  icon="bell" text="Notification" description="2 new" />
                <Dropdown.Item  icon="tag" text="Sell Account" description="2 new" onClick={()=>NavigateTo('/choosegamesell')} />
                <Dropdown.Divider />
                <Dropdown.Header icon="bullhorn" content="Status" />
                <Dropdown.Divider />
                <Dropdown.Item  icon="circle" color='green' text="Online" />
                <Dropdown.Item  icon="bell slash" color='red' text="Busy" />
                <Dropdown.Item  icon="circle outline" color='red' text="Offline" />
                <Dropdown.Divider />
                <Dropdown.Item  icon="setting" text="Settings" />
                <Dropdown.Item  icon="sign-out alternate" text="Sign Out" onClick={()=>{
                    localStorage.clear();
                    NavigateTo('/');
                    window.location.reload();
                }} />
                </Dropdown.Menu>
            </Dropdown>
    );
}

export default Profile;