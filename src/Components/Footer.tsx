import '../styles/Footer.scss'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <h2 className="footer-title">Boost your links today</h2>
      <Link to="/error404">
        <button className="started-btn">Get Started</button>
      </Link>
    </footer>
  )
}
