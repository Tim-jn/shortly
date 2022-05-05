import '../styles/StatsCard.scss'

export default function StatsCard({ icon, title, paragraph }: Props) {
  return (
    <div className="stats-card">
      <div className="stats-image-bg">
        <img src={icon} alt="Icon" className="stats-icon" />
      </div>
      <h3 className="card-title">{title}</h3>
      <p className="card-paragraph">{paragraph}</p>
    </div>
  )
}

type Props = {
  icon: string
  title: string
  paragraph: string
}
