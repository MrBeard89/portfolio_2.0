import '../../styles/Projects/Projects.scss'

import { Link } from 'react-router-dom'
import data from '../../utils/data.json'
export const Projects = () => {
  return (
    <div className='projects-wrapper' id='projects'>
      <div className='projects-container'>
        <h1 className='projects-title'>Projects</h1>

        {data.map((project) => {
          return (
            <div className='project' key={project.id}>
              <div className='project-img-container'>
                <img
                  className='vector'
                  src={require(`../../assets/images/vectors/${project.imglinkvector}`)}
                  alt='Vector img of a laptop'
                />
                <img
                  className='card-img'
                  src={require(`../../assets/images/card-images/${project.imglink}`)}
                  alt=''
                />
              </div>
              <div className='project-info-wrapper'>
                <div className='info-container'>
                  <h3 className='info-title'>{project.title}</h3>
                  <p className='info-text'>{project.description}</p>
                  <p className='info-note'>{project.note}</p>
                </div>

                <div className='btn-container'>
                  {project.tech.map((tech) => {
                    return <button>{tech}</button>
                  })}
                </div>

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
