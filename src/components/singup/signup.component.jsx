import React from 'react';
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

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(fields.name, fields.email, fields.password)
  }

  return (
    <div>
      <Form onSubmit={handleSubmit} className="signup">
        <Form.Group controlId="name">
            <Form.Label>Full Name</Form.Label>
            <Form.Control 
              type="name" 
              value={fields.name}
              onChange={handleFieldChange}
              placeholder="Full Name" />
        </Form.Group>
        <Form.Group controlId="email">
            <Form.Label>Email address</Form.Label>
            <Form.Control 
              type="email" 
              value={fields.email}
              onChange={handleFieldChange}
              placeholder="Email" />
        </Form.Group>
        <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control 
              type="password"
              value={fields.password}
              onChange={handleFieldChange}
              placeholder="Password" />
        </Form.Group>
        <Form.Group controlId="confirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control 
              type="password"
              value={fields.confirmPassword}
              onChange={handleFieldChange}
              isValid={fields.password === fields.confirmPassword}
              placeholder="Confirm Password" />
        </Form.Group>
        <div className="submit-button">
        <Button variant="contained" type="submit">
            Signup
        </Button>
        </div>
      </Form>
    </div>
  )
}

export default Signup;