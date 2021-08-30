import React, { Component } from 'react';
import {  Route, Switch } from 'react-router-dom';


import Header from './Header';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import Dashboard from './Dashboard'
import requireAuth from './requireAuth'

const App = (props) => {
  return (
    <div >
      <Header />
      
      <Switch>
        <Route exact path='/login' component={LoginForm} />
        <Route exact path='/signup' component={SignupForm} />
        <Route exact path='/dashboard' component={requireAuth(Dashboard)} />
      </Switch>
  
    </div>
  );
};

export default App;
