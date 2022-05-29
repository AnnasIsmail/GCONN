import React, { Component } from 'react'
import { Dropdown } from 'semantic-ui-react'
import './DropdownSkinPUBG.css'

let options = []

class DropdownSkinPUBG extends Component {
  state = { options }

  componentDidMount(){
    fetch(`http://localhost:8000/skinPUBG`)
    .then((response) => response.json())
    .then((res)=>{
      let addArray = [];
      res.map((data , index)=>{
        let dataPush = {key: data.id, text: data.name, value:data.name}
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
        onChange={this.handleChange}
      />
    )
  }
}

export default DropdownSkinPUBG;