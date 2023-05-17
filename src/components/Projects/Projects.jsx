import '../../styles/Projects/Projects.scss'

import { Link } from 'react-router-dom'
import data from '../../utils/data.json'
export const Projects = () => {
  return (
    <div className='projects-wrapper' id='projects'>
      <div className='projects-container'>
        {/* Title */}

        <h1 className='projects-title'>Projects</h1>

        {/* Mapping throw json file for writing less code */}

        {data.map((project) => {
          return (
            <div className='project' key={project.id}>
              {/* Image container */}

              <div className='project-img-container'>
                {/* Vector laptop img */}

                <img
                  className='vector'
                  src={require(`../../assets/images/vectors/${project.imglinkvector}`)}
                  alt='Vector img of a laptop'
                />

                {/* Project img */}

                <img
                  className='card-img'
                  src={require(`../../assets/images/card-images/${project.imglink}`)}
                  alt='Project image'
                />
              </div>

              {/* Main wrapper for information about each project */}

              <div className='project-info-wrapper'>
                {/* Info container - Title, Text ,Note */}

                <div className='info-container'>
                  <h3 className='info-title'>{project.title}</h3>
                  <p className='info-text'>{project.description}</p>
                  <p className='info-note'>{project.note}</p>
                </div>

                {/* Button container for tech used for projects */}

                <div className='btn-container'>
                  {project.tech.map((tech, index) => {
                    return <button key={index}>{tech}</button>
                  })}
                </div>

                {/* Links container - Code and Live buttons */}

                <div className='links-container'>
                  <Link className='project-link' to={project.projectlink} target='_blank'>
                    <button>
                      <p>Code</p>
                    </button>
                  </Link>

                  <Link className='live-link' to={project.livelink} target='_blank'>
                    <button>
                      <p>Live</p>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
