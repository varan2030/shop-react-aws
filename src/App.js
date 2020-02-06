import React, { useEffect } from "react";
import "./App.css";

import Navbar from "./components/navbar/navbar.component";
import { withRouter } from "react-router-dom";
import { Auth } from "aws-amplify";
import { setCurrentUser } from "./redux/user/user.action";
import Routes from "./Routes";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "react-bootstrap";
import Directory from "./components/directory/directory.component";

function App(props) {
	const dispatch = useDispatch();
	const user = useSelector((state) => state.user.currentUser);

	useEffect(() => {
		onLoad();
		if (user === null) {
			let currentUser;
			Auth.currentAuthenticatedUser().then((session) => {
				console.log(session.pool.clientId)
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
		} catch (err) {
			if (err !== "No current user") {
				console.log(err);
			}
		}
	}

	return (
		<div className="App">
			<Navbar user={user} {...props} />
			<Directory {...props}/>
			<Container className="container">
				<Routes user={user} {...props} />
			</Container>
		</div>
	);
}

export default withRouter(App);
