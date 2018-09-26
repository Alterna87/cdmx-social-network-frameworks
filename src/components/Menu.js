import React, { Component} from 'react';
import { firebaseApp } from '../firebase';
import firebase from 'firebase';
import { Link, withRouter } from 'react-router-dom';

import M from "materialize-css/dist/js/materialize.min.js";
import backNav from '../assets/background-zarape.jpg'


class Menu extends Component {
  constructor(props) {
    super();
  }

  componentDidMount() {
        const elem = document.querySelector(".sidenav");
        let instance = M.Sidenav.init(elem, {
            edge: "left",
            inDuration: 250
        });
    }


signOut() {
  firebaseApp.auth().signOut()
  .then(result => this.props.history.replace('/signin'));
  }
  render() {
    return (
  <div>
  <a href="#" data-target="slide-out" className = "sidenav-trigger"><i className="material-icons">menu</i></a>
  <ul id="slide-out" className="sidenav">
      <li><div className ="user-view">
        <div className ="background">
          <img src= { backNav } />
        </div>
        <a href="#user"><img className ="circle" src="images/yuna.jpg" /></a>
        <a href="#name"><span className ="white-text name">John Doe</span></a>
        </div></li>
      <li><a href="#!"><i className ="material-icons">cloud</i>First Link With Icon</a></li>
      <li><a href="#!">Second Link</a></li>
      <li><div className ="divider"></div></li>
      <li><a className ="subheader">Subheader</a></li>
      <li><a className="col s6 offset-s3 waves-effect waves-light btn teal orange lighten-1" onClick = {() => this.signOut()}>Salir <i className = "fas fa-sign-out-alt"></i></a>
</li>
    </ul>
    <a href="#" data-target="slide-out" className ="sidenav-trigger"><i className ="material-icons">menu</i></a>

      </div>
      );
  }
}

export default withRouter (Menu);
