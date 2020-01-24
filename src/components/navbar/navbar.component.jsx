import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { Home } from '@material-ui/icons';
import { Button, Grid } from '@material-ui/core';
import { withRouter } from "react-router-dom";

import './navbar.styles.scss';
import { Auth } from 'aws-amplify';

function Navbar({appProps, ...props}) {

  const handleClickToHomePage = () => {
    props.history.push('/');
  };

  const handleClickToLoginPage = () => {
    props.history.push('/login');
  };

  const handleClickToSignUpPage = () => {
    props.history.push('/signup');
  }

  async function handleClickSignOutPage () {
    await Auth.signOut();
		appProps.isAuthenticated = false;
		props.history.push("/");
  }

  return (
    <div >
      <AppBar position="static">
        <Toolbar className="navigation">
          <Grid  container
            direction="row"
            justify="space-between"
            alignItems="center">
          <IconButton onClick={handleClickToHomePage} className="nav-item" aria-label="menu">
          <Home />
          </IconButton>
          <Typography  onClick={handleClickToHomePage} className="nav-item" variant="h6">
            Split
          </Typography>
          <div>
            {appProps.isAuthenticated ? 
            (<>
              <Button className="nav-item nav-button" onClick={handleClickSignOutPage}>Sign out</Button>
            </>) : 
            (<>
            <Button className="nav-item nav-button" onClick={handleClickToLoginPage}>Login</Button>
            <Button className="nav-item nav-button" onClick={handleClickToSignUpPage}>Sign up</Button>
            </>)
          }

          </div>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withRouter(Navbar);