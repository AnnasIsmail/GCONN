import './icon.css';
import star from './svg file/Star.svg';
import starFill from './svg file/Star_fill.svg';

function StarIcon(props){
    let ret = <img src={star} alt='Star-Icon' />
    
    if(props.diKlik){
        ret = <img src={starFill} alt='Star-Icon' />
    }
    return(
        <>{ret}</>
    );
}

export default StarIcon; 