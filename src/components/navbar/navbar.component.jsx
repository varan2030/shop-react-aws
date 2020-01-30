import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import { Home } from "@material-ui/icons";
import { Grid } from "@material-ui/core";
import { withRouter } from "react-router-dom";

import "./navbar.styles.scss";
import SignOutMenu from "../sign-out-menu/sign-out-menu.component";
import SignInUpMenu from "../sign-in-up-menu/sign-in-up-menu.component";

function Navbar({ user, ...props }) {
	let isAuthenticated = false;

	if (user !== null) isAuthenticated = true;

	const handleClickToHomePage = () => {
		props.history.push("/");
	};

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
						<IconButton
							onClick={handleClickToHomePage}
							className="nav-item"
							aria-label="menu"
						>
							<Home />
						</IconButton>
						<Typography
							onClick={handleClickToHomePage}
							className="nav-item"
							variant="h6"
						>
							Split
						</Typography>
						{isAuthenticated ? (
							<SignOutMenu {...props} />
						) : (
							<SignInUpMenu {...props} />
						)}
					</Grid>
				</Toolbar>
			</AppBar>
		</div>
	);
}

export default withRouter(Navbar);
