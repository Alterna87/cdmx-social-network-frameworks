import React, { Component,  } from 'react';
import logo from './logo.svg';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import firebaseApp  from 'firebase';
import { withRouter } from 'react-router-dom';

class App extends Component {
  signOut() {
    firebaseApp.auth().signOut();
    this.props.history.replace('/signin');

  }

  componentWillMount() {
    
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

      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Mexican Food Lovers</h1>
        </header>
        <a className="col s6 offset-s3 waves-effect waves-light btn teal orange lighten-1" onClick = {() => this.signOut()}>Salir <i className = "fas fa-sign-out-alt"></i></a>
      </div>
    );
  }
}

export default withRouter(App);
