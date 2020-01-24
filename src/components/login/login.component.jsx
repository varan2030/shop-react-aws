import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { Button } from '@material-ui/core';
import { useFormFields } from '../../libs/hooksLibs';
import './login.styles.scss'
import { Auth } from 'aws-amplify';

function Login(props) {
  // const [isLoading, setIsLoading] = useState(false);
  const [fields, handleFieldChange] = useFormFields({
    email: "",
    password: ""
  })

  async function handleSubmit(event) {
    event.preventDefault();

		// setIsLoading(true);

		try {
			await Auth.signIn(fields.email, fields.password);
      props.history.push('/');
		} catch (e) {
			console.log(e.message);
			// setIsLoading(false);
    }
  }

  return (
    <div>
      <Form onSubmit={handleSubmit} className="login">
        <Form.Group controlId="email">
            <Form.Label>Email address</Form.Label>
            <Form.Control 
              type="email" 
              value={fields.email}
              onChange={handleFieldChange}
              placeholder="Enter email" />
        </Form.Group>
        <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control 
              type="password"
              value={fields.password}
              onChange={handleFieldChange}
              placeholder="Password" />
        </Form.Group>
        <Form.Group controlId="checkbox">
            <Form.Check type="checkbox" label="Remember me" />
        </Form.Group>
        <div className="submit-button">
        <Button variant="contained" type="submit">
            Login
        </Button>
        </div>
      </Form>
    </div>
  )
}

export default Login;