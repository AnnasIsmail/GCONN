import ArrowDown from '../../image/icon/svg file/arrow_down.svg';
import photoAnsel from '../../image/image ansell.png';
import './Profile.css';

function Profile(props){
    return(
        <div className='profile'>
            <img src={photoAnsel} alt="" />
            <span>
                <h1>{props.Username}</h1>
                <div><div></div> Online</div>
            </span>
            <img src={ArrowDown} alt="" />
        </div>
    );
}

export default Profile;