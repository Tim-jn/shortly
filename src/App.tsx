import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Error from './Pages/Error'
import Home from './Pages/Home'
import './styles/App.scss'

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<Home />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  )
}

export default App
