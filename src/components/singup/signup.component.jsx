import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Button } from "@material-ui/core";
import { useFormFields } from "../../libs/hooksLibs";
import "./signup.styles.scss";
import { Auth } from "aws-amplify";
import { withRouter } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "../../redux/user/user.action";

function Signup(props) {
	const [fields, handleFieldChange] = useFormFields({
		name: "",
		email: "",
		password: "",
		confirmPassword: "",
		confirmationCode: ""
	});
	const dispatch = useDispatch();
	const [validated, setValidated] = useState(false);
	const [newUser, setNewUser] = useState(null);

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
				console.log(newUser);
			} catch (e) {
				alert(e.message);
			}
		}
		setValidated(true);
	};

	function validateConfirmationForm() {
		return fields.confirmationCode.length > 0;
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

	async function handleConfirmationSubmit(event) {
		event.preventDefault();

		try {
			await Auth.confirmSignUp(fields.email, fields.confirmationCode);
			const newUser = await Auth.signIn(fields.email, fields.password);
			dispatch(
				setCurrentUser({
					id: newUser.pool.clientId,
					email: newUser.signInUserSession.idToken.payload.email
				})
			);
			props.history.push("/");
		} catch (e) {
			alert(e.message);
		}
	}

	function renderConfirmationForm() {
		return (
			<div>
				<Form onSubmit={handleConfirmationSubmit}>
					<Form.Group controlId="confirmationCode">
						<Form.Label>Confirmation Code</Form.Label>
						<Form.Control
							autoFocus
							onChange={handleFieldChange}
							value={fields.confirmationCode}
						/>
						<p>Please check your email for the code.</p>
					</Form.Group>
					<div className="submit-button">
						<Button
							type="submit"
							text="Verify"
							variant="contained"
							disabled={!validateConfirmationForm()}
						>
							Verify
						</Button>
					</div>
				</Form>
			</div>
		);
	}

	function renderForm() {
		return (
			<div>
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
		);
	}

	return (
		<div className="signUp">
			{newUser === null ? renderForm() : renderConfirmationForm()}
		</div>
	);
}

export default withRouter(Signup);
