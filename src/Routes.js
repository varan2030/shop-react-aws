import React from "react";
import { Route, Switch } from "react-router-dom";
import { Container } from "@material-ui/core";

import HomePage from "./pages/home-page/home-page.component";
import LoginPage from "./pages/login-page/login-page.component";
import SignUpPage from "./pages/sign-up-page/sign-up-page.component";
import AuthenticatedRoute from "./components/auth/AuthenticatedRoute";
import UnauthenticatedRoute from "./components/auth/UnauthenticatedRoute";
import NotFound from "./pages/not-found/not-found-page.component";
import RestorePasswordPage from "./pages/restore-password-page/restore-password-page.component";

export default function Routes({ appProps }) {
	let isAuthenticated = false;
	if (appProps.user !== null) isAuthenticated = true;
	return (
		<Container className="container">
			<Switch>
				<Route exact path="/" component={HomePage} appProps={isAuthenticated} />
				<UnauthenticatedRoute
					exact
					path="/login"
					component={LoginPage}
					appProps={{ isAuthenticated }}
				/>
				<UnauthenticatedRoute
					exact
					path="/signup"
					component={SignUpPage}
					appProps={{ isAuthenticated }}
				/>
				<UnauthenticatedRoute
					exact
					path="/restore-password"
					component={RestorePasswordPage}
					appProps={{ isAuthenticated }}
				/>
				<Route component={NotFound} />
			</Switch>
		</Container>
	);
}
