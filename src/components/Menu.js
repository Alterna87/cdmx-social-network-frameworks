import React, { Component} from 'react';
import { firebaseApp } from '../firebase';
import firebase from 'firebase';
import { Link, withRouter } from 'react-router-dom';

import M from "materialize-css/dist/js/materialize.min.js";
import backNav from '../assets/background-zarape.jpg';
import '../App.css';
import './Menu.css';



class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
     user: null
   };
  }

  componentDidMount() {
        const elem = document.querySelector(".sidenav");
        let instance = M.Sidenav.init(elem, {
            edge: "left",
            inDuration: 250
        });

    }

    componentWillMount() {
      firebaseApp.auth().onAuthStateChanged(user => {
        user
        ? this.setState({ user })
        : this.setState ({ user: null });

      });
    }

userInfoAvatar () {
  if(this.state.user) {
      return (<a href="#"><img className ="circle" src = { this.state.user.photoURL } /> </a>);
  }
}

userInfoName() {
    if (this.state.user) {
  return  (<a href="#name"><span className="white-text name">{this.state.user.displayName}</span></a>)
    }

  }

signOut() {
  firebaseApp.auth().signOut()
  .then(result => this.props.history.replace('/signin'));
  }

  render() {

    return (

  <div className = 'menu-margin'>
  <a href="#" data-target="slide-out" className = "sidenav-trigger"><i className="material-icons"></i></a>
  <ul id="slide-out" className="sidenav">
      <li><div className ="user-view">
        <div className ="background">
          <img src= { backNav } />
        </div>
        { this.userInfoAvatar () }
        { this.userInfoName() }
        </div></li>
      <li><a href="#!">Recetas</a></li>
      <li><a href="#!">Lugares</a></li>
      <li><div className ="divider"></div></li>
      <li><a className ="subheader">Perfil</a></li>
      <li><a className="waves-effect waves-light btn teal orange lighten-1" onClick = {() => this.signOut()}>Salir <i className = "fas fa-sign-out-alt"></i></a>
      </li>
    </ul>
    <a href="#" data-target="slide-out" className ="sidenav-trigger"><i className="fas fa-bars icon-size "></i></a>

      </div>
      );
  }
}

export default withRouter (Menu);
