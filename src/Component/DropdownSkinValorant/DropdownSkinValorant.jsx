import React, { Component } from 'react'
import { Dropdown } from 'semantic-ui-react'
import './DropdownSkinValorant.css'

const options = [
  { key: 'Vandal Prime', text: 'Vandal Prime', value: 'Vandal Prime' },
  { key: 'Vandal Reaver', text: 'Vandal Reaver', value: 'Vandal Reaver' },
  { key: 'Prime Axe', text: 'Prime Axe', value: 'Prime Axe' },
  { key: 'Phantom Ion', text: 'Phantom Ion', value: 'Phantom Ion' },
  { key: 'Phantom RGX', text: 'Phantom RGX', value: 'Phantom RGX' },
]

class DropdownSkinValorant extends Component {
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

export default DropdownSkinValorant;