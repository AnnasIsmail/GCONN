import React from 'react';
import { Button, Header, Icon, Input, Label, Modal } from 'semantic-ui-react';
import './ModalEdit.css';

function ModalEditProfile() {
  const [open, setOpen] = React.useState(false)

  return (
    <Modal
      closeIcon
      open={open}
      trigger={<Icon name="pencil alternate" link/>}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      id="modalEdit"
    >
      <Header icon='pencil alternate' content='Edit Profile' />
      <Modal.Content>
        <div>
            <label htmlFor="fullName">Full Name</label>
            <Input type="text" value="full Name" />
        </div>
        <div>
            <label htmlFor="fullName">Email</label>
            <Input type="text" value="full Name" />
        </div>
        <div>
            <label htmlFor="fullName">Username</label>
            <Input type="text" value="full Name" />
        </div>
        <div>
            <label htmlFor="fullName">Password</label>
            <Label as='a' basic>Change Password</Label>
        </div>
        <div>
            <label htmlFor="fullName">Photo</label>
            <Label onClick={()=>document.getElementById('inputFileProfile').click()} as='a' basic>Change Photo Profile</Label>
            <input type="file" hidden id='inputFileProfile' />
        </div>
      </Modal.Content>
      <Modal.Actions>
        <Button color='red' onClick={() => setOpen(false)}>
          <Icon name='remove' /> No
        </Button>
        <Button color='blue' onClick={() => setOpen(false)}>
          <Icon name='checkmark' /> Yes
        </Button>
      </Modal.Actions>
    </Modal>
  )
}

export default ModalEditProfile;