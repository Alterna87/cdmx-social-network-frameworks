import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// Components
import SignUp from './components/SingInUp';
import SignIn from './components/SignIn';

const AppRouters = () => {

  return(
    <App>
    <Route exact path = '/' component = { App } />
    <Route exact path = '/signup' component = { SignUp } />
    <Route exact path = '/signin' component = { SignIn } />
    </App>

  );
}

export default AppRouters;
