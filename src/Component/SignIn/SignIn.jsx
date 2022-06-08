import React from "react";
import { useNavigate } from 'react-router-dom';
import { Button, Form, Icon, Input, Label } from 'semantic-ui-react';
import './SignIn.css';

let username = "", password = "";

function SignIn(){

    fetch('https://api-gconn.herokuapp.com/users')
    .then((response) => response.json())
    .then((json) => console.log(json))

    const navigasi = useNavigate();
    
    const NavigateTo =(to)=>{
        navigasi(to)
    }

    let [type , setType] = React.useState('password');
    let [eye , setEye] = React.useState('eye slash');
    
    function changeValue (e){
        if(e.target.name === 'username'){
            username = e.target.value
        }else if(e.target.name === 'password'){
            password  = e.target.value
        }
    }
    
    function login(){
        let dataLogin = {}
        fetch(`http://localhost:8000/users?username=${username}`)
        .then((response) => response.json())
        .then((json) =>{
            dataLogin = json
            if(dataLogin.length === 1){
                let PencocokanPassword, urlPhoto, id, username, fullName ;
                dataLogin.map((data)=>{
                    PencocokanPassword = data.password;
                    urlPhoto = data.photo;
                    id = data.id;
                    username = data.username;
                    fullName = data.fullName;
                })
                if(password === PencocokanPassword){
                    localStorage.setItem('login' , true);
                    localStorage.setItem('userId' , id);
                    localStorage.setItem('userPhoto' , urlPhoto);
                    localStorage.setItem('username' , username);
                    localStorage.setItem('fullName', fullName)
                  
                    
                }else{
                    setErrorFieldPassword(<Label basic color='red' pointing='below'>
                        The password you entered is wrong!
                    </Label>)
                }
            }else{
                setErrorFieldUsername(<Label basic color='red' pointing='below'>
                    the username you entered is not registered!
                </Label>)
            }
        });
          
        fetch(`http://localhost:8000/seller?id=${localStorage.userId}`)
        .then((res)=>res.json())
        .then((json)=>{
            json.map((data ,index)=>{
            localStorage.sellerName = data.sellerName;
            localStorage.sellerPhoto = data.photo;
            localStorage.sellerSlogan = data.slogan;

            NavigateTo('/')
            })
        });
    }

    let [errorFieldUsername , setErrorFieldUsername] = React.useState();
    let [errorFieldPassword , setErrorFieldPassword] = React.useState();

    function blur(e){
        let error = <Label basic color='red' pointing='below'>
                        Please enter a value
                    </Label>
        if(e.target.name === 'username'){
            if(username === ""){
                setErrorFieldUsername(error)
            }
        }else if(e.target.name === 'password'){
            if(password === ""){
                setErrorFieldPassword(error)
            }
        }
    }

    function focus(e){
        if(e.target.name === 'username'){
            setErrorFieldUsername()
            }else if(e.target.name === 'password'){
            setErrorFieldPassword()
        }
    }

    return(
        <div className="sign-in">
              <Form>
                <Form.Field>
                    <h1>Welcome to GCONN !</h1>
                    <h4>Please Sign-in with your account!</h4>
                </Form.Field>
                <Form.Field onBlur={blur} onFocus={focus} >
                    {errorFieldUsername}
                    <Input name='username' icon='user' onChange={changeValue} iconPosition='left' placeholder='Username' />
                </Form.Field>
                <Form.Field onBlur={blur} onFocus={focus} >
                    {errorFieldPassword}
                    <Input labelPosition='right' type='text'>
                        <Input type={type} name='password' onChange={changeValue} className="password-sign-in" icon="lock" iconPosition='left' placeholder='Password' />
                        <Label><Icon inverted name={eye} onClick={()=>{setType((type === 'password')? 'text' : 'password');setEye((eye === 'eye slash')? 'eye' : 'eye slash')}} /></Label>
                    </Input>
                </Form.Field>
                <Form.Field className="container-button-sign-in">
                    <Button type='submit' onClick={()=>login()}>Sign In</Button>
                </Form.Field>
                <Form.Field>
                    <h5>Don’t have an account? <b>Sign-up</b>!</h5>
                </Form.Field>
            </Form>
        </div>
    );
}

export default SignIn;