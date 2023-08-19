import React from 'react';
import './icon.css';
import storeFill from './svg file/Store-fill.svg';
import store from './svg file/Store.svg';

function StoreIcon(props){
    let ret = <img src={store} alt='Store-Icon' />

    if(props.diKlik){
        ret = <img src={storeFill} alt='Store-Icon' />
    }
    return(
        <>{ret}</>
    );
}

export default StoreIcon; 