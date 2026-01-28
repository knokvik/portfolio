import { HashRouter as Router, Routes, Route, NavLink } from 'react-router-dom'
import Home from './components/Home'
import Reading from './components/Reading'
import Writing from './components/Writing'
import DeepDiving from './components/DeepDiving'
import './App.css'

function App() {
  return (
    <Router>
      <div className="container">
        <aside className="sidebar">
          <nav className="navigation">
            <div className="section-label">Navigation</div>
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/reading">Reading</NavLink>
            <NavLink to="/writing">Projects</NavLink>
            <NavLink to="/deep-dives">Deep Diving</NavLink>
          </nav>
          <div className="social-links">
            <div className="section-label">Connect</div>
            <a href="https://x.com/NeerajNaphade">Twitter</a>
            <a href="https://www.linkedin.com/in/neeraj-naphade/">LinkedIn</a>
            <a href="https://github.com/knokvik">GitHub</a>
          </div>
        </aside>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/reading" element={<Reading />} />
          <Route path="/writing" element={<Writing />} />
          <Route path="/deep-dives" element={<DeepDiving />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
