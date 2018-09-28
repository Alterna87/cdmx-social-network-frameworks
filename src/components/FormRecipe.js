import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import firebaseApp  from 'firebase';
import { withRouter } from 'react-router-dom';


class FormRecipe extends Component {



  componentWillMount() {
    firebaseApp.auth().onAuthStateChanged(user => {
      user
      ? this.setState({ user })
      : this.setState ({ user: null });

    });
  }



render() {

  return (
    <div className = 'row'>
    <div className="col s12">
        <form className="row">
          <div className="input-field col s10 offset-s1">
          <i className="material-icons prefix">restaurant_menu</i>
            <input type="text" id= "autocomplete-input" className="autocomplete" />
            <label>Titulo</label>
            </div>
          <div className="input-field col s10 offset-s1">
          <textarea id="textarea1" className="materialize-textarea"></textarea>
          <label>Ingredientes</label>
          </div>
          <div className="input-field col s10 offset-s1">
          <textarea id="textarea2" className="materialize-textarea"></textarea>
          <label>Pasos</label>
          </div>



        </form>
      </div>

    </div>
    );
}

}

export default withRouter (FormRecipe);
