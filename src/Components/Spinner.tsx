import '../styles/Spinner.scss'

export default function Spinner() {
  return (
    <div className="spinner-container">
      <div className="loading-spinner"></div>
      <p className="spinner-text">API may take a while to respond sometimes</p>
    </div>
  )
}
