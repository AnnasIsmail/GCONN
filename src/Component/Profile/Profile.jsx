import { Link } from 'react-router-dom';
import { Dropdown } from 'semantic-ui-react';
import ArrowDown from '../../image/icon/svg file/arrow_down.svg';
import photoAnsel from '../../image/image ansell.png';
import './Profile.css';

function Profile(props){

    let profileContainer = (
        <div className='profile'>
            <img src={photoAnsel} alt="" />
            <span>
                <h1>{props.Username}</h1>
                <div><div></div> Online</div>
            </span>
            <img src={ArrowDown} alt="" />
        </div>
    )

    return(
            <Dropdown className='noselect' trigger={profileContainer} >
                <Dropdown.Menu>
                <Dropdown.Header icon="user" content="Profile" />
                <Dropdown.Divider />
                <Dropdown.Item  icon="edit" text="Edit Profile" description="2 new" onClick={()=>document.getElementById('linkToMyProfile').click()} />
                <Link id='linkToMyProfile' to='/myprofile'></Link>
                <Dropdown.Item  icon="bell" text="Notification" description="2 new" />
                <Dropdown.Divider />
                <Dropdown.Header icon="shopping bag" content="Seller" />
                <Dropdown.Divider />
                <Dropdown.Item  icon="edit" text="Edit Seller Profile" description="2 new" onClick={()=>document.getElementById('linkToMyStore').click()} />
                <Link id='linkToMyStore' to='/mystore'></Link>
                <Dropdown.Item  icon="bell" text="Notification" description="2 new" />
                <Dropdown.Item  icon="tag" text="Sell Account" description="2 new" />
                <Dropdown.Divider />
                <Dropdown.Header icon="bullhorn" content="Status" />
                <Dropdown.Divider />
                <Dropdown.Item  icon="circle" color='green' text="Online" />
                <Dropdown.Item  icon="bell slash" color='red' text="Busy" />
                <Dropdown.Item  icon="circle outline" color='red' text="Offline" />
                <Dropdown.Divider />
                <Dropdown.Item  icon="setting" text="Settings" />
                <Dropdown.Item  icon="sign-out alternate" text="Sign Out" />
                </Dropdown.Menu>
            </Dropdown>
    );
}

export default Profile;