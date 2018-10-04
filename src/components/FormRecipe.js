import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import firebaseApp  from 'firebase';
import { withRouter } from 'react-router-dom';

import M from "materialize-css/dist/js/materialize.min.js";
import { recipeRef } from '../firebase';

class FormRecipe extends Component {
    constructor(props) {
      super(props);
      this.state = {
        title: '',
        ingredients : '',
        steps: ''
      }
    }

  componentWillMount() {
    firebaseApp.auth().onAuthStateChanged(user => {
      user
      ? this.setState({ user })
      : this.setState ({ user: null });
    });

    document.addEventListener('DOMContentLoaded', () => {
      let elems = document.querySelectorAll('.fixed-action-btn');
      let instances = M.FloatingActionButton.init(elems, {
        direction: 'left'
      });
    });
  }

  addRecipe () {
    console.log('this.state:', this.state);
    recipeRef.push();
  }
render() {
  return (
    <div className = 'row'>
    <div className="col s12">
        <form className="row">
<div className="fixed-action-btn">
  <a className="btn-floating btn-large red">
  <i className="large material-icons">add</i>
  </a>
  <ul>
    <li><a className="btn-floating yellow darken-1"><i className="material-icons">restaurant_menu</i></a></li>
    <li><a className="btn-floating green"><i className="material-icons">place</i></a></li>
  </ul>
</div>
          <div className="input-field col s10 offset-s1">
          <i className="material-icons prefix">restaurant_menu</i>
            <input type="text" id= "autocomplete-input" className="autocomplete" onChange = { event => this.setState ({title: event.target.value})}/>
            <label>Titulo</label>
            </div>
          <div className="input-field col s10 offset-s1">
          <textarea id="textarea1" className = "materialize-textarea" onChange = { event => this.setState ({ingredients: event.target.value})} ></textarea>
          <label>Ingredientes</label>
          </div>
          <div className="input-field col s10 offset-s1">
          <textarea id="textarea2" className="materialize-textarea" onChange = { event => this.setState ({steps: event.target.value})} ></textarea>
          <label>Pasos</label>
          <a className = "waves-effect btn" onClick = { () => this.addRecipe()}><i className="material-icons left">publish</i>Publicar</a>
          </div>

        </form>
      </div>

    </div>
    );
  }
}

export default withRouter (FormRecipe);
