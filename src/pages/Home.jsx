import '../styles/Home/Home.scss'
import { useContext } from 'react'

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

import { LanguageContext } from '../context/LanguageContext'

//Import Language Library
const i18n = require('../utils/i18n')

export const Home = () => {
  const { language } = useContext(LanguageContext)

  return (
    <div className='home-wrapper'>
      {/* Hero Section */}
      <section className='home-hero' id='hero'>
        <div className='hero-wrapper'>
          {/* Title */}
          <h1 className='hero-title'>
            <span className='smaller-text'>{i18n.text(language, i18n.MAP.hero_title)}</span>{' '}
            {i18n.text(language, i18n.MAP.hero_name)}{' '}
            <span className='smaller-text'>{i18n.text(language, i18n.MAP.hero_name_end)}</span>
          </h1>

          <div className='about-img-container'>
            <div className='img-border'></div>
            <img className='img-me' src={Me} alt="It's me" />
          </div>

          {/* Text */}
          <p className='hero-text'>
            <span className='hero-text-start'>{i18n.text(language, i18n.MAP.hero_text_start)}</span>{' '}
            <span className='dev-highlight'>
              {i18n.text(language, i18n.MAP.hero_dev_highlight)}
            </span>{' '}
            {i18n.text(language, i18n.MAP.hero_text_end)}
          </p>

          {/* Hero - Projects button */}
          <HashLink smooth to='#projects'>
            <button className='hero-btn'>
              <p>{i18n.text(language, i18n.MAP.hero_btn)}</p>
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
