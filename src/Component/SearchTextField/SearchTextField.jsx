import React from "react";
import Button from "../../Component/Button/Button";
import SearchIcon from "../../image/icon/Search";
import './SearchTextField.css';

function SearchTextField(){

    let [stateUbahInput, setStateUbahInput] = React.useState(false);

    const ubahInput =()=>{
        const inputSearchTextField = document.getElementById('inputSearchTextField').value;
        if(inputSearchTextField != ''){
            setStateUbahInput(true)
        }else{
            setStateUbahInput(false)
        }
    }

    return(
        <div className="search-text-field">
            <SearchIcon />
            <input id="inputSearchTextField" type="text" placeholder="Search" onChange={ubahInput}/>
            {(stateUbahInput === true)?
            <Button text='Search' additionalClass='search-button'/> 
            :
            <></>
            }
        </div>
    );
}

export default SearchTextField;