import './icon.css';
import home from './svg file/Home.svg';
import homeFill from './svg file/Home_fill.svg';

function HomeIcon(props){
    let ret = <img src={home} />
    if(props.diKlik === "true"){
        ret = <img src={homeFill} />
    }
    return(
        <>{ret}</>
    );
}

export default HomeIcon; 