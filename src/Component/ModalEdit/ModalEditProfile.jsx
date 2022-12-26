import React from 'react';
import { useCookies } from 'react-cookie';
import { Button, Header, Icon, Image, Input, Label, Modal } from 'semantic-ui-react';
import './ModalEdit.css';

function ModalEditProfile(props) {
  const [open, setOpen] = React.useState(false)
  const [cookies, setCookie, removeCookie] = useCookies();
  const [ error , setError ] = React.useState(false);

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

  async function submitEdit(){
    setLoadingSubmit(true);
    const dataSubmit = {
      _id: cookies.Cr787980,
      fullName: document.getElementById('fullName').value,
      email: document.getElementById('email').value,
      username: document.getElementById('username').value,
      password: document.getElementById('password').value,
      password: document.getElementById('password').value,      
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
    }
   
  }

  function postToDB(dataSubmit){

    fetch('https://gconn-api-node-js.vercel.app/userEdit', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dataSubmit),
            }) 
        .then((response) => response.json())
        .then(function (response) {
            if(response.status === 200){
              // setOpen(false); 
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
            <Input type="text" defaultValue={props.profile.fullName} id="fullName" />
        </div>
        <div>
            <label htmlFor="fullName">Email</label>
            <Input type="text" defaultValue={props.profile.email} id="email" />
        </div>
        <div>
            <label htmlFor="fullName">Username</label>
            <Input type="text" error={error} onClick={()=>setError(false)} defaultValue={props.profile.username} id="username" />
        </div>
        <div>
            <label htmlFor="fullName">Password</label>
            {/* <Label as='a' basic>Change Password</Label> */}
            <Input type="password" placeholder="Not Changed" id="password" />
        </div>
        <div>
            <label htmlFor="fullName">Photo</label>
            <Label style={{ style: 'flex', gap: 5 }}>
              {(changeImage)?
                <Image src={srcImage} size='mini' />
              :
                <Image src={props.profile.photo} size='mini' />
              }
              <Label onClick={()=>document.getElementById('inputFileProfile').click()} as='a' basic>Change Photo Profile</Label>
            </Label>
            <input type="file" hidden id='inputFileProfile' onChange={validateImg} />
        </div>
      </Modal.Content>
      <Modal.Actions>
        <Button color='red' onClick={() => {setOpen(false); setError(false)}}>
          <Icon name='remove' /> No
        </Button>
        <Button color='blue' loading={loadingSubmit} onClick={() => submitEdit()}>
          <Icon name='checkmark' /> Yes
        </Button>
      </Modal.Actions>
    </Modal>
  )
}

export default ModalEditProfile;