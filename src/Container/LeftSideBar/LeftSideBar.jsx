import $ from 'jquery';
import React from 'react';
import NavbarAfterLogin from '../../Component/NavbarAfterLogin/NavbarAfterLogin';
import NavbarBeforeLogin from '../../Component/NavbarBeforeLogin/NavbarBeforeLogin';
import './LeftSideBar.css';

function LeftSideBar(props){

    React.useEffect(function(){
        let hrNav =  $('.hrNavbar');
        let topBar = $('.top-bar');
        let LeftSideBar = $("#LeftSideBar");

        LeftSideBar.hover(function(){
            $(this).animate({'width': '200px'}, 300);
            hrNav.animate({'width': '160px'}, 300);
            $(this).clearQueue();
            hrNav.clearQueue();
        },function(){
            $(this).animate({'width': '60px'}, 300);
            hrNav.animate({'width': '30px'}, 300);
            $(this).clearQueue();
            hrNav.clearQueue();
        });

        LeftSideBar.mouseleave(function(){
            $(this).animate({'width': '60px'}, 300);
            hrNav.animate({'width': '30px'}, 300);
            $(this).clearQueue();
            hrNav.clearQueue();
        });
    });

    return(
    <div className='LeftSideBar' id='LeftSideBar'>
        {(props.login)?
        <NavbarAfterLogin page={props.page} />
        :
        <NavbarBeforeLogin page={props.page} />
        }
    </div>
    );
}

export default LeftSideBar;