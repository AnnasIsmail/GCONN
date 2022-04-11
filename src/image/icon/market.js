import './icon.css';
import market from './svg file/Shop.svg';
import marketFill from './svg file/Shop_fill.svg';

function Market(props){
    let ret = <img src={market} />
    if(props.diKlik === "true"){
        ret = <img src={marketFill} />
    }
    return(
        <>{ret}</>
    );
}

export default Market;