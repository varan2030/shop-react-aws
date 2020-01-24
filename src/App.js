import React, { useState, useEffect } from 'react';
import './App.css';

import Navbar from './components/navbar/navbar.component'

import { Auth } from "aws-amplify";
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.action'
import Routes from './Routes';
// import { createStructuredSelector } from 'reselect';
// import { selectCurrentUser } from './redux/user/user.selectors';

function App(props) {
 
  const {setCurrentUser } = props;

  const [isAuthenticated, userHasAuthenticated] = useState(false);
  const [isAuthenticating, setIsAuthenticating] = useState(true);

  useEffect(() => {
		onLoad();
		Auth.currentAuthenticatedUser().then((session) => {
      console.log(session)
      setCurrentUser({
        id: session.pool.clientId,
        email: session.signInUserSession.idToken.payload.email,
        role: session.signInUserSession.idToken.payload['cognito:groups'][0]
      })
    });
    
});

	async function onLoad() {
		try {
      await Auth.currentSession();
      userHasAuthenticated(true)
		} catch (e) {
			if (e !== "No current user") {
				console.log(e);
			}
    }
    setIsAuthenticating(false);
	}

  return (
    <div className="App">
      <div className="top-line"></div>
      <Navbar 
        appProps = {{isAuthenticated, isAuthenticating}}
      />
      <Routes
        appProps = {{isAuthenticated, isAuthenticating}}
      />
    </div>
  );
}

// const mapStateToProps = createStructuredSelector({
//   currentUser: selectCurrentUser
// })

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps)(App);
