import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';

import Navbar from './components/navbar/navbar.component'

function App() {
  return (
    <div className="App">
      <Navbar />
    </div>
  );
}

export default App;
