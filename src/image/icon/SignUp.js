import './icon.css';

function SignUpIcon(props){
    let ret = <svg viewBox="0 0 35 34" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="14.5833" cy="11.3333" rx="5.83333" ry="5.66667" stroke="white" stroke-width="2" stroke-linecap="round"/>
    <path d="M23.0352 28.9667C22.5367 27.1593 21.4382 25.5622 19.91 24.4231C18.3819 23.284 16.5096 22.6666 14.5834 22.6666C12.6572 22.6666 10.7849 23.284 9.25671 24.4231C7.72858 25.5622 6.63005 27.1593 6.13152 28.9667" stroke="white" stroke-width="2" stroke-linecap="round"/>
    <path d="M27.7084 14.1666L27.7084 22.6666" stroke="white" stroke-width="2" stroke-linecap="round"/>
    <path d="M32.0834 18.4166L23.3334 18.4166" stroke="white" stroke-width="2" stroke-linecap="round"/>
    </svg>
    if(props.diKlik === "true"){
        ret = <svg viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="14.5833" cy="11.6667" r="7.29167" fill="white"/>
        <path d="M27.7084 14.5834L27.7084 23.3334" stroke="white" stroke-width="2" stroke-linecap="round"/>
        <path d="M32.0834 18.9584L23.3334 18.9584" stroke="white" stroke-width="2" stroke-linecap="round"/>
        <path d="M25.1888 29.6816C25.7598 29.5522 26.1019 28.9593 25.8598 28.4262C25.0646 26.6746 23.71 25.135 21.9361 23.9845C19.8267 22.6165 17.2421 21.875 14.5833 21.875C11.9245 21.875 9.33993 22.6165 7.23054 23.9845C5.45654 25.135 4.10198 26.6745 3.30675 28.4262C3.06471 28.9593 3.40677 29.5522 3.97781 29.6815L5.74834 30.0825C11.5647 31.3997 17.6019 31.3997 23.4182 30.0825L25.1888 29.6816Z" fill="white"/>
        </svg>
    }
    return(
        <>{ret}</>
    );
}

export default SignUpIcon; 