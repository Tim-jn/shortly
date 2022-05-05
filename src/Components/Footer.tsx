import { Link } from 'react-router-dom'
import logo from '../assets/logo-footer.svg'
import iconFacebook from '../assets/icon-facebook.svg'
import iconTwitter from '../assets/icon-twitter.svg'
import iconPinterest from '../assets/icon-pinterest.svg'
import iconInstagram from '../assets/icon-instagram.svg'
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
      <ul className="social-icons">
        <li className="facebook"></li>
        <li className="twitter"></li>
        <li className="pinterest"></li>
        <li className="instagram"></li>
      </ul>
    </footer>
  )
}