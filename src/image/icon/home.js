import './icon.css';
import home from './svg file/Home.svg';
import homeFill from './svg file/Home_fill.svg';

function HomeIcon(props){
    let ret = <img src={home} alt='Home-Icon' />
    if(props.diKlik){
        ret = <img src={homeFill} alt='Home-Icon' />
    }
    return(
        <>{ret}</>
    );
}

export default HomeIcon; 