import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Route, BrowserRouter } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';
import { firebaseApp } from './firebase';
import SignUp from './components/SingInUp';
import SignIn from './components/SignIn';

firebaseApp.auth().onAuthStateChanged(user => {
  if (user) {
    console.log('Usuario está en sesion');
  } else {
    console.log('No hay usuario iniciado de sesion');
  }
} );

ReactDOM.render(<BrowserRouter>
        <div>
            <Route exact = { true }  path = '/' component = { App } />
            <Route path = '/signup' component= { SignUp }/>
            <Route path = '/signin' component= { SignIn }/>
        </div>
    </BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
