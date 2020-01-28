import React from "react";

import "./restore-password.styles.scss";
import { useFormFields } from "../../libs/hooksLibs";
import { Form } from "react-bootstrap";
import { Button } from "@material-ui/core";
import { Auth } from "aws-amplify";
import { withRouter } from "react-router-dom";
import { useState } from "react";

function RestorePassword(props) {
	const [fields, handleFieldChange] = useFormFields({
		email: "",
		password: "",
		confirmPassword: "",
		confirmationCode: ""
	});

	console.log(fields);
	const [confirmedEmail, handleConfirmEmail] = useState(false);
	const [validated, setValidated] = useState(false);

	async function handleSubmit(event) {
		event.preventDefault();
		try {
			const confirmedEmail = await Auth.forgotPassword(fields.email);
			console.log(confirmedEmail);
			handleConfirmEmail(true);
		} catch (err) {
			alert(err.message);
		}
	}

	const handlePasswordValidation = () => {
		if (
			fields.password.match(/[a-z]/g) &&
			fields.password.match(/[A-Z]/g) &&
			fields.password.match(/[0-9]/g) &&
			fields.password.match(/[^a-zA-Z\d]/g) &&
			fields.password.length >= 8 &&
			fields.password === fields.confirmPassword &&
			fields.confirmPassword.length > 0
		) {
			return true;
		}
		return false;
	};

	const handleResetPassword = async (event) => {
		event.preventDefault();
		try {
			const confirmedChangedPasswordUser = await Auth.forgotPasswordSubmit({
				username: fields.email,
				code: fields.confirmationCode,
				password: fields.password
			});
			console.log(confirmedChangedPasswordUser);
		} catch (err) {
			console.log(err);
		}
		setValidated(true);
	};

	function renderEmail() {
		return (
			<Form onSubmit={handleSubmit} className="login">
				<Form.Group controlId="email">
					<Form.Label>
						Enter your user account's verified email address and we will send
						you a password reset link.
					</Form.Label>
					<Form.Control
						type="email"
						value={fields.email}
						onChange={handleFieldChange}
						placeholder="Enter email"
					/>
				</Form.Group>
				<div className="submit-button">
					<Button variant="contained" type="submit">
						Send password reset email
					</Button>
				</div>
			</Form>
		);
	}

	function renderNewPassword() {
		return (
			<Form noValidate validated={validated} onSubmit={handleResetPassword}>
				<Form.Group controlId="confirmationCode">
					<Form.Label>Confirmation Code</Form.Label>
					<Form.Control
						autoFocus
						type="tel"
						onChange={handleFieldChange}
						value={fields.confirmationCode}
						isValid={handlePasswordValidation()}
					/>
					<p>Please check your email for the code.</p>
				</Form.Group>
				<Form.Group controlId="password">
					<Form.Label>New Password</Form.Label>
					<Form.Control
						type="password"
						autoComplete="new-password"
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
						Verify
					</Button>
				</div>
			</Form>
		);
	}
	return <div>{confirmedEmail ? renderNewPassword() : renderEmail()}</div>;
}

export default withRouter(RestorePassword);
