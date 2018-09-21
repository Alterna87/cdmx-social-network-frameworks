import React, { Component } from 'react';
import { firebaseApp } from '../firebase';
import logo  from '../assets/logo.png';

class SingInUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: {
        message: ''
      }
    }
  }
  signUp() {
    console.log('this.state', this.state);
    const { email, password } = this.state;
    firebaseApp.auth().createUserWithEmailAndPassword(email, password)
    .then(user => {
      window.location ='/';
    })
    .catch(error => { this.setState({ error }) })
  }

  render() {
    return (

      <div className="row col s12 ">
      <div className='row col s12'>
      <img className= 'col s12 taco-logo' src = { logo }/>
      </div>
        <div className="row col s10 offset-s1">
        <h6 className='col s4 offset-s4 font-dosis '>Registro</h6>
          <div className="input-field ">
          <input id="email" type="email" className="validate" onChange = { event => this.setState({ email: event.target.value })}/>
          <label>Email</label>
          </div>
          </div>
          <div className="row col s10 offset-s1">
          <div className="input-field">
            <input id="password" type="password" className="validate" onChange = { event => this.setState({ password: event.target.value })}/>
            <label>Password</label>
            </div>
          </div>
          <div className="row">
          <a className="col s5 offset-s3 waves-effect waves-light btn teal orange lighten-1 " onClick = {() => this.signUp()} ><i className="fas fa-plus-circle"></i> Registrarse</a>
          </div>
          <span className = 'row col s10 offset-s1 red-text text-accent-4'>{ this.state.error.message }</span>
      </div>
    )
  }
}

export default SingInUp;
