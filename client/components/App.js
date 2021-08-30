import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import Header from './Header';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

const App = (props) => {
  return (
    <div >
      <Header />
      
      <Switch>
        <Route exact path='/login' component={LoginForm} />
        <Route exact path='/signup' component={SignupForm} />
      </Switch>
  
    </div>
  );
};

export default App;
