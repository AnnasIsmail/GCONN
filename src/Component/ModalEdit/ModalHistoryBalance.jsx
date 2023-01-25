import React from 'react';
import { useCookies } from 'react-cookie';
import Moment from 'react-moment';
import { useNavigate } from 'react-router-dom';
import { Button, Header, Image, Loader, Message, Modal, Segment } from 'semantic-ui-react';
import FormatMoney from '../../Function/FormatMoney';
import './ModalEdit.css';

function ModalHistoryBalance(props) {
  const [open, setOpen] = React.useState(props.setOpen)
  const navigate = useNavigate();

  const [cookies, setCookie, removeCookie] = useCookies();
  const [data , setData] = React.useState([]);

  const [loading , setLoading] = React.useState(true);
  const navigasi = useNavigate();
  const NavigateTo =(to)=>{
      navigasi(to)
  }

  React.useState(()=>{
    getData();
  },[])

  function getData(){
    const dataSubmit = {
      idUser: cookies.Cr787980,
    }

    fetch('https://gconn-api-node-js.vercel.app/getBalanceHistory', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dataSubmit),
            }) 
        .then((response) => response.json())
        .then(function (response) {
          setLoading(false);
          setData(response.data);
        })
        .catch(function (error) {
            console.log(error);
        });
  }

  return (
    <Modal
      closeIcon
      open={open}
      trigger={<Button onClick={()=>{getData();setLoading(true);}}>Balance History</Button>}
      // trigger={<Button>Balance History</Button>}
      onClose={() => setOpen(props.closeButton)}
      onOpen={() => setOpen(true)}
      id="modalEdit"
    >
      <Header icon='history' content='Balance History' />
      <Modal.Content>
      {(loading)?
        <Segment active>
          <Loader />
          <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
        </Segment>
      :
      <>
        {(data.length === 0)?
          <h6 style={{ textAlign: 'center' }}>No Balance History</h6>
        :
          data.map((data , index)=> 
            (data.transactionID != undefined)?
              <Message positive id="balance-history" >
                <Message.Header>{data.activity}</Message.Header>
                <div>
                    <label>Date: </label>
                    <label><Moment format="D MMM YYYY HH:mm:ss" withTitle>{data.dateTime}</Moment></label>
                </div>
                <div>
                    <label>Amount: </label>
                    <label><FormatMoney money={data.amount} /></label>
                </div>
                <div>
                    <label>Transaction ID: </label>
                    <label>{data.transactionID}</label>
                </div>
                <Button basic onClick={()=>NavigateTo(`/detaiTransaksi${data.transactionID}`)} className='detailTRH'>
                  Detail Transaction
                </Button>
              </Message>
            :
              <Message negative id="balance-history" >
                <Message.Header>{data.activity}</Message.Header>
                <div>
                    <label>Date: </label>
                    <label><Moment format="D MMM YYYY HH:mm:ss" withTitle>{data.dateTime}</Moment></label>
                </div>
                <div>
                    <label>Amount:</label>
                    <label><FormatMoney money={data.amount} /></label>
                </div>
                <div>
                    <label>Number Account:</label>
                    <label>{data.numberAccount}</label>
                </div>
                <div>
                    <label>Name Account:</label>
                    <label>{data.nameAccount}</label>
                </div>
              </Message>
            )
        }
      </>
      }
      </Modal.Content>
    </Modal>
  )
}

export default ModalHistoryBalance;