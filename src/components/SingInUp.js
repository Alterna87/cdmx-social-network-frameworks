import React, { Component } from 'react';
import { firebaseApp } from '../firebase';

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
    .catch(error => { this.setState({ error }) })
  }

  render() {
    return (
      <div className="row">
        <h3>Registrarse</h3>
        <div className="row">
          <div className="input-field col s6">
          <input id="email" type="email" className="validate" onChange = { event => this.setState({ email: event.target.value })}/>
          <label>Email</label>
          </div>
          </div>
          <div className="row">
          <div className="input-field col s6">
            <input id="password" type="password" className="validate" onChange = { event => this.setState({ password: event.target.value })}/>
            <label>Password</label>
            </div>
          </div>
          <div className="row">
          <a className="waves-effect waves-light btn" onClick = {() => this.signUp()} >Registrase</a>
          </div>
          <div>{ this.state.error.message }</div>
      </div>
    )
  }
}

export default SingInUp;
