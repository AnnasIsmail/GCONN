import React from "react";
import { Button, Modal } from 'react-bootstrap';
import { Icon } from 'semantic-ui-react';
import AdvanceFilter from "../../Component/AdvanceFilter/AdvanceFilter";
// import FilterIcon from "../../image/icon/Filter";
import './AdvanceFilterContainer.css';

let dataBasic = {
  region: '',
  changeNameStatus: '',
  rank: '',
  game: '',
  skin: '',
  agent: '',
  priceMin: 0,
  priceMax: 0,
  sortBy: ''
}

let data = {
  region: '',
  changeNameStatus: '',
  rank: '',
  game: '',
  skin: '',
  agent: '',
  priceMin: 0,
  priceMax: 0,
  sortBy: ''
}
function AdvanceFilterContainer(props){
    const [show, setShow] = React.useState(false);
    const handleClose = () => setShow(false);

    function getData(v){
      data = v;
    }

    function sendData(){
      props.sendData(data);
    }

    React.useEffect(()=>{
      if(props.dataFilter === false){
        data = dataBasic;
      }
    })
    return(
        
    <>
        <div className="advance-filter" onClick={() => setShow(true)} >
            {/* <FilterIcon /> */}
            {(props.dataFilter == false)?
            <>
              <Icon name='filter' size='large' />
              <label >Advance Filter</label>
            </>
            :
              <>
                {/* <Icon name='filter' size='large' color={(JSON.stringify(dataBasic) !== JSON.stringify(data))&&"yellow"} /> */}
                {/* <label className={(JSON.stringify(dataBasic) !== JSON.stringify(data))&&"redAV"}>Advance Filter</label> */}
                <Icon name='filter' size='large' color={"yellow"} />
                <label className={"redAV"}>Advance Filter</label>
              </>
            }
        </div>

      <Modal
        show={show}
        // onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header >
        {/* <Modal.Header closeButton> */}
            <h1>FILTERS</h1>
        </Modal.Header>
        <Modal.Body>
          <AdvanceFilter data={data} sendData={getData} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={e=>{ handleClose(); sendData() }}>
            Show Result
          </Button>
        </Modal.Footer>
      </Modal>
    </>
        
    );
}

export default AdvanceFilterContainer;