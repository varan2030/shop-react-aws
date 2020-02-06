import React from "react";
import { Route, Switch } from "react-router-dom";

import "./Routes.styles.scss";
import HomePage from "./pages/home-page/home-page.component";
import LoginPage from "./pages/login-page/login-page.component";
import SignUpPage from "./pages/sign-up-page/sign-up-page.component";
import AuthenticatedRoute from "./components/auth/AuthenticatedRoute";
import UnauthenticatedRoute from "./components/auth/UnauthenticatedRoute";
import NotFound from "./pages/not-found/not-found-page.component";
import RestorePasswordPage from "./pages/restore-password-page/restore-password-page.component";
import CartPage from "./pages/cart-page/cart-page.component";
import AccountPage from "./pages/account-page/account-page.component";

export default function Routes({ user, ...props }) {
	let isAuthenticated = false;
	if (user !== null) isAuthenticated = true;
	return (
		<Switch>
			<Route exact path="/" component={HomePage} appProps={isAuthenticated} {...props} />
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
			<Route
				exact
				path="/cart"
				component={CartPage}
				// appProps={{ isAuthenticated }}
			/>
			<AuthenticatedRoute
				exact
				path="/account"
				component={AccountPage}
				appProps={{ isAuthenticated }}
			/>
			<Route component={NotFound} />
		</Switch>
	);
}
