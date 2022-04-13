import ArrowDown from '../../image/icon/svg file/arrow_down.svg';
import photoAnsel from '../../image/image ansell.png';
import './ProfileChat.css';

function ProfileChat(props){
    return(
        <div className='ProfileChat'>
            <img src={ArrowDown} alt="" />
            <img src={photoAnsel} alt="" />
            <span>
                <h1>{props.Username}</h1>
                <div><div></div> Online</div>
            </span>
            <span className='garis'><hr /></span>
        </div>
    );
}

export default ProfileChat;