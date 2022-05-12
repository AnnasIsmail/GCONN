import React from "react";
import { Button, Checkbox, Form, Icon, Input, Label } from 'semantic-ui-react';
import './SignUp.css';

function SignUp(){
    return(
        <div className="sign-up">
              <Form>
                <Form.Field>
                    <h1>Welcome to GCONN !</h1>
                    <h4>Please Sign-Up with your account!</h4>
                </Form.Field>
                <Form.Field>
                    <Input icon='user' iconPosition='left' placeholder='Username' />
                </Form.Field>
                <Form.Field>
                    <Input icon='envelope' iconPosition='left' placeholder='Email' />
                </Form.Field>
                <Form.Field>
                    <Input labelPosition='right' type='text'>
                        <Input className="password-sign-up" icon="lock" iconPosition='left' placeholder='Password' />
                        <Label ><Icon name='eye slash' /></Label>
                    </Input>
                </Form.Field>
                <Form.Field>
                    <Input labelPosition='right' type='text'>
                        <Input className="password-sign-up" icon="lock" iconPosition='left' placeholder='Confirm Password' />
                        <Label ><Icon name='eye slash' /></Label>
                    </Input>
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