import React from "react";
import { Button, Form, Icon, Input, Label } from 'semantic-ui-react';
import './SignIn.css';

function SignIn(){

    let username , password;
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
                let PencocokanPassword;
                dataLogin.map((data)=>PencocokanPassword = data.password)
                if(password === PencocokanPassword){
                    console.log(true)
                }else{
                    console.log(false)
                }
            }
        });
    }

    return(
        <div className="sign-in">
              <Form>
                <Form.Field>
                    <h1>Welcome to GCONN !</h1>
                    <h4>Please Sign-in with your account!</h4>
                </Form.Field>
                <Form.Field>
                    <Input name='username' icon='user' onChange={changeValue} iconPosition='left' placeholder='Username' />
                </Form.Field>
                <Form.Field>
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