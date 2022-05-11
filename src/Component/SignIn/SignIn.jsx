import React from "react";
import { Button, Form, Icon, Input, Label } from 'semantic-ui-react';
import './SignIn.css';

function SignIn(){
    return(
        <div className="sign-in">
              <Form>
                <Form.Field>
                    <h1>Welcome to GCONN !</h1>
                    <h4>Please Sign-in with your account!</h4>
                </Form.Field>
                <Form.Field>
                    <Input icon='user' iconPosition='left' placeholder='Username' />
                </Form.Field>
                <Form.Field>
                    <Input labelPosition='right' type='text'>
                        <Input className="password-sign-in" icon="lock" iconPosition='left' placeholder='Password' />
                        <Label ><Icon name='eye slash' /></Label>
                    </Input>
                </Form.Field>
                <Form.Field className="container-button-sign-in">
                    <Button type='submit'>Sign In</Button>
                </Form.Field>
                <Form.Field>
                    <h5>Don’t have an account? <b>Sign-up</b>!</h5>
                </Form.Field>
            </Form>
        </div>
    );
}

export default SignIn;