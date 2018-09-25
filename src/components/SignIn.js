import React, { Component} from 'react';
import { firebaseApp } from '../firebase';
import logo  from '../assets/logo.png';
import { Link, withRouter } from 'react-router-dom';


class SignIn extends Component {
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
  signIn() {
    console.log('this.state', this.state);
    const { email, password } = this.state;
    firebaseApp.auth().signInWithEmailAndPassword(email, password)
    .then(user => {
        this.props.history.push('/');
    })

    .catch(error => { this.setState({ error }) });

  }

signInFacebook() {

  }

  signInGoogle() {

  }

  render() {
    return (
      <div className="row col s12 ">
      <div className='row col s12'>
      <img className= 'col s12 taco-logo' src = { logo }/>
      </div>
        <div className="row col s10 offset-s1">
        <h6 className='col s5 offset-s4 font-dosis '>Inicia Sesion</h6>
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
          <a className="col s6 offset-s3 waves-effect waves-light btn teal orange lighten-1 " onClick = { () => this.signIn() } >Entrar <i className="fas fa-arrow-alt-circle-right"></i></a>
          <a className="col s6 offset-s3 waves-effect waves-light btn light-blue darken-4 btn-mar" ><i className="fab fa-facebook-f"></i>acebook</a>
          <a className="col s6 offset-s3 waves-effect waves-light btn red darken-4 btn-mar"  ><i className="fab fa-google"></i>oogle</a>
          <div className = 'row col s6 offset-s3 '><Link to = { '/signup' } >¿Aún no te has registrado?</Link></div>
          </div>
          <span className = 'row col s10 offset-s1 red-text text-accent-4'>{ this.state.error.message }</span>

          </div>
    )
  }
}

export default withRouter(SignIn);
