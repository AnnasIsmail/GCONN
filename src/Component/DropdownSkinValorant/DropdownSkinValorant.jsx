import React, { Component } from 'react';
import { Dropdown } from 'semantic-ui-react';
import './DropdownSkinValorant.css';

let options = [];
let value = [];

class DropdownSkinValorant extends Component {
  state = { options , value }

componentDidMount(){
  fetch(`https://valorant-api.com/v1/weapons/skins`)
  .then((response) => response.json())
  .then((res)=>{
    let addArray = [];
    res.data.map((data , index)=>{
      if(data.displayName !== 'Random Favorite Skin'){
        let dataPush = {key: data.uuid, text: data.displayName, value:data.uuid}
        addArray.push(dataPush);
      }
    })
    options = addArray;
    this.setState({
      options : addArray,
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
    this.setState({
      value
    })
    this.props.dataSelect(value ,  'skin')
  }
  
  componentWillReceiveProps = () => {
    if(this.props.checkUpdate){
        fetch(`https://gconn-api-node-js.vercel.app/accountDetail/${this.props.checkUpdate._id}`)
        .then((response) => response.json())
        .then((json) => {
          this.setState({
            value: json.data.skin,
          })
        });    
      }

    if(this.props.advanceFilter){
      this.setState({
        value: this.props.advanceFilter,
      })
    }
  }

  render() {

    return (
      <Dropdown
        options={this.state.options}
        placeholder='Choose Skin'
        search
        selection
        fluid
        multiple
        value={this.state.value}
        onAddItem={this.handleAddition}
        onChange={(e,{ value })=>{
          // console.log(value)
          this.handleChange(e,{ value });
          this.sendData(e, { value });
        }}
      />
    )
  }
}

export default DropdownSkinValorant;