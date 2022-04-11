import React from "react";
import './SayHello.css';

function TopBar(props){
    let [date, setDate] = React.useState(new Date().toLocaleTimeString());
    setInterval(() => {
        setDate(new Date().toLocaleTimeString());
    }, 1000);
    return(
        <div className="say-hello">
            <h1>Hello, {props.Username} </h1>
            <h3>Server Time : {date}  </h3>
        </div>
    );
};

export default TopBar;