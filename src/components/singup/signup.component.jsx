import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { Button } from '@material-ui/core';
import { useFormFields } from '../../libs/hooksLibs';
import './signup.styles.scss'

function Signup(props) {

  const [fields, handleFieldChange] = useFormFields({
    email: "",
    password: "",
    confirmPassword: "",
    name: ""
  })

  const [validated, setValidated] = useState(false);
  
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
    // props.history.push('/');
  }

  const handlePasswordValidation = () => {
    if (fields.password.match(/[a-z]/g) && fields.password.match( 
      /[A-Z]/g) && fields.password.match( 
      /[0-9]/g) && fields.password.match( 
      /[^a-zA-Z\d]/g) && fields.password.length >= 8 
      && fields.password === fields.confirmPassword) {
      return true
    }
    return false;
  }

  return (
    <div>
      <Form noValidate validated={validated} onSubmit={handleSubmit} className="signUp">
        <Form.Group controlId="name">
            <Form.Label>Full Name</Form.Label>
            <Form.Control 
              type="name" 
              value={fields.name}
              onChange={handleFieldChange}
              placeholder="Full Name"
              required 
            />
        </Form.Group>
        <Form.Group controlId="email">
            <Form.Label>Email address</Form.Label>
            <Form.Control 
              type="email" 
              value={fields.email}
              onChange={handleFieldChange}
              placeholder="Email"
              required
            />
        </Form.Group>
        <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control 
              type="password"
              value={fields.password}
              onChange={handleFieldChange}
              isValid={handlePasswordValidation()}
              placeholder="Password"
              required 
            />
        </Form.Group>
        <Form.Group controlId="confirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control 
              type="password"
              value={fields.confirmPassword}
              onChange={handleFieldChange}
              isValid={handlePasswordValidation()}
              placeholder="Confirm Password"
              required 
            />
        </Form.Group>
        <div className="submit-button">
        <Button 
          variant="contained" 
          type="submit"
          disabled={!handlePasswordValidation()}
          >
            Signup
        </Button>
        </div>
      </Form>
    </div>
  )
}

export default Signup;