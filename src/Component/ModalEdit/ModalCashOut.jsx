import React from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import { Button, Header, Icon, Input, Modal } from 'semantic-ui-react';
import FormatMoney from '../../Function/FormatMoney';
import './ModalEdit.css';

function ModalCashOut(props) {
  const [open, setOpen] = React.useState(props.setOpen)
  const navigate = useNavigate();

  const [cookies, setCookie, removeCookie] = useCookies();

  const [ errorAmount , setErrorAmount ] = React.useState(false);
  const [ errorNumberAccount , setErrorNumberAccount ] = React.useState(false);
  const [ errorNameAccount , setErrorNameAccount ] = React.useState(false);
  const [ errorPassword , setErrorPassword ] = React.useState(false);
  const [loading , setLoading] = React.useState(false);

  const [balance , setBalance] = React.useState(props.balance);

  function validate(){

    if(document.getElementById('jumlah').value === ''){
      setErrorAmount(true);
    }else if(parseInt(document.getElementById('jumlah').value) > parseInt(balance)){
      setErrorAmount(true);
    }else if(document.getElementById('norek').value === ''){
      setErrorNumberAccount(true);
    }else if(document.getElementById('namarek').value === ''){
      setErrorNameAccount(true);
    }else if(document.getElementById('password').value === ''){
      setErrorPassword(true);
    }else{
      submitEdit();
    }

  }

  function errorFalse(){
    setErrorPassword(false);
    setErrorNameAccount(false);
    setErrorNumberAccount(false);
    setErrorAmount(false);
  }

  function submitEdit(){
    setLoading(true)
    const currentdate = new Date(); 
    const dateTime = "" + (currentdate.getMonth()+1) + "/"
            + currentdate.getDate()  + "/" 
            + currentdate.getFullYear() + " "  
            + currentdate.getHours() + ":"  
            + currentdate.getMinutes() + ":" 
            + currentdate.getSeconds();

    const dataSubmit = {
      idUser: cookies.Cr787980,
      activity: 'Withdrawal',
      amount: document.getElementById('jumlah').value,
      numberAccount: document.getElementById('norek').value,
      nameAccount: document.getElementById('namarek').value,
      password: document.getElementById('password').value,
      dateTime
    }

    fetch('https://gconn-api-node-js.vercel.app/cashOutAdd', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dataSubmit),
            }) 
        .then((response) => response.json())
        .then(function (response) {
          setLoading(false)
          if(response.data === 'Wrong Password'){
            setErrorPassword(true);
          }else{
            window.location.reload();
          }
        })
        .catch(function (error) {
            console.log(error);
        });
  }

  return (
    <Modal
    closeOnDimmerClick={props.closeOnDimmerClick}
      closeIcon
      open={open}
      trigger={<Button>Withdrawal Balance</Button>}
      onClose={() => setOpen(props.closeButton)}
      onOpen={() => setOpen(true)}
      id="modalEdit"
    >
      <Header icon='pencil alternate' content='Withdrawal' />
      <Modal.Content>
        <div>
            <label htmlFor="fullName">Your Balance</label>
            <label htmlFor="fullName"> <FormatMoney money={balance} /> </label>
        </div>
        <div>
            <label htmlFor="fullName">Amount</label>
            <Input type="number" id="jumlah" error={errorAmount} placeholder={balance} onFocus={errorFalse} />
        </div>
        <div>
            <label htmlFor="fullName">Number Account </label>
            <Input type="number" id="norek" error={errorNumberAccount} placeholder="012345678" onFocus={errorFalse} />
        </div>
        <div>
            <label htmlFor="fullName">Name Account</label>
            <Input type="text" id="namarek" error={errorNameAccount} placeholder="Sumiyati Markonah" onFocus={errorFalse} />
        </div>
        <div>
            <label htmlFor="fullName">Password</label>
            <Input type="password" id="password" error={errorPassword} placeholder="*************" onFocus={errorFalse} />
            {/* <Label onClick={()=>document.getElementById('inputFileProfile').click()} as='a' basic>Change Photo Store</Label>
            <input type="file" hidden id='inputFileProfile' /> */}
        </div>
      </Modal.Content>
      <Modal.Actions>
        <Button color='red' onClick={() =>{setOpen(false)}}>
          <Icon name='remove' /> No
        </Button>
        <Button color='blue' onClick={() => validate()} loading={loading}>
          <Icon name='checkmark' /> Yes
        </Button>
      </Modal.Actions>
    </Modal>
  )
}

export default ModalCashOut;