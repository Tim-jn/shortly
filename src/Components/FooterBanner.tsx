import '../styles/FooterBanner.scss'
import { Link } from 'react-router-dom'

export default function FooterBanner() {
  return (
    <div className="footer-banner">
      <h2 className="footer-banner-title">Boost your links today</h2>
      <Link to="/error404">
        <button className="started-btn">Get Started</button>
      </Link>
    </div>
  )
}
