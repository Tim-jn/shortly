import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import './App.css';

function App() {
  return (
    <Router>
      <Route path="/" element={<Home />} />
    </Router>
  );
}

export default App;
