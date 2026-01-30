import { useState } from 'react'

function SocialDock() {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  const socialItems = [
    { href: 'https://x.com/NeerajNaphade', label: 'Twitter' },
    { href: 'https://www.linkedin.com/in/neeraj-naphade/', label: 'LinkedIn' },
    { href: 'https://github.com/knokvik', label: 'GitHub' },
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
    <div className="social-links">
      <div className="section-label">Connect</div>

      <div className="dock-container">
        {socialItems.map((item, index) => (
          <a
            key={item.label}
            href={item.href}
            target="_blank"
            rel="noreferrer"
            className="dock-link"
            style={{
              transform: `scale(${getScale(index)})`,
            }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {item.label}
          </a>
        ))}
      </div>
    </div>
  )
}

export default SocialDock
