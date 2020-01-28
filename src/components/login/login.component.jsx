import React from "react";
import { Form, Row } from "react-bootstrap";
import { Button, Grid, Link } from "@material-ui/core";
import { useFormFields } from "../../libs/hooksLibs";
import "./login.styles.scss";
import { Auth } from "aws-amplify";
import { withRouter } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "../../redux/user/user.action";

function Login(props) {
	const dispatch = useDispatch();
	// const [isLoading, setIsLoading] = useState(false);
	const [fields, handleFieldChange] = useFormFields({
		email: "",
		password: ""
	});

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
				<Form.Group controlId="checkbox">
					<Form.Check type="checkbox" label="Remember me" />
				</Form.Group>
				<div className="submit-button">
					<Button variant="contained" type="submit">
						Login
					</Button>
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
		</div>
	);
}

export default withRouter(Login);
