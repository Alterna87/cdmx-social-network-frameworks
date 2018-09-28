import React, { Component,  } from 'react';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import firebaseApp  from 'firebase';
import { withRouter } from 'react-router-dom';
import taco from './assets/taco.png';

// Components
import Menu from './components/Menu';
import FormRecipe from './components/FormRecipe';


class App extends Component {
constructor() {
  super();
}
  componentDidMount() {
  firebaseApp.auth().onAuthStateChanged(user => {
    if (user) {
      console.log('Usuario está en sesion');
      this.props.history.push('/');
    } else {
      console.log('No hay usuario iniciado de sesion');
        this.props.history.replace('/signin');

    }
});
}

  render() {
    return (
      <div className="">
        <header >
        <div className = 'bcg-pink' >
          <Menu/>
          </div>
        </header>
        <FormRecipe />

      </div>
    );
  }
}

export default withRouter(App);
