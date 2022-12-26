import './icon.css';
import market from './svg file/Shop.svg';
import marketFill from './svg file/Shop_fill.svg';
import React, { Component }  from 'react';

function Market(props){
    let ret = <img src={market} alt='Market-Icon' />
    if(props.diKlik){
        ret = <img src={marketFill} alt='Market-Icon' />
    }
    return(
        <>{ret}</>
    );
}

export default Market;