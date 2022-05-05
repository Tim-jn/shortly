import { Link } from 'react-router-dom'
import logo from '../assets/logo.svg'

export default function Footer() {
  return (
    <footer className="footer">
      <img src={logo} alt="Shortly logo" className="footer-logo" />
      <div className="footer-links-section">
        <ul className="first-column">
          <li className="features">Features</li>
          <Link to="/error404">
            <li className="first-column-link">Link Shortening</li>
          </Link>
          <Link to="/error404">
            <li className="first-column-link">Branded Links</li>
          </Link>
          <Link to="/error404">
            <li className="first-column-link">Analytics</li>
          </Link>
        </ul>
      </div>
    </footer>
  )
}
