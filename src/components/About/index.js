import Header from '../Header'
import LogoutButton from '../LogoutButton'
import './index.css'

const About = props => {
  const {history} = props
  const logout = () => {
    history.replace('/login')
  }
  return (
    <div className="home-container">
      <Header />
      <h1>About Route</h1>
      <LogoutButton logout={logout} />
    </div>
  )
}
export default About
