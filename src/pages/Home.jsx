import '../styles/Home/Home.scss'

//Import components

import { About } from '../components/About/About'
import { Skills } from '../components/Skills/Skills'
import { Projects } from '../components/Projects/Projects'
import { Contact } from '../components/Contact/Contact'
import { Footer } from '../components/Footer/Footer'

//Import Hashlink + arrow icon

import { SlArrowDown } from 'react-icons/sl'
import { HashLink } from 'react-router-hash-link'

//Import me img
import Me from '../../src/assets/images/Me/en.jpg'

export const Home = () => {
  return (
    <div className='home-wrapper'>
      {/* Hero Section */}
      <section className='home-hero' id='hero'>
        <div className='hero-wrapper'>
          {/* Title */}
          <h1 className='hero-title'>
            <span className='smaller-text'>Hey, I'm</span> Norbert Kovacs
          </h1>

          <div className='about-img-container'>
            <div className='img-border'></div>
            <img className='img-me' src={Me} alt="It's me" />
          </div>

          {/* Text */}
          <p className='hero-text'>
            A <span className='dev-highlight'>Frontend Developer</span> building websites and
            applications ,that leads to a good user experience
          </p>

          {/* Hero - Projects button */}
          <HashLink smooth to='#projects'>
            <button className='hero-btn'>
              <p>Projects</p>
            </button>
          </HashLink>

          {/* Decor arrow down */}
          <SlArrowDown className='arrow-down' />
        </div>
      </section>

      {/* Home page - Components */}
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}
