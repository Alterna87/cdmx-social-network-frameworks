import React, { Component } from 'react';


class SingInUp extends Component {

  render() {
    return (
      <div className="row">
        <h3>Registrarse</h3>
        <div className="row">
          <div className="input-field col s6">
          <input id="email" type="email" className="validate" />
          <label for="email">Email</label>
          </div>
          </div>
          <div className="row">
          <div className="input-field col s6">
            <input id="password" type="password" className="validate" />
            <label for="password">Password</label>
            </div>
          </div>
      </div>
    )
  }
}

export default SingInUp;
