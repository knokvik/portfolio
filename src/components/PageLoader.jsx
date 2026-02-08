import { useState, useEffect } from 'react'
import './PageLoader.css'

function PageLoader({ onComplete }) {
  const [progress, setProgress] = useState(0)
  const [slideUp, setSlideUp] = useState(false)

  useEffect(() => {
    let animationFrame
    let startTime = Date.now()

    // Track document ready state
    const checkReadyState = () => {
      const state = document.readyState
      if (state === 'loading') {
        return 30
      } else if (state === 'interactive') {
        return 60
      } else {
        return 90
      }
    }

    // Smooth progress animation
    const animateProgress = () => {
      const elapsed = Date.now() - startTime
      const targetProgress = checkReadyState()

      setProgress(prev => {
        const diff = targetProgress - prev
        const increment = diff * 0.1 // Smooth easing
        return Math.min(prev + increment, targetProgress)
      })

      if (document.readyState !== 'complete') {
        animationFrame = requestAnimationFrame(animateProgress)
      }
    }

    // Start animation
    animationFrame = requestAnimationFrame(animateProgress)

    // Listen for load complete
    const handleLoad = () => {
      // Animate to 100%
      const finalAnimation = () => {
        setProgress(prev => {
          if (prev < 100) {
            const increment = (100 - prev) * 0.2
            requestAnimationFrame(finalAnimation)
            return prev + increment
          }
          return 100
        })
      }
      finalAnimation()

      // Wait a bit then slide up
      setTimeout(() => {
        setSlideUp(true)
        setTimeout(() => {
          onComplete?.()
        }, 700)
      }, 500)
    }

    // If already loaded, complete immediately
    if (document.readyState === 'complete') {
      handleLoad()
    } else {
      window.addEventListener('load', handleLoad)
    }

    return () => {
      cancelAnimationFrame(animationFrame)
      window.removeEventListener('load', handleLoad)
    }
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

