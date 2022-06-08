import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Header, Icon, Input, Label, Modal } from 'semantic-ui-react';
import './ModalEdit.css';

function ModalEditStore(props) {
  const [open, setOpen] = React.useState(props.setOpen)
  const navigate = useNavigate();

  return (
    <Modal
    closeOnDimmerClick={props.closeOnDimmerClick}
      closeIcon
      open={open}
      trigger={<Icon name="pencil alternate" link/>}
      onClose={() => setOpen(props.closeButton)}
      onOpen={() => setOpen(true)}
      id="modalEdit"
    >
      <Header icon='pencil alternate' content='Edit Store' />
      <Modal.Content>
        <div>
            <label htmlFor="fullName">Store Name</label>
            <Input type="text" value="full Name" />
        </div>
        <div>
            <label htmlFor="fullName">Slogan</label>
            <Input type="text" value="full Name" />
        </div>
        <div>
            <label htmlFor="fullName">Photo</label>
            <Label onClick={()=>document.getElementById('inputFileProfile').click()} as='a' basic>Change Photo Store</Label>
            <input type="file" hidden id='inputFileProfile' />
        </div>
      </Modal.Content>
      <Modal.Actions>
        <Button color='red' onClick={() =>{ if(props.setOpen === true){navigate(-1)}else{setOpen(false)}}}>
          <Icon name='remove' /> No
        </Button>
        <Button color='blue' onClick={() => setOpen(false)}>
          <Icon name='checkmark' /> Yes
        </Button>
      </Modal.Actions>
    </Modal>
  )
}

export default ModalEditStore;