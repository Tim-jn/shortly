import '../styles/ShortenLink.scss'

export default function ShortenLink() {
  return (
    <div className="shorten-link-box">
      <input
        className="shorten-link-input"
        type="text"
        placeholder="Shorten a link here..."
      />
      <button className="shorten-link-button">Shorten it !</button>
    </div>
  )
}
