import { useState, useEffect } from 'react'
import './PageLoader.css'

function PageLoader({ onComplete }) {
  const [progress, setProgress] = useState(0)
  const [slideUp, setSlideUp] = useState(false)

  useEffect(() => {
    const duration = 2000
    const start = Date.now()

    const tick = () => {
      const elapsed = Date.now() - start
      const value = Math.min((elapsed / duration) * 100, 100)

      setProgress(value)

      if (elapsed < duration) {
        requestAnimationFrame(tick)
      } else {
        // WAIT → then slide
        setTimeout(() => {
          setSlideUp(true)

          // WAIT FOR SLIDE ANIMATION TO FINISH
          setTimeout(() => {
            onComplete?.()
          }, 700)
        }, 200) 
      }
    }

    requestAnimationFrame(tick)
  }, [onComplete])

  return (
    <div className={`page-loader ${slideUp ? 'slide-up' : ''}`}>
      <div className="loader-content">
        <div className="percentage">{Math.floor(progress)}%</div>
        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  )
}

export default PageLoader
