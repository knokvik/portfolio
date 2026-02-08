import { useState } from 'react'
import '../App.css'

function Writing() {
  const [loadedImages, setLoadedImages] = useState({})

  const handleImageLoad = (index) => {
    setLoadedImages(prev => ({ ...prev, [index]: true }))
  }

  const projects = [
    {
      title: "Inveto",
      url: "https://github.com/knokvik/Inveto",
      image: "https://opengraph.githubassets.com/1/knokvik/Inveto"
    },
    {
      title: "TypeRush",
      url: "https://github.com/knokvik/TypeRush",
      image: "https://opengraph.githubassets.com/1/knokvik/TypeRush"
    },
    {
      title: "PetTrove",
      url: "https://github.com/knokvik/PetTrove",
      image: "https://opengraph.githubassets.com/1/knokvik/PetTrove"
    },
    {
      title: "Dragonball",
      url: "https://github.com/knokvik/dragonball",
      image: "https://opengraph.githubassets.com/1/knokvik/dragonball"
    },
    {
      title: "Echo",
      url: "https://github.com/knokvik/echo",
      image: "https://opengraph.githubassets.com/1/knokvik/echo"
    },
    {
      title: "Monster",
      url: "https://github.com/knokvik/monster",
      image: "https://opengraph.githubassets.com/1/knokvik/monster"
    }
  ]

  return (
    <main className="main-content">
      <div className="content-wrapper">
        <article>
          <h1>Projects</h1>
          <div className="projects-list">
            {projects.map((project, index) => (
              <div className="project-item" key={index}>
                <h2><a href={project.url} target="_blank" rel="noopener noreferrer">{project.title}</a></h2>
                <div className='project-card'>
                  {!loadedImages[index] && (
                    <div className="project-image-skeleton"></div>
                  )}
                  <img
                    src={project.image}
                    alt={`${project.title} preview`}
                    className={loadedImages[index] ? 'loaded' : 'loading'}
                    onLoad={() => handleImageLoad(index)}
                    style={{ display: loadedImages[index] ? 'block' : 'none' }}
                  />
                </div>
              </div>
            ))}
          </div>
        </article>
      </div>
    </main>
  )
}

export default Writing