import React from "react";
import { Button, Modal } from 'react-bootstrap';
import AdvanceFilter from "../../Component/AdvanceFilter/AdvanceFilter";
import FilterIcon from "../../image/icon/Filter";
import './AdvanceFilterContainer.css';

function AdvanceFilterContainer(){
    
    const [show, setShow] = React.useState(false);
    const handleClose = () => setShow(false);

    return(
        
    <>
        <div className="advance-filter" onClick={() => setShow(true)} >
            <FilterIcon />
            <label>Advance Filter</label>
        </div>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
            <h1>FILTERS</h1>
        </Modal.Header>
        <Modal.Body>
          <AdvanceFilter />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Show Result
          </Button>
        </Modal.Footer>
      </Modal>
    </>
        
    );
}

export default AdvanceFilterContainer;