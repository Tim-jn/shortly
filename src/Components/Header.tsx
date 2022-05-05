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
        <nav className="header-nav">
          <Link to="/" className="features">
            Features
          </Link>
          <Link to="/error404" className="pricing">
            Pricing
          </Link>
          <Link to="/error404" className="resources">
            Resources
          </Link>
        </nav>
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
