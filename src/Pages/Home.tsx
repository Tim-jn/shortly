import '../styles/Home.scss'
import Header from '../Components/Header'
import FooterBanner from '../Components/FooterBanner'
import Footer from '../Components/Footer'
import StatsCard from '../Components/StatsCard'
import brandIcon from '../assets/icon-brand-recognition.svg'
import recordsIcon from '../assets/icon-detailed-records.svg'
import customIcon from '../assets/icon-fully-customizable.svg'
import ShortenLink from '../Components/ShortenLink'

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
            <a href="#shorten-link" className="started-btn">Get Started</a>
        </div>
        <div className="infos-image-content">
          <div className="infos-image"></div>
        </div>
      </section>
      <div id="shorten-link"></div>
      <br />
      <section className="stats-section">
        <ShortenLink />
        <div className="stats-text">
          <h2 className="stats-title">Advanced Statistics</h2>
          <p className="stats-paragraph">
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
          <div className="stats-cards">
            <StatsCard
              icon={brandIcon}
              title="Brand Recognition"
              paragraph="Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content."
            />
            <StatsCard
              icon={recordsIcon}
              title="Detailed Records"
              paragraph="Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."
            />
            <StatsCard
              icon={customIcon}
              title="Fully Customizable"
              paragraph="Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."
            />
          </div>
        </div>
      </section>
      <FooterBanner />
      <Footer />
    </main>
  )
}
