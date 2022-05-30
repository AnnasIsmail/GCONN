import React, { Component } from 'react';
import { Dropdown } from 'semantic-ui-react';
import './DropdownSkinValorant.css';

let options = [];

class DropdownSkinValorant extends Component {
  state = { options }

componentDidMount(){
  fetch(`https://valorant-api.com/v1/weapons/skins`)
  .then((response) => response.json())
  .then((res)=>{
    let addArray = [];
    res.data.map((data , index)=>{
      let dataPush = {key: data.uuid, text: data.displayName, value:data.uuid}
      addArray.push(dataPush);
    })
    options = addArray;
    this.setState({
      options : addArray 
    })
  })
}

  handleAddition = (e, { value }) => {
    this.setState((prevState) => ({
      options: [{ text: value, value }, ...prevState.options],
    }))
  }

  handleChange = (e, { value }) => this.setState({ currentValues: value })

  sendData =(e , {value})=>{
    this.props.dataSelect(value ,  'skin')
  }

  render() {
    const { currentValues } = this.state

    return (
      <Dropdown
        options={this.state.options}
        placeholder='Choose Skin'
        search
        selection
        fluid
        multiple
        
        onAddItem={this.handleAddition}
        onChange={(e,{ value })=>{
          this.handleChange(e,{ value });
          this.sendData(e, {value});
        }}
      />
    )
  }
}

export default DropdownSkinValorant;