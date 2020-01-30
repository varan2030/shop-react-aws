import React, { useEffect } from "react";
import "./App.css";

import Navbar from "./components/navbar/navbar.component";

import { Auth } from "aws-amplify";
import { setCurrentUser } from "./redux/user/user.action";
import Routes from "./Routes";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "react-bootstrap";
import { Box, Paper } from "@material-ui/core";

function App(props) {
	const dispatch = useDispatch();
	const user = useSelector((state) => state.user.currentUser);

	useEffect(() => {
		onLoad();
		if (user === null) {
			let currentUser;
			Auth.currentAuthenticatedUser().then((session) => {
				currentUser = {
					id: session.pool.clientId,
					email: session.signInUserSession.idToken.payload.email
					// role: session.signInUserSession.idToken.payload['cognito:groups'][0]
				};
				dispatch(setCurrentUser(currentUser));
			});
		}
	}, [user, dispatch]);

	async function onLoad() {
		try {
			await Auth.currentSession();
		} catch (e) {
			if (e !== "No current user") {
				console.log(e);
			}
		}
	}

	return (
		<div className="App">
			<Navbar user={user} {...props} />
			<Paper elevation={4} className="directory" />
			<Container className="container">
				<Routes user={user} {...props} />
			</Container>
		</div>
	);
}

export default App;
