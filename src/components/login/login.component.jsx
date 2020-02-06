import React, { useState } from "react";
import { Form, Row } from "react-bootstrap";
import { Grid, Link } from "@material-ui/core";
import { useFormFields } from "../../libs/hooksLibs";
import "./login.styles.scss";
import { Auth } from "aws-amplify";
import { withRouter } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "../../redux/user/user.action";
import CustomButton from "../custom-button/custom-button.component";
import ErrorMessage from "../error-message/error-message.component";

function Login(props) {
	const dispatch = useDispatch();
	// const [isLoading, setIsLoading] = useState(false);
	const [fields, handleFieldChange] = useFormFields({
		email: "",
		password: ""
	});
	const [errorMessage, handleErrorMessage] = useState("");

	async function handleSubmit(event) {
		event.preventDefault();
		// setIsLoading(true);
		try {
			let newUser = await Auth.signIn(fields.email, fields.password);
			let user = {
				id: newUser.pool.clientId,
				email: newUser.signInUserSession.idToken.payload.email
			};
			dispatch(setCurrentUser(user));
			props.history.push("/");
		} catch (err) {
			handleErrorMessage(err.message);
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
						placeholder="Enter email"
					/>
				</Form.Group>
				<Form.Group controlId="password">
					<Form.Label>Password</Form.Label>
					<Form.Control
						type="password"
						value={fields.password}
						onChange={handleFieldChange}
						placeholder="Password"
					/>
				</Form.Group>
				<div>
					<CustomButton
						className="submit-button"
						variant="contained"
						type="submit"
					>
						Login
					</CustomButton>
				</div>
			</Form>
			<Row className="forgot-password">
				<Grid container>
					<Grid item xs>
						<Link href="/restore-password" variant="body2">
							Forgot password?
						</Link>
					</Grid>
					<Grid item>
						<Link href="/signup" variant="body2">
							{"Don't have an account? Sign Up"}
						</Link>
					</Grid>
				</Grid>
			</Row>
			<ErrorMessage errorMessage={errorMessage} />
		</div>
	);
}

export default withRouter(Login);
