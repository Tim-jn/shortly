import logo from '../assets/logo.svg'
import '../styles/Header.scss'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import menuIcon from '../assets/menu.png'

export default function Header() {
  const [toggle, setToggle] = useState(false)

  const isSmallScreen = useMediaQuery({ maxWidth: 1024 })

  const toggleSidebar = () => {
    setToggle(!toggle)
  }

  const openNav = () => {
    toggleSidebar()
  }

  return (
    <header className="header">
      {isSmallScreen ? (
        <div className="nav-content">
          <Link to="/">
            <img src={logo} alt="Shortly logo" className="logo" />
          </Link>
          <img
            src={menuIcon}
            alt="menu icon"
            className="menu-icon"
            onClick={openNav}
          />
          {toggle ? (
            <div className="toggle-menu-nav">
              <nav className="toggle-nav">
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
              <hr></hr>
              <ul className="header-account">
                <li className="login">
                  <Link to="/error404">Login</Link>
                </li>
                <li className="signup">
                  <Link to="/error404">Sign Up</Link>
                </li>
              </ul>
            </div>
          ) : (
            ''
          )}
        </div>
      ) : (
        <>
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
              <li className="login">
                <Link to="/error404">Login</Link>
              </li>
              <li className="signup">
                <Link to="/error404">Sign Up</Link>
              </li>
            </ul>
          </div>
        </>
      )}
    </header>
  )
}
