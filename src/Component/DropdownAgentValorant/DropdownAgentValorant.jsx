import React, { Component } from 'react'
import { Dropdown } from 'semantic-ui-react'
import './DropdownAgentValorant.css'

const options = [
  { key: 'Killjoy', text: 'Killjoy', value: 'Killjoy' },
  { key: 'Phoenix', text: 'Phoenix', value: 'Phoenix' },
  { key: 'Fade', text: 'Fade', value: 'Fade' },
  { key: 'Raze', text: 'Raze', value: 'Raze' },
  { key: 'Skye', text: 'Skye', value: 'Skye' },
]

class DropdownAgentValorant extends Component {
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

export default DropdownAgentValorant;