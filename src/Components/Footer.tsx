import { Link } from 'react-router-dom'
import logo from '../assets/logo-footer.svg'
import '../styles/Footer.scss'

export default function Footer() {
  return (
    <footer className="footer">
      <img src={logo} alt="Shortly logo" className="footer-logo" />
      <div className="footer-links-section">
        <ul className="columns first-column">
          <li className="column-title features">Features</li>
          <li className="first-column-link">
            <Link to="/error404">Link Shortening</Link>
          </li>
          <li className="first-column-link">
            <Link to="/error404">Branded Links</Link>
          </li>
          <li className="first-column-link">
            <Link to="/error404">Analytics</Link>
          </li>
        </ul>
        <ul className="columns second-column">
          <li className="column-title resources">Resources</li>
          <li className="second-column-link">
            <Link to="/error404">Blog</Link>
          </li>
          <li className="second-column-link">
            <Link to="/error404">Developers</Link>
          </li>
          <li className="second-column-link">
            <Link to="/error404">Support</Link>
          </li>
        </ul>
        <ul className="columns third-column">
          <li className="column-title company">Company</li>
          <li className="third-column-link">
            <Link to="/error404">About</Link>
          </li>
          <li className="third-column-link">
            <Link to="/error404">Our Team</Link>
          </li>
          <li className="third-column-link">
            <Link to="/error404">Careers</Link>
          </li>
          <li className="third-column-link">
            <Link to="/error404">Contact</Link>
          </li>
        </ul>
      </div>
      <div className="social-icons">
        <a
          href="https://facebook.com"
          className="facebook"
          target="_blank"
          rel="noreferrer"
        >
          Facebook
        </a>
        <a
          href="https://twitter.com"
          className="twitter"
          target="_blank"
          rel="noreferrer"
        >
          Twitter
        </a>
        <a
          href="https://pinterest.com"
          className="pinterest"
          target="_blank"
          rel="noreferrer"
        >
          Pinterest
        </a>
        <a
          href="https://instagram.com"
          className="instagram"
          target="_blank"
          rel="noreferrer"
        >
          Instagram
        </a>
      </div>
    </footer>
  )
}
