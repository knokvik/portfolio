import { NavLink } from 'react-router-dom'
import { useState } from 'react'

function DockNavigation() {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  const navItems = [
    { to: '/home', label: 'Home' },
    { to: '/reading', label: 'Reading' },
    { to: '/writing', label: 'Projects' },
    { to: '/deep-dives', label: 'Deep Diving' },
  ]

  const getScale = (index) => {
    if (hoveredIndex === null) return 1
    const distance = Math.abs(index - hoveredIndex)
    if (distance === 0) return 1.4
    if (distance === 1) return 1.2
    if (distance === 2) return 1.1
    return 1
  }

  return (
    <nav className="navigation">
      <div className="section-label">Navigation</div>
      <div className="dock-container">
        {navItems.map((item, index) => (
          <NavLink
            key={item.to}
            to={item.to}
            className="dock-link"
            style={{
              transform: `scale(${getScale(index)})`,
            }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {item.label}
          </NavLink>
        ))}
      </div>
    </nav>
  )
}

export default DockNavigation
