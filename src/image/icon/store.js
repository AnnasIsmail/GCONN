import './icon.css';
import storeFill from './svg file/Store-fill.svg';
import store from './svg file/Store.svg';
import React, { Component }  from 'react';

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