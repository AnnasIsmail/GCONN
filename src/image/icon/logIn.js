import './icon.css';
import login from './svg file/Log_In.svg';
import loginFill from './svg file/Log_In_fill.svg';

function LogInIcon(props){
    let ret = <img src={login} />

    if(props.diKlik === "true"){
        ret = <img src={loginFill} />
        
    }
    return(
        <>{ret}</>
    );
}

export default LogInIcon; 