import React from "react";
import { useNavigate } from 'react-router-dom';
import { Button, Checkbox, Form, Icon, Input, Label } from 'semantic-ui-react';
import './SignUp.css';

let username = "" , email = "" , password = "" , confirmPassword= "", fullName = "";
function SignUp(){
    const navigasi = useNavigate();
    
    const NavigateTo =(to)=>{
        navigasi(to)
    }

    let [type , setType] = React.useState('password');
    let [eye , setEye] = React.useState('eye slash');

    
    let [errorFieldFullName, setErrorFieldFullName] = React.useState();
    let [errorFieldUsername , setErrorFieldUsername] = React.useState();
    let [errorFieldEmail , setErrorFieldEmail] = React.useState();
    let [errorFieldPassword , setErrorFieldPassword] = React.useState();
    let [errorFieldConfirmPassword , setErrorFieldConfirmPassword] = React.useState();

    function changeValue(e){
        if(e.target.name === "full-name"){
            fullName = e.target.value
        }else if(e.target.name === "username"){
            username = e.target.value
        }else if(e.target.name === "email"){
            email = e.target.value
        }else if(e.target.name === "password"){
            password = e.target.value
        }else if(e.target.name === "confirm-password"){
            confirmPassword = e.target.value
        }  
    }

    function blur(e){
        let error = <Label basic color='red' pointing='below'>
                        Please enter a value
                    </Label>
        if(e.target.name === "full-name"){
            if(fullName === ""){   
                setErrorFieldFullName(error)
            }
        }else if(e.target.name === "username"){
            if(username === ""){   
                setErrorFieldUsername(error)
            }
        }else if(e.target.name === "email"){
            if(email === ""){   
                setErrorFieldEmail(error)
            }
        }else if(e.target.name === "password"){
            if(password === ""){   
                setErrorFieldPassword(error)
            }
        }else if(e.target.name === "confirm-password"){
            if(confirmPassword === ""){   
                setErrorFieldConfirmPassword(error)
            }
        }  
    }

    function focus(e){
        if(e.target.name === "full-name"){
            setErrorFieldFullName();
        }else if(e.target.name === "username"){
            setErrorFieldUsername();
        }else if(e.target.name === "email"){
            setErrorFieldEmail();
        }else if(e.target.name === "password"){
            setErrorFieldPassword();
        }else if(e.target.name === "confirm-password"){
            setErrorFieldConfirmPassword();
        }  
    }

    function SignUp(){
        if(username !== "" && email !== "" && password  !== "" && confirmPassword  !== ""){
            let dataLogin = {}
            fetch(`http://localhost:8000/users?username=${username}`)
            .then((response) => response.json())
            .then((json) =>{
            dataLogin = json
            if(dataLogin.length !== 1){
                fetch('http://localhost:8000/users',{
                method: 'POST',
                body: JSON.stringify({
                    fullName,
                    email,
                    username,
                    password,
                    photo: ""
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
                })
                .then((response) => response.json())
                .then((json) => {NavigateTo('/sign-in');});
            }else{
                setErrorFieldUsername(<Label basic color='red' pointing='below'>
                    The username you entered is already registered!
                </Label>);
            }
        });
        }else{
            let error = <Label basic color='red' pointing='below'>
                Please enter a value
            </Label>
            if(username === ""){   
                setErrorFieldUsername(error)
            }
            if(email === ""){   
                setErrorFieldEmail(error)
            }
            if(password === ""){   
                setErrorFieldPassword(error)
            }
            if(confirmPassword === ""){   
                setErrorFieldConfirmPassword(error)
            }
        }  
        
    }

    return(
        <div className="sign-up">
              <Form>
                <Form.Field>
                    <h1>Welcome to GCONN !</h1>
                    <h4>Please Sign-Up with your account!</h4>
                </Form.Field>
                <Form.Field onBlur={blur} onFocus={focus} >
                    {errorFieldFullName}
                    <Form.Input onChange={changeValue} name='full-name' icon='user' iconPosition='left' placeholder='Full Name' />
                </Form.Field>
                <Form.Field onBlur={blur} onFocus={focus} >
                    {errorFieldUsername}
                    <Form.Input onChange={changeValue} name='username' icon='user' iconPosition='left' placeholder='Username' />
                </Form.Field>
                <Form.Field onBlur={blur} onFocus={focus} >
                    {errorFieldEmail}
                    <Form.Input onChange={changeValue} name='email' icon='envelope' iconPosition='left' placeholder='Email' />
                </Form.Field>
                <Form.Field onBlur={blur} onFocus={focus} >
                    {errorFieldPassword}
                    <Form.Input labelPosition='right' type='text' >
                        <Input onChange={changeValue} name='password' className="password-sign-up" type={type} icon="lock" iconPosition='left' placeholder='Password' />
                        <Label ><Icon inverted name={eye} onClick={()=>{setType((type === 'password')? 'text' : 'password');setEye((eye === 'eye slash')? 'eye' : 'eye slash')}} /></Label>
                    </Form.Input>
                </Form.Field>
                <Form.Field onBlur={blur} onFocus={focus} >
                    {errorFieldConfirmPassword}
                    <Form.Input labelPosition='right' type='text'>
                        <Input onChange={changeValue} name='confirm-password' className="password-sign-up" type={type} icon="lock" iconPosition='left' placeholder='Confirm Password' />
                        <Label ><Icon inverted name={eye} onClick={()=>{setType((type === 'password')? 'text' : 'password');setEye((eye === 'eye slash')? 'eye' : 'eye slash')}} /></Label>
                    </Form.Input>
                </Form.Field>
                <Form.Field>
                    <Checkbox label='Please remind me the newest promotions and news' />
                </Form.Field>
                <Form.Field className="container-button-sign-up">
                    <Button type='submit' onClick={SignUp}>Sign Up</Button>
                </Form.Field>
                <Form.Field>
                    <h5>Have an account? <b>Sign-in</b>!</h5>
                </Form.Field>
            </Form>
        </div>
    );
}

export default SignUp;