import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import Navbar from './components/navbar/navbar.component'
import HomePage from './pages/home-page/home-page.component';
import LoginSignUpPage from './pages/login-signup-page/login-signup-page.component';
import { Container } from '@material-ui/core';

function App() {
  return (
    <div className="App">
      <div className="top-line"></div>
      <Navbar />
      <Container className="container">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/login" component={LoginSignUpPage} />
        </Switch>
      </Container>

    </div>
  );
}

export default App;
