import React, { Component,  } from 'react';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import firebaseApp  from 'firebase';
import { withRouter } from 'react-router-dom';

// Components
import Menu from './components/Menu'

class App extends Component {


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
        <header className="">
          <h1 className="App-title">Mexican Food Lovers</h1>
        </header>
        <Menu />
      </div>
    );
  }
}

export default withRouter(App);
