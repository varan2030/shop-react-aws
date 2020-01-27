import React from "react";

import "./restore-password.styles.scss";
import { useFormFields } from "../../libs/hooksLibs";
import { Form } from "react-bootstrap";
import { Button } from "@material-ui/core";
import { Auth } from "aws-amplify";

function RestorePassword() {

    const [fields, handleFieldChange] = useFormFields({
        email: "",
        password: ""
    })

   async function handleSubmit(event) {
    event.preventDefault();
    try {
        const currentUser = await Auth.forgotPassword(fields.email);
        console.log(currentUser);
    } catch (err) {
        alert(err.message)
    }
    }

    return (
        <Form onSubmit={handleSubmit} className="login">
        <Form.Group controlId="email">
            <Form.Label>Enter your user account's verified email address and we will send you a password reset link.</Form.Label>
            <Form.Control
                type="email"
                value={fields.email}
                onChange={handleFieldChange}
                placeholder="Enter email"
            />
        </Form.Group>
        {/* <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
                type="password"
                value={fields.password}
                onChange={handleFieldChange}
                placeholder="Password"
            />
        </Form.Group> */}
        {/* <Form.Group controlId="checkbox">
            <Form.Check type="checkbox" label="Remember me" />
        </Form.Group> */}
        <div className="submit-button">
            <Button variant="contained" type="submit">
                Send password reset email
            </Button>
        </div>
    </Form>
    )
}

export default RestorePassword;