import React, { Component, PropTypes } from 'react'
import LoginFirebase from './LoginFirebase'
import Login from './Login'
import Logout from './Logout'
import Register from './Register'
import { loginUserFirebase, loginUser, logoutUser, registerUser } from '../actions'

export default class Navbar extends Component {

  render() {
    const { dispatch, isAuthenticated, errorMessage } = this.props

    return (
      <nav className='navbar navbar-default'>
        <div className='container-fluid'>
          <a className="navbar-brand" href="#">Hextras</a>
           <div className='navbar-form'>

           {!isAuthenticated &&
              <LoginFirebase
                errorMessage={errorMessage}
                onLoginClick={ (ref, creds) => dispatch(loginUserFirebase(ref, creds)) }
              />
           }

           {!isAuthenticated &&
              <Login
                errorMessage={errorMessage}
                onLoginClick={ creds => dispatch(loginUser(creds)) }
              />
           }

           {isAuthenticated &&
             <Logout onLogoutClick={() => dispatch(logoutUser())} />
           }

           {isAuthenticated &&
             <p> Welcome! </p>
           }

           {!isAuthenticated &&
           <Register
              onRegisterClick={(creds) => dispatch(registerUser(creds))}
              errorMessage={errorMessage}
              />
            }

         </div>
       </div>
     </nav>
    )
  }

}

Navbar.propTypes = {
  dispatch: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string
}
