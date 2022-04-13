import './icon.css';
import store from './svg file/Store.svg';
import storeFill from './svg file/Store_fill.svg';

function StoreIcon(props){
    let ret = <img src={store} alt='Store-Icon' />

    if(props.diKlik === "true"){
        ret = <img src={storeFill} alt='Store-Icon' />
    }
    return(
        <>{ret}</>
    );
}

export default StoreIcon; 