import Header from '../Components/Header'
import '../styles/Error.scss'

export default function Error() {
  return (
    <main className="error">
      <Header />
      <div className="error-content">This page does not exist.</div>
    </main>
  )
}
