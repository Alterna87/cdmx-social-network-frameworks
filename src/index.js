import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers'
import { firebaseApp } from './firebase';
import SignUp from './components/SingInUp';
import SignIn from './components/SignIn';
import RecipeDetails from './components/RecipeDetails';
import { logUser } from './actions'

const store = createStore(reducers);

firebaseApp.auth().onAuthStateChanged(user => {
  if (user) {
    console.log('Usuario está en sesion');
    const { email } = user;
    store.dispatch(logUser(email));
  } else {
    console.log('No hay usuario iniciado de sesion');
  }
});

ReactDOM.render(
  <Provider store = {store}>
  <BrowserRouter basename = { process.env.PUBLIC_URL } >
    <div>
            <Route exact path = '/' component = { App } />
            <Route  path = '/signup' component = { SignUp } />
            <Route  path = '/signin' component = { SignIn } />
            <Route  path = '/recipe/:id' component = { RecipeDetails } />
      </div>
    </BrowserRouter></Provider>, document.getElementById('root'));
registerServiceWorker();
