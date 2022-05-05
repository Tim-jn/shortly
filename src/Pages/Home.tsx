import '../styles/Home.scss'
import Header from '../Components/Header'
import { Link } from 'react-router-dom'
import FooterBanner from '../Components/FooterBanner'

export default function Home() {
  return (
    <main className="home">
      <Header />
      <section className="infos-section">
        <div className="infos-text-content">
          <h1 className="infos-title">More than just shorter links</h1>
          <p className="infos-paragraph">
            Build your brand's recognition and get detailed insights on how your
            links are performing.
          </p>
          <Link to="/error404">
            <button className="started-btn">Get Started</button>
          </Link>
        </div>
        <div className="infos-image-content">
          <div className="infos-image"></div>
        </div>
      </section>
      <FooterBanner />
    </main>
  )
}
