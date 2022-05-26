import React from "react";
import { Button, Checkbox, Form, Icon, Input, Label } from 'semantic-ui-react';
import './SignUp.css';

function SignUp(){

    let [type , setType] = React.useState('password');
    let [eye , setEye] = React.useState('eye slash');
    let [error , setError] = React.useState(
    <Label basic color='red' pointing='below'>
        Please enter a value
    </Label>);

    return(
        <div className="sign-up">
              <Form>
                <Form.Field>
                    <h1>Welcome to GCONN !</h1>
                    <h4>Please Sign-Up with your account!</h4>
                </Form.Field>
                <Form.Field>
                    {error}
                    <Form.Input icon='user' iconPosition='left' placeholder='Username'error />
                </Form.Field>
                <Form.Field>
                    <Label basic color='red' pointing='below'>
                        Please enter a value
                    </Label>
                    <Form.Input icon='envelope' iconPosition='left' placeholder='Email' error />
                </Form.Field>
                <Form.Field>
                    <Form.Input labelPosition='right' type='text' >
                        <Input className="password-sign-up" type={type} icon="lock" iconPosition='left' placeholder='Password' />
                        <Label ><Icon inverted name={eye} onClick={()=>{setType((type === 'password')? 'text' : 'password');setEye((eye === 'eye slash')? 'eye' : 'eye slash')}} /></Label>
                    </Form.Input>
                </Form.Field>
                <Form.Field>
                    <Form.Input labelPosition='right' type='text'>
                        <Input className="password-sign-up" type={type} icon="lock" iconPosition='left' placeholder='Confirm Password' />
                        <Label ><Icon inverted name={eye} onClick={()=>{setType((type === 'password')? 'text' : 'password');setEye((eye === 'eye slash')? 'eye' : 'eye slash')}} /></Label>
                    </Form.Input>
                </Form.Field>
                <Form.Field>
                    <Checkbox label='Please remind me the newest promotions and news' />
                </Form.Field>
                <Form.Field className="container-button-sign-up">
                    <Button type='submit'>Sign Up</Button>
                </Form.Field>
                <Form.Field>
                    <h5>Have an account? <b>Sign-in</b>!</h5>
                </Form.Field>
            </Form>
        </div>
    );
}

export default SignUp;