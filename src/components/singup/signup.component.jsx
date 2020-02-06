import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { useFormFields } from "../../libs/hooksLibs";
import "./signup.styles.scss";
import { Auth, API } from "aws-amplify";
import { withRouter } from "react-router-dom";
import CustomButton from "../custom-button/custom-button.component";
import ErrorMessage from "../error-message/error-message.component";

function Signup(props) {
	const [fields, handleFieldChange] = useFormFields({
		name: "",
		email: "",
		password: "",
		confirmPassword: "",
		confirmationCode: ""
	});
	const [validated, setValidated] = useState(false);
	const [newUser, setNewUser] = useState(null);
	const [errorMessage, handleErrorMessage] = useState("");

	const handleSubmit = async (event) => {
		const form = event.currentTarget;
		if (form.checkValidity() === false) {
			event.preventDefault();
			event.stopPropagation();
		} else {
			event.preventDefault();
			try {
				const newUser = await Auth.signUp({
					username: fields.email,
					password: fields.password
				});
				setNewUser(newUser);
				await createUser({
					userName: fields.name,
					userEmail: fields.email
				})
			} catch (err) {
				handleErrorMessage(err.message);
			}
		}
		setValidated(true);
	};

	const createUser =  (user) => {
        return API.post('users', '/users', {
				body: user
			})
	}

	const handlePasswordValidation = () => {
		if (
			fields.password.match(/[a-z]/g) &&
			fields.password.match(/[A-Z]/g) &&
			fields.password.match(/[0-9]/g) &&
			fields.password.match(/[^a-zA-Z\d]/g) &&
			fields.password.length >= 8 &&
			fields.password === fields.confirmPassword
		) {
			return true;
		}
		return false;
	};

	function renderConfirmationForm() {
		return (
			<div>
				<h5>Please check your email inbox for a verification link.</h5>
			</div>
		);
	}

	function renderForm() {
		return (
			<Form noValidate validated={validated} onSubmit={handleSubmit}>
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
					Signup
				</CustomButton>
				<ErrorMessage errorMessage={errorMessage} />
			</Form>
		);
	}

	return (
		<div className="signUp">
			{newUser === null ? renderForm() : renderConfirmationForm()}
		</div>
	);
}

export default withRouter(Signup);
