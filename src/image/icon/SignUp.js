import './icon.css';
import signUp from './svg file/Sign_Up.svg';
import signUpFill from './svg file/Sign_Up_fill.svg';

function SignUpIcon(props){
    let ret = <img src={signUp} />

    if(props.diKlik === "true"){
        ret = <img src={signUpFill} />
    }
    return(
        <>{ret}</>
    );
}

export default SignUpIcon; 