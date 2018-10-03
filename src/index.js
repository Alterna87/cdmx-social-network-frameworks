import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route } from 'react-router-dom';

import { firebaseApp } from './firebase';
import SignUp from './components/SingInUp';
import SignIn from './components/SignIn';


firebaseApp.auth().onAuthStateChanged(user => {
  if (user) {
    console.log('Usuario está en sesion');


  } else {
    console.log('No hay usuario iniciado de sesion');
  }
});

ReactDOM.render(<BrowserRouter basename={ process.env.PUBLIC_URL } >
    <div>
            <Route exact path = '/' component = { App } />
            <Route exact path = '/signup' component = { SignUp } />
            <Route exact path = '/signin' component = { SignIn } />
      </div>
    </BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
