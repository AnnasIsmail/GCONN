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

    function error(text){
        return error = <Label basic color='red' pointing='below'>
            {(text === undefined)?
            'Please enter a value'
            :
            text
            }
        </Label>
    }

    function blur(e){
        
        if(e.target.name === "full-name"){
            if(fullName === ""){   
                setErrorFieldFullName(error)
            }else if(fullName.length < 5){
                setErrorFieldFullName(error('Please enter a full name of at least 5 letters'))
            }
        }else if(e.target.name === "username"){
            if(username === ""){   
                setErrorFieldUsername(error)
            }else if(username.length < 5){
                setErrorFieldUsername(error('Username must at least 5 letters'))
            }else if(username.match(/^[0-9]+$/)){
                setErrorFieldUsername(error('Username must contain Lowercase a - z'))
            }else if(username.match(/^[a-z]+$/)){
                setErrorFieldUsername(error('Username must contain numbers 0 - 9'))
            }
        }else if(e.target.name === "email"){
            if(email === ""){   
                setErrorFieldEmail(error)
            }else if(email.indexOf("@") === -1){   
                setErrorFieldEmail(error('Please enter Email correctly'))
            }else{   
                let validation = false;
                    let list = ['.com','.id','.ac','.ac.id','.co.id'];

                    list.forEach(format=>{
                        if(email.lastIndexOf(format) !== -1){
                            validation = true;
                        }
                    })

                    if(validation === false){
                        setErrorFieldEmail(error('Please enter Email correctly'))
                    }
            }
        }else if(e.target.name === "password"){
            if(password === ""){   
                setErrorFieldPassword(error)
            }else if(password.length < 8){
                setErrorFieldPassword(error('Password must at least 8 letters'))
            }else if(password.match(/^[A-Z0-9]+$/)){
                setErrorFieldPassword(error('Password must contain Lowercase a - z'))
            }else if(password.match(/^[a-z0-9]+$/)){
                setErrorFieldPassword(error('Password must contain Uppercase A -Z'))
            }else if(password.match(/^[a-zA-Z]+$/)){
                setErrorFieldPassword(error('Password must contain numbers 0 - 9'))
            }
        }else if(e.target.name === "confirm-password"){
            if(confirmPassword === ""){   
                setErrorFieldConfirmPassword(error)
            }else if( confirmPassword !== password){
                setErrorFieldConfirmPassword(error('Password with Confirm Password must contain the same'))
                setErrorFieldPassword(error('Password with Confirm Password must contain the same'))
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

    function validationSignUp(){
        let valid = true;
        if(fullName === ""){   
            setErrorFieldFullName(error)
            valid = false;
        }else if(fullName.length < 5){
            setErrorFieldFullName(error('Please enter a full name of at least 5 letters'))
            valid = false;
        }
        if(username === ""){   
            setErrorFieldUsername(error)
            valid = false;
        }else if(username.length < 5){
            setErrorFieldUsername(error('Username must at least 5 letters'))
            valid = false;
        }else if(username.match(/^[0-9]+$/)){
            setErrorFieldUsername(error('Username must contain Lowercase a - z'))
            valid = false;
        }else if(username.match(/^[a-z]+$/)){
            setErrorFieldUsername(error('Username must contain numbers 0 - 9'))
            valid = false;
        }
        if(email === ""){   
            setErrorFieldEmail(error)
            valid = false;
        }else if(email.indexOf("@") === -1){   
            setErrorFieldEmail(error('Please enter Email correctly'))
            valid = false;
        }else{   
            let validation = false;
                let list = ['.com','.id','.ac','.ac.id','.co.id'];

                list.forEach(format=>{
                    if(email.lastIndexOf(format) !== -1){
                        validation = true;
                    }
                })

                if(validation === false){
                    setErrorFieldEmail(error('Please enter Email correctly'))
                    valid = false;
                }
        }
        if(password === ""){   
            setErrorFieldPassword(error)
            valid = false;
        }else if(password.length < 8){
            setErrorFieldPassword(error('Password must at least 8 letters'))
            valid = false;
        }else if(password.match(/^[A-Z0-9]+$/)){
            setErrorFieldPassword(error('Password must contain Lowercase a - z'))
            valid = false;
        }else if(password.match(/^[a-z0-9]+$/)){
            setErrorFieldPassword(error('Password must contain Uppercase A -Z'))
            valid = false;
        }else if(password.match(/^[a-zA-Z]+$/)){
            setErrorFieldPassword(error('Password must contain numbers 0 - 9'))
            valid = false;
        }
        if(confirmPassword === ""){   
            setErrorFieldConfirmPassword(error)
            valid = false;
        }else if( confirmPassword !== password){
            setErrorFieldConfirmPassword(error('Password with Confirm Password must contain the same'))
            setErrorFieldPassword(error('Password with Confirm Password must contain the same'))
            valid = false;
        }
        return valid;
    }

    function SignUp(){
        let valid = validationSignUp()
        if(valid == true){
            const currentdate = new Date(); 
            const datetime = "" + (currentdate.getMonth()+1) + "/"
                    + currentdate.getDate()  + "/" 
                    + currentdate.getFullYear() + " "  
                    + currentdate.getHours() + ":"  
                    + currentdate.getMinutes() + ":" 
                    + currentdate.getSeconds();
            let dataLogin = {}
            const credentials = {
                fullName: document.getElementById('fullName').value,
                username: document.getElementById('username').value,
                email: document.getElementById('email').value,
                password: document.getElementById('password').value,
                lastOnline: datetime,
                balance: 0
            }

            fetch('https://gconn-api-node-js.vercel.app/register',{
                method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(credentials),
            })
            .then((response) => response.json())
            .then((json) => {
                if(json.status === 200){
                    fetch('https://gconn-api-node-js.vercel.app/registerSeller',{
                        method: 'POST', // or 'PUT'
                        headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ username: json.data }),
                    })
                    .then((response) => response.json())
                    .then((json)=>{
                        NavigateTo('/sign-in');
                    })
                }else{
                    setErrorFieldUsername(<Label basic color='red' pointing='below'>
                        {json.data}
                    </Label>)
                    setErrorFieldEmail(<Label basic color='red' pointing='below'>
                        {json.data}
                    </Label>)
                }
            });

        //     fetch(`https://api-gconn.herokuapp.com/users?username=${username}`)
        //     .then((response) => response.json())
        //     .then((json) =>{
        //     dataLogin = json
        //     if(dataLogin.length !== 1){
        //         fetch('https://api-gconn.herokuapp.com/users',{
        //         method: 'POST',
        //         body: JSON.stringify({
        //             fullName,
        //             email,
        //             username,
        //             password,
        //             photo: ""
        //         }),
        //         headers: {
        //             'Content-type': 'application/json; charset=UTF-8',
        //         },
        //         });

        //         fetch('https://api-gconn.herokuapp.com/seller',{
        //         method: 'POST',
        //         body: JSON.stringify({
        //             "marketName": "",
        //             "photo": "",
        //             "slogan": "",
        //         }),
        //         headers: {
        //             'Content-type': 'application/json; charset=UTF-8',
        //         },
        //         })
        //         .then((response) => response.json())
        //         .then((json) => {NavigateTo('/sign-in');});
        //     }else{
        //         setErrorFieldUsername(<Label basic color='red' pointing='below'>
        //             The username you entered is already registered!
        //         </Label>);
        //     }
        // });
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
                    <Form.Input onChange={changeValue} id="fullName" name='full-name' icon='user' iconPosition='left' placeholder='Full Name' />
                </Form.Field>
                <Form.Field onBlur={blur} onFocus={focus} >
                    {errorFieldUsername}
                    <Form.Input onChange={changeValue} id="username" name='username' icon='user' iconPosition='left' placeholder='Username' />
                </Form.Field>
                <Form.Field onBlur={blur} onFocus={focus} >
                    {errorFieldEmail}
                    <Form.Input onChange={changeValue} id="email" name='email' icon='envelope' iconPosition='left' placeholder='Email' />
                </Form.Field>
                <Form.Field onBlur={blur} onFocus={focus} >
                    {errorFieldPassword}
                    <Form.Input labelPosition='right' type='text' >
                        <Input onChange={changeValue} name='password' id="password" className="password-sign-up" type={type} icon="lock" iconPosition='left' placeholder='Password' />
                        <Label ><Icon inverted name={eye} onClick={()=>{setType((type === 'password')? 'text' : 'password');setEye((eye === 'eye slash')? 'eye' : 'eye slash')}} /></Label>
                    </Form.Input>
                </Form.Field>
                <Form.Field onBlur={blur} onFocus={focus} >
                    {errorFieldConfirmPassword}
                    <Form.Input labelPosition='right' type='text'>
                        <Input onChange={changeValue} name='confirm-password' id="confirmPassword" className="password-sign-up" type={type} icon="lock" iconPosition='left' placeholder='Confirm Password' />
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
                    <h5>Have an account? <b onClick={()=>NavigateTo('/sign-in')}>Sign-in</b>!</h5>
                </Form.Field>
            </Form>
        </div>
    );
}

export default SignUp;