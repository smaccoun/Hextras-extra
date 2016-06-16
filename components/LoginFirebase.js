import React, { Component, PropTypes } from 'react'

var Rebase = require('re-base');
var base = Rebase.createClass('https://inner-space.firebaseio.com/');
const ref = new Firebase("https://inner-space.firebaseio.com/");

export default class Login extends Component {

  constructor() {
    super();
		this.state = {
			isAuthenticated : false,
			authData : {}
		}
	}

  render() {
    const { errorMessage } = this.props

    return (
      <div>
        <input type='text' ref='username' className="form-control" style={{ marginRight: '5px' }} placeholder='Username'/>
        <input type='password' ref='password' className="form-control" style={{ marginRight: '5px' }} placeholder='Password'/>
        <button onClick={(event) => this.handleClick(event)} className="btn btn-primary">
          Login
        </button>

        {errorMessage &&
          <p style={{color:'red'}}>{errorMessage}</p>
        }
      </div>
    )
  }


  handleClick(event, authData) {
    const username = this.refs.username
    const password = this.refs.password
    const creds = { username: username.value.trim(), password: password.value.trim() }
    this.props.onLoginClick(ref, creds);
  }
}

Login.propTypes = {
  onLoginClick: PropTypes.func.isRequired,
  errorMessage: PropTypes.string
}
