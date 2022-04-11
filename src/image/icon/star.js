import './icon.css';
import star from './svg file/Star.svg';
import starFill from './svg file/Star_fill.svg';

function StarIcon(props){
    let ret = <img src={star} />
    
    if(props.diKlik === "true"){
        ret = <img src={starFill} />
    }
    return(
        <>{ret}</>
    );
}

export default StarIcon; 