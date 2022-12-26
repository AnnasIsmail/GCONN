import React, { Component } from 'react';
import { Button, Confirm } from 'semantic-ui-react';
import './SellAccountContainer.css';

class ErrorEmptyField extends Component {
  state = { open: false }

  show = () => this.setState({ open: true })
  handleConfirm = () => this.setState({ open: false })
  handleCancel = () => this.setState({ open: false })

  render() {
    return (
      <div className='ok-sell-account'>
        <Button hidden id="emptyFieldSell" onClick={this.show}>Show</Button>
        <Confirm id="modalEmptyFieldSell"
            content={`Please double check the fields ${this.props.field} to make sure they are all filled in.`}
          open={this.state.open}
          confirmButton="Ok"
          onCancel={this.handleCancel}
          onConfirm={this.handleConfirm}
        />
      </div>
    )
  }
}

export default ErrorEmptyField;