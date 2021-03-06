import React from "react";
import './SayHello.css';

function TopBar(props){
    let [date, setDate] = React.useState(null);
    let dateNow =()=> {
        let date = new Date();
        const month = ['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DES'];
        setDate(`${date.getDate()} ${month[date.getMonth()]} ${date.getFullYear()} - ${date.toLocaleTimeString()}`);
    }

    React.useEffect(()=>{
        dateNow();
    })

    setInterval(() => {
        dateNow();
    }, 1000);
    return(
        <div className="say-hello">
            {(localStorage.login)?
            <h1>Hello, {localStorage.fullName} </h1>
            :
            <h1>Hello, Please Do Sign In or Sign Up </h1>
            }
            <h3>Date-Time : {date}  </h3>
        </div>
    );
};

export default TopBar;