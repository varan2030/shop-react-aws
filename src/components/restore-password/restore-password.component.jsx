import React from "react";

import "./restore-password.styles.scss";
import { useFormFields } from "../../libs/hooksLibs";
import { Form } from "react-bootstrap";
import { Auth } from "aws-amplify";
import { withRouter } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "../../redux/user/user.action";
import CustomButton from "../custom-button/custom-button.component";
import ErrorMessage from "../error-message/error-message.component";

function RestorePassword(props) {
	const [fields, handleFieldChange] = useFormFields({
		email: "",
		password: "",
		confirmPassword: "",
		confirmationCode: ""
	});

	const dispatch = useDispatch();
	const [confirmedEmail, handleConfirmEmail] = useState(false);
	const [validated, setValidated] = useState(false);
	const [errorMessage, handleErrorMessage] = useState("");

	async function handleSubmit(event) {
		event.preventDefault();
		try {
			await Auth.forgotPassword(fields.email);
			handleConfirmEmail(true);
		} catch (err) {
			handleErrorMessage(err.message);
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

	async function handleResetPassword(event) {
		event.preventDefault();
		try {
			await Auth.forgotPasswordSubmit(
				fields.email,
				fields.confirmationCode,
				fields.password
			);
			const newUser = await Auth.signIn(fields.email, fields.password);
			dispatch(
				setCurrentUser({
					id: newUser.pool.clientId,
					email: newUser.signInUserSession.idToken.payload.email
				})
			);
			props.history.push("/");
			console.log(newUser);
		} catch (err) {
			handleErrorMessage(err.message);
		}
		setValidated(true);
	}

	function renderEmail() {
		return (
			<Form onSubmit={handleSubmit} className="login">
				<Form.Group controlId="email">
					<Form.Label>
						Enter your email address and we will send you a password reset link.
					</Form.Label>
					<Form.Control
						type="email"
						value={fields.email}
						onChange={handleFieldChange}
						placeholder="Enter email"
					/>
				</Form.Group>
				<CustomButton variant="contained" type="submit">
					Send password reset email
				</CustomButton>
				<div className="error-message">
					{errorMessage ? (
						<>
							<p>{errorMessage}</p>
						</>
					) : (
						<></>
					)}
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
				<CustomButton
					variant="contained"
					type="submit"
					disabled={!handlePasswordValidation()}
				>
					Verify
				</CustomButton>
				<ErrorMessage errorMessage={errorMessage} />
			</Form>
		);
	}
	return <div>{confirmedEmail ? renderNewPassword() : renderEmail()}</div>;
}

export default withRouter(RestorePassword);
