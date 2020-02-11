import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Grid } from "@material-ui/core";
import { withRouter } from "react-router-dom";

import "./navbar.styles.scss";
import SignOutMenu from "../sign-out-menu/sign-out-menu.component";
import SignInUpMenu from "../sign-in-up-menu/sign-in-up-menu.component";
import DirectoryNavigationMenu from "../directory-navigation-menu/directory-navigation-menu.component";

function Navbar({ user, ...props }) {
	let isAuthenticated = false;

	if (user !== null) isAuthenticated = true;

	return (
		<div className="nav-menu">
			<AppBar position="static" className="app-bar">
				<div className="top-line"></div>
				<Toolbar className="navigation">
					<Grid
						container
						direction="row"
						justify="space-between"
						alignItems="center"
					>
						<>
							<DirectoryNavigationMenu />
						</>
						<>
							{isAuthenticated ? (
								<SignOutMenu {...props} />
							) : (
								<SignInUpMenu {...props} />
							)}
						</>
					</Grid>
				</Toolbar>
			</AppBar>
		</div>
	);
}

export default withRouter(Navbar);
