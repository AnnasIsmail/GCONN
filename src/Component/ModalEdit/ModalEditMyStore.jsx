import React from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import { Button, Header, Icon, Image, Input, Label, Modal } from 'semantic-ui-react';
import './ModalEdit.css';

function ModalEditStore(props) {
  const [open, setOpen] = React.useState(props.setOpen)
  const navigate = useNavigate();

  const [cookies, setCookie, removeCookie] = useCookies();
  const [ error , setError ] = React.useState(false);
  const [ errorSellerName , setErrorSellerName ] = React.useState(false);
  const [ errorSlogan , setErrorSlogan ] = React.useState(false);

  const [ loadingSubmit ,  setLoadingSubmit] = React.useState(false);
  const [ changeImage , setChangeImage] = React.useState(false);
  const [ srcImage , setSrcImage] = React.useState('');
  const [ image , setImage] = React.useState('');

  function validateImg(e){
    const file = e.target.files;

    if(file[0].size >= 1048576) {
      return alert("Max Size Image 1 Mb");
    } else {
      setSrcImage(URL.createObjectURL(file[0]));
      setChangeImage(true);
      setImage(file[0]);
    }
  }

  function submitEdit(){
    setLoadingSubmit(true);
    const dataSubmit = {
      _id: cookies.Cr787980,
      sellerName: document.getElementById('sellerName').value,
      slogan: document.getElementById('slogan').value,
    }
    if(changeImage){

      const data = new FormData();
      data.append('file', image);
      data.append('upload_preset', 'kyegcmyk');
  
      try {
          fetch("https://api.cloudinary.com/v1_1/doahyhy5i/image/upload",{
              method:'post',
              body: data
          })
          .then((response) => response.json())
          .then((json)=> {
              dataSubmit.photo = json.url
              postToDB(dataSubmit);
          })
      } catch (error) {
          // console.log(error)
      }
    
  }else{
    postToDB(dataSubmit);
  }}
  
  function validate(){
    if(document.getElementById('sellerName').value === ""){
      setErrorSellerName(true);
    }else if(document.getElementById('slogan').value === ""){
      setErrorSlogan(true);
    }else{
      submitEdit()
    }
  }

  function errorFalse(){
    setErrorSellerName(false);
    setErrorSlogan(false);
  }

  function postToDB(dataSubmit){
    fetch('https://gconn-api-node-js.vercel.app/sellerEdit', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dataSubmit),
            }) 
        .then((response) => response.json())
        .then(function (response) {
            // console.log(response)
            if(response.status === 200){
              window.location.reload();
            }else if(response.status === 201){
              setError(true);
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
      trigger={<Icon name="pencil alternate" link/>}
      onClose={() =>(props.seller.sellerName !== "")&& setOpen(props.closeButton)}
      onOpen={() => setOpen(true)}
      id="modalEdit"
    >
      <Header icon='pencil alternate' content='Edit Profile Store' />
      <Modal.Content>
        <div>
            <label htmlFor="fullName">Store Name</label>
            <Input error={errorSellerName} onFocus={errorFalse} onClick={()=>setError(false)} type="text" defaultValue={props.seller.sellerName} id="sellerName" />
        </div>
        <div>
            <label htmlFor="fullName">Slogan</label>
            <Input error={errorSlogan} onFocus={errorFalse} type="text" defaultValue={props.seller.slogan} id="slogan" />
        </div>
        <div>
        <label htmlFor="fullName">Photo</label>
            <Label style={{ style: 'flex', gap: 5 }}>
              {(changeImage)?
                <Image src={srcImage} size='mini' />
              :
                <Image src={props.seller.photo} size='mini' />
              }
              <Label onClick={()=>document.getElementById('inputFileProfile').click()} as='a' basic>Change Photo Profile</Label>
            </Label>
            <input type="file" hidden id='inputFileProfile' onChange={validateImg} />
        </div>
      </Modal.Content>
      <Modal.Actions>
        <Button color='red' onClick={() =>(props.seller.sellerName !== "")&&setOpen(false)}>
          <Icon name='remove' /> No
        </Button>
        <Button color='blue' loading={loadingSubmit} onClick={() => validate()}>
          <Icon name='checkmark' /> Yes
        </Button>
      </Modal.Actions>
    </Modal>
  )
}

export default ModalEditStore;