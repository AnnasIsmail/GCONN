import React, { Component } from 'react'
import { Dropdown } from 'semantic-ui-react'
import './DropdownSkinPUBG.css'

const options = [
  { key: 'The Fool M416', text: 'The Fool M416', value: 'The Fool M416' },
  { key: 'M416 Glacier', text: 'M416 Glacier', value: 'M416 Glacier' },
  { key: 'M16A Blood and Bones', text: 'M16A Blood and Bones', value: 'M16A Blood and Bones' },
  { key: 'AKM Glacier', text: 'AKM Glacier', value: 'AKM Glacier' },
  { key: 'AWM Field Commander', text: 'AWM Field Commander', value: 'AWM Field Commander' },
]

class DropdownSkinPUBG extends Component {
  state = { options }

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
        value={currentValues}
        onAddItem={this.handleAddition}
        onChange={this.handleChange}
      />
    )
  }
}

export default DropdownSkinPUBG;