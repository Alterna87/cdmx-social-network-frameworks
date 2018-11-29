import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import firebaseApp  from 'firebase';
import { withRouter } from 'react-router-dom';
import  { connect }  from 'react-redux';
import M from "materialize-css/dist/js/materialize.min.js";
import { recipeRef } from '../firebase';

class FormRecipe extends Component {
    constructor(props) {
      super(props);
      this.state = {
        title: '',
        ingredients: '',
        steps: '',
        email:'',
        type: 'Receta',
        like: 0,
        images: '',
        url: ''
        }
    }
    componentDidMount() {
       firebaseApp.auth().onAuthStateChanged(user => {
         user
         ? this.setState({ user })
         : this.setState ({ user: null });

       });

    }

      componentWillMount() {
        document.addEventListener('DOMContentLoaded', function() {
           var elems = document.querySelectorAll('.fixed-action-btn');
           var instances = M.FloatingActionButton.init(elems, {
             direction: 'left'
           });
           var elemsm = document.querySelectorAll('.collapsible');
           var instancesm = M.Collapsible.init(elemsm, {
             direction: 'left'
           });
         });
         M.updateTextFields();
      }
  addRecipe () {

  const {title, ingredients, steps, type, like, images, url} = this.state;
  const storageRef = firebaseApp.storage().ref(`images/${url.name}`);
  const task = storageRef.put(url);
  task.on('state_changed',
snapshot => {
  // progress function
},
error => {
  console.log('error');
},
() => {
    firebaseApp.storage().ref('images').child(url.name).getDownloadURL().then(images => {
    this.setState({ images });
    const {email, name} = this.props.user;
    console.log(this.state);
    recipeRef.push({email, title, ingredients, steps, type, like, images })
  }
  )
}
);
    //console.log('this', this);



  }
render() {
  return (
    <div className = 'row'>
    <div className="col s10 offset-s1">

    <ul className="collapsible">
  <li>
    <div className="collapsible-header"><i className="material-icons">restaurant</i>Receta</div>
    <div className="collapsible-body">

      <form className="row ">

              <div className="input-field col s10 offset-s1">
              <input type="text" id= "autocomplete-input" className="autocomplete validate" onChange = { event => this.setState ({title: event.target.value})}/>
                <label>Titulo</label>
                </div>
              <div className="input-field col s10 offset-s1">
              <textarea id="textarea1" className = "materialize-textarea validate" onChange = { event => this.setState ({ingredients: event.target.value})} ></textarea>
              <label>Ingredientes</label>
              </div>
              <div className="input-field col s10 offset-s1">
              <textarea id="textarea2" className="materialize-textarea validate" onChange = { event => this.setState ({steps: event.target.value})} ></textarea>
              <label>Pasos</label>
                </div>
            <div className="input-field col s10 offset-s1">
            <div className="file-field input-field">
          <div className="btn">
            <span>Foto</span>
            <input type="file" onChange = { event => this.setState ({url: event.target.files[0]})}/>
          </div>
          <div className="file-path-wrapper">
            <input className="file-path validate" type="text" />
          </div>
        </div>

        <div className="">
              <a className = "waves-effect btn" onClick = { () => this.addRecipe()}><i className="material-icons left">publish</i>Compartir</a>
    </div>
            </div>

            </form>
    </div>
  </li>
  <li>
    <div className="collapsible-header"><i className="material-icons">place</i>Lugar</div>
    <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
  </li>

</ul>


      </div>

    </div>
    );
  }
}

 function mapStateToProps  (state) {
  const { user } = state;
  console.log('state in form.js', state);
  return { user }
}

export default withRouter(connect(mapStateToProps)(FormRecipe));
//export default withRouter (FormRecipe);
