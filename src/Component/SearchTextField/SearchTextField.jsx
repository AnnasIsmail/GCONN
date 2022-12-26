import React from "react";
import '../../Component/Button/Button.css';
import SearchIcon from "../../image/icon/Search";
import './SearchTextField.css';

function SearchTextField(){

    let [stateUbahInput, setStateUbahInput] = React.useState(false);
    const searchChangeMarket = document.getElementById('searchMarket');
    
    const ubahInput =()=>{
        const inputSearchTextField = document.getElementById('inputSearchTextField').value;
        if(inputSearchTextField != ''){
            setStateUbahInput(true);
        }else{
            setStateUbahInput(false);
            searchChangeMarket.click()
        }
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            searchChangeMarket.click();
        }
      }
    

    return(
        <div className="search-text-field">
            <SearchIcon />
            <input id="inputSearchTextField" autoComplete="off" type="text" placeholder="Search" onChange={ubahInput}  onKeyDown={handleKeyDown}/>
            {(stateUbahInput === true)?
            <button text='Search 'onClick={()=> searchChangeMarket.click()} className='button search-button' >Search</button> 
            :
            <></>
            }
        </div>
    );
}

export default SearchTextField;