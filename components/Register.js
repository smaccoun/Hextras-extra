import React, { Component, PropTypes } from 'react'

export default class Register extends Component {

  render() {
    const { errorMessage } = this.props

    return (
      <div>
        <input type='text' ref='username' className="form-control" style={{ marginRight: '5px' }} placeholder='Username'/>
        <input type='password' ref='password' className="form-control" style={{ marginRight: '5px' }} placeholder='Password'/>
        <button onClick={(event) => this.handleClick(event)} className="btn btn-primary">
          Register New User
        </button>

        {errorMessage &&
          <p style={{color:'red'}}>{errorMessage}</p>
        }
      </div>
    )
  }

  handleClick(event) {
    const username = this.refs.username
    const password = this.refs.password
    const creds = { username: username.value.trim(), password: password.value.trim() }
    this.props.onRegisterClick(creds)
  }
}

Register.propTypes = {
  onRegisterClick: PropTypes.func.isRequired,
  errorMessage: PropTypes.string
}
