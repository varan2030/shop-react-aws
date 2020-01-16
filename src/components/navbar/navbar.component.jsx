import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { Home } from '@material-ui/icons';
import { Button } from '@material-ui/core';
import { withRouter } from "react-router-dom";

function Navbar(props) {


  const handleClickToHomePage = () => {
    props.history.push('/');
  };

  const handleClickToLoginPage = () => {
    props.history.push('/login');
  };

  return (
    <div >
      <AppBar position="static">
        <Toolbar className="navigation">
          <IconButton onClick={handleClickToHomePage} className="nav-icon" color="inherit" aria-label="menu">
          <Home />
          </IconButton>
          <Typography  onClick={handleClickToHomePage} color="inherit" variant="h6" className="nav-icon">
            Split
          </Typography>
          <Button onClick={handleClickToLoginPage} color="inherit">Login / Signup</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withRouter(Navbar);