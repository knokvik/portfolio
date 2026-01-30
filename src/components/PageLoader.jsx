import { useState, useEffect } from 'react'
import './PageLoader.css'

function PageLoader({ onComplete }) {
  const [progress, setProgress] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const duration = 2000
    const startTime = Date.now()
    
    const animate = () => {
      const elapsed = Date.now() - startTime
      const rawProgress = (elapsed / duration) * 100
      
      const easedProgress = rawProgress < 50
        ? 2 * rawProgress * rawProgress / 100
        : 100 - 2 * (100 - rawProgress) * (100 - rawProgress) / 100
      
      setProgress(easedProgress)
      
      if (elapsed < duration) {
        requestAnimationFrame(animate)
      } else {
        setProgress(100)
        setTimeout(() => {
          setIsVisible(false)
          setTimeout(() => onComplete?.(), 500)
        }, 300)
      }
    }
    
    requestAnimationFrame(animate)
  }, [onComplete])

  return (
    <div className={`page-loader ${!isVisible ? 'hidden' : ''}`}>
      <div className="loader-content">
        <div className="percentage">{Math.min(Math.floor(progress), 100)}%</div>
        <div className="progress-bar">
          <div 
            className="progress-fill" 
            style={{ width: `${Math.min(progress, 100)}%` }}
          />
        </div>
      </div>
    </div>
  )
}

export default PageLoader
