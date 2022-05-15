import './icon.css';
import login from './svg file/Log_In.svg';
import loginFill from './svg file/Log_In_fill.svg';

function LogInIcon(props){
    let ret = <img src={login} alt='Login-Icon' />

    if(props.diKlik){
        ret = <img src={loginFill} alt='Login-Icon' />
        
    }
    return(
        <>{ret}</>
    );
}

export default LogInIcon; 