import {Component} from 'react'

import Cookies from 'js-cookie'
import './index.css'

class LogoutButton extends Component {
  onClickLogoutButton = () => {
    const {logout} = this.props
    Cookies.remove('jwt_token')
    logout()
  }

  render() {
    return (
      <button type="button" onClick={this.onClickLogoutButton}>
        Logout
      </button>
    )
  }
}

export default LogoutButton
