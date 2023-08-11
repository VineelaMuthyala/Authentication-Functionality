import {Component} from 'react'
import Cookies from 'js-cookie'

class Login extends Component {
  loginSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  onSubmitLoginButton = async event => {
    event.preventDefault()
    const url = 'https://apis.ccbp.in/login'
    const username = 'rahul'
    const password = 'rahul@2021'
    const userDetails = {username, password}
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data.jwt_token)
    console.log(response.ok)
    if (response.ok === true) {
      this.loginSuccess(data.jwt_token)
    }
  }

  render() {
    return (
      <form className="login-container" onSubmit={this.onSubmitLoginButton}>
        <h1 className="login-heading">Please Login</h1>
        <button className="login-button" type="submit">
          Login with Sample Creds
        </button>
      </form>
    )
  }
}
export default Login
