import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Route, BrowserRouter } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';
import SignUp from './components/SingInUp';
import { firebaseApp } from './firebase';

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
            <Route path = '/signup' component={ SignUp }/>
        </div>
    </BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
