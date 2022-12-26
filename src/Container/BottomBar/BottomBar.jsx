import React from 'react';
import NavbarResponsiveAfter from '../../Component/NavbarResponsive/NavbarResponsiveAfter';
import NavbarResponsiveBefore from '../../Component/NavbarResponsive/NavbarResponsiveBefore';
import './BottomBar.css';

function BottomBar(props){
    return(
        <div className="bottom-bar">
            {(props.login)?
            <NavbarResponsiveAfter page={props.page} />
            :
            <NavbarResponsiveBefore page={props.page} />
            }
        </div>
    );
}

export default BottomBar;