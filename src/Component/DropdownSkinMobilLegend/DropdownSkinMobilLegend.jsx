import React, { Component } from 'react'
import { Dropdown } from 'semantic-ui-react'
import './DropdownSkinMobilLegend.css'

const options = [
  { key: 'Paquito Starlight Skin: Fulgent Punch', text: 'Paquito Starlight Skin: Fulgent Punch', value: 'Paquito Starlight Skin: Fulgent Punch' },
  { key: 'Benedetta Special Skin: Moon Blade', text: 'Benedetta Special Skin: Moon Blade', value: 'Benedetta Special Skin: Moon Blade' },
  { key: 'Vale Collector skin: Supernal Tempest', text: 'Vale Collector skin: Supernal Tempest', value: 'Vale Collector skin: Supernal Tempest' },
  { key: 'Aulus Elite Skin: Barren Pioneer', text: 'Aulus Elite Skin: Barren Pioneer', value: 'Aulus Elite Skin: Barren Pioneer' },
  { key: 'Bruno 515 skin: Street Hype', text: 'Bruno 515 skin: Street Hype', value: 'Bruno 515 skin: Street Hype' },
]

class DropdownSkinMobilLegend extends Component {
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

export default DropdownSkinMobilLegend;