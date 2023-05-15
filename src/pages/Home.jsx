import '../styles/Home/Home.scss'
import { About } from '../components/About/About'
import { Skills } from '../components/Skills/Skills'

import { SlArrowDown } from 'react-icons/sl'

export const Home = () => {
  return (
    <div className='home-wrapper'>
      <section className='home-hero' id='hero'>
        <div className='hero-wrapper'>
          <h1 className='hero-title'>
            <span className='smaller-text'>Hey, I'm</span> Norbert Kovacs
          </h1>
          <p className='hero-text'>
            A <span className='dev-highlight'>Frontend Developer</span> building websites and
            applications ,that leads to a good user experience
          </p>
          <button className='hero-btn'>
            <p>Projects</p>
          </button>
          <SlArrowDown className='arrow-down' />
        </div>
      </section>

      <About />
      <Skills />
    </div>
  )
}
