import $ from 'jquery';
import React from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import { Dropdown, Icon } from 'semantic-ui-react';

import ArrowDown from '../../image/icon/svg file/arrow_down.svg';
import './Profile.css';

function Profile(props){
    let widthH1 = React.useRef(null)
    const [cookies, setCookie, removeCookie] = useCookies();
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
                let width;
                try {
                    width = widthH1.current.offsetWidth;
                } catch (error) {
                    
                }
                $(".profile-responsive").css("width", width);
            }
        });

        $(document).mouseup(function(e) {
            var profile = $(".profile");

            if (!profile.is(e.target) && profile.has(e.target).length === 0) {
                if(window.innerWidth < 730){
                    $(".profile-responsive").animate({width: 0}, 500)
                }
            }
        });
    })

    let [statusShape , setStatusShape] = React.useState();
    let [statusColor , setStatusColor] = React.useState();
    let [statusDescription , setStatusDescription] = React.useState();

    React.useEffect(()=>{
        const status = 'Online';
        if(status === 'Online'){
            setStatusShape('circle');
            setStatusColor('green');
            setStatusDescription('Online');
        }else if(status === 'Busy'){
            setStatusShape('bell slash');
            setStatusColor('red');
            setStatusDescription('Busy');
        }else if(status === 'Offline'){
            setStatusShape('circle outline');
            setStatusColor('grey');
            setStatusDescription('Offline');
        }
    },[]);

    const changeStatus =(shape, color, description)=>{
        localStorage.status = description;
        setStatusShape(shape);
        setStatusColor(color);
        setStatusDescription(description);
    }
    
    let profileContainer = (
        <div className='profile'>
            <img src={(props.profile.photo !== "")? props.profile.photo : "https://react.semantic-ui.com/images/wireframe/image.png"} alt="" />
            <span className='profile-responsive'>
                {(props.profile.fullName.indexOf(" ") === -1)?
                    <h1 ref={widthH1} >{props.profile.fullName}</h1>
                :
                    <h1 ref={widthH1} >{props.profile.fullName.slice(0 , props.profile.fullName.indexOf(" "))}</h1>
                }
                <div className='status'><Icon name={statusShape} color={statusColor} />{statusDescription}</div>
            </span>
            <img src={ArrowDown} alt="" />
        </div>
    )
        
    const navigasi = useNavigate();
    
    const NavigateTo =(to)=>{
        navigasi(to)
    }

    function goToChatAdmin(){
        console.log('json')

        const currentdate = new Date(); 
        const dateTime = "" + (currentdate.getMonth()+1) + "/"
                + currentdate.getDate()  + "/" 
                + currentdate.getFullYear() + " "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();

            fetch(`https://gconn-api-node-js.vercel.app/addChatAdmin`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                idAdmin: '63cd05b7c724b8a0b9cfef44',
                myID: cookies.Cr787980,
                role: 'Admin',
                fullName: props.profile.fullName,
                dateTime
            })
        })
        .then((response) => response.json())
        .then((json) => {
            props.goToChat(json);
        });   
    }

    return(
            <Dropdown className='noselect' trigger={profileContainer} >
                <Dropdown.Menu id="menuProfile">
                <Dropdown.Header icon="user" content="Profile" />
                <Dropdown.Divider />
                <Dropdown.Item icon="edit" text="My Profile" onClick={()=>NavigateTo('/myprofile')} />
                <Dropdown.Divider />
                <Dropdown.Header icon="shopping bag" content="Seller" />
                <Dropdown.Divider />
                <Dropdown.Item icon="edit" text="My Seller Profile" onClick={()=>NavigateTo('/mystore')} />
                <Dropdown.Item icon="tag" text="Sell Account" onClick={()=>NavigateTo('/choosegamesell/sellaccountvalorant')} />
                {/* <Dropdown.Divider />
                <Dropdown.Header icon="bullhorn" content="Status" />
                <Dropdown.Divider />
                <Dropdown.Item  icon="circle" color='green' text="Online" onClick={()=>changeStatus('circle','green','Online')} />
                <Dropdown.Item  icon="bell slash" color='red' text="Busy" onClick={()=>changeStatus('bell slash','red','Busy')} />
                <Dropdown.Item  icon="circle outline" color='grey' text="Offline" onClick={()=>changeStatus('circle outline','grey','Offline')} /> */}
                <Dropdown.Divider />
                <Dropdown.Item icon="talk" text="Contact Admin" onClick={goToChatAdmin} />
                <Dropdown.Item icon="sign-out alternate" text="Sign Out" onClick={()=>{
                    removeCookie('Cr787980');
                    NavigateTo('/');
                    // window.location.reload();
                }} />
                </Dropdown.Menu>
            </Dropdown>
    );
}

export default Profile;