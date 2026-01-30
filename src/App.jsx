import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Home from './components/Home'
import Reading from './components/Reading'
import Writing from './components/Writing'
import DeepDiving from './components/DeepDiving'
import PageLoader from './components/PageLoader'
import DockNavigation from './components/DockNavigation'
import './App.css'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <Router>
      {isLoading && <PageLoader onComplete={() => setIsLoading(false)} />}
      <div className={`container ${isLoading ? 'loading' : ''}`}>
        <aside className="sidebar">
          <DockNavigation />
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
