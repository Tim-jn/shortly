import logo from '../assets/logo.svg'
import '../styles/Header.scss'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="header">
      <div className="nav-content">
        <Link to="/">
          <img src={logo} alt="Shortly logo" className="logo" />
        </Link>
        <ul className="header-nav">
          <Link to="/">
            <li className="features">Features</li>
          </Link>
          <Link to="/error404">
            <li className="pricing">Pricing</li>
          </Link>
          <Link to="/error404">
            <li className="resources">Resources</li>
          </Link>
        </ul>
      </div>
      <div className="account">
        <ul className="header-account">
          <Link to="/error404">
            <li className="login">Login</li>
          </Link>
          <Link to="/error404">
            <li className="signup">Sign Up</li>
          </Link>
        </ul>
      </div>
    </header>
  )
}
