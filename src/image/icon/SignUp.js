import React from 'react';
import './icon.css';
import signUp from './svg file/Sign_Up.svg';
import signUpFill from './svg file/Sign_Up_fill.svg';

function SignUpIcon(props){
    let ret = <img src={signUp} alt='Sign-Up-Icon' />

    if(props.diKlik){
        ret = <img src={signUpFill} alt='Sign-Up-Icon' />
    }
    return(
        <>{ret}</>
    );
}

export default SignUpIcon; 