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
        <ul className="columns second-column">
          <li className="column-title resources">Resources</li>
          <Link to="/error404">
            <li className="second-column-link">Blog</li>
          </Link>
          <Link to="/error404">
            <li className="second-column-link">Developers</li>
          </Link>
          <Link to="/error404">
            <li className="second-column-link">Support</li>
          </Link>
        </ul>
        <ul className="columns third-column">
          <li className="column-title company">Company</li>
          <Link to="/error404">
            <li className="third-column-link">About</li>
          </Link>
          <Link to="/error404">
            <li className="third-column-link">Our Team</li>
          </Link>
          <Link to="/error404">
            <li className="third-column-link">Careers</li>
          </Link>
          <Link to="/error404">
            <li className="third-column-link">Contact</li>
          </Link>
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
