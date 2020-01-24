import React from "react";
import { Route, Switch } from 'react-router-dom';
import { Container } from '@material-ui/core';

import HomePage from './pages/home-page/home-page.component';
import LoginPage from './pages/login-page/login-page.component';
import SignUpPage from './pages/sign-up-page/sign-up-page.component';
// import AuthenticatedRoute from "./components/auth/AuthenticatedRoute";
import UnauthenticatedRoute from "./components/auth/UnauthenticatedRoute";
import NotFound from "./pages/not-found/not-found-page.component";

export default function Routes({ appProps }) {
	return (
        <Container className="container">
            <Switch>
                <UnauthenticatedRoute exact path="/" component={HomePage}  appProps={appProps}/>
                <UnauthenticatedRoute exact path="/login" component={LoginPage} appProps={appProps}/>
                <UnauthenticatedRoute exact path="/signup" component={SignUpPage} appProps={appProps}/>
                <Route component={NotFound} />
            </Switch>
        </Container>
        )
}