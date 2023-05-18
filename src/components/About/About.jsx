import React from 'react'
import { useContext } from 'react'

//Imported scss

import '../../styles/About/About.scss'
//Imported Hashlink

import { HashLink } from 'react-router-hash-link'
import { LanguageContext } from '../../context/LanguageContext'

//Import Language Library
const i18n = require('../../utils/i18n')

export const About = () => {
  const { language } = useContext(LanguageContext)
  return (
    <div className='about-wrapper' id='about'>
      {/* Main container */}

      <div className='about-container'>
        {/* Intro text container */}

        <div className='introduction-container'>
          <h1 className='about-title'>{i18n.text(language, i18n.MAP.about_title)}</h1>

          <p className='about-info'>{i18n.text(language, i18n.MAP.about_info)}</p>
        </div>

        <div className='about-text-container'>
          {/* Get to know me text */}

          <h3 className='about-text-title'>{i18n.text(language, i18n.MAP.about_text_title)}</h3>

          {/* About text block 1*/}
          {/* highlighted-text - represents the bold red text  */}

          <p className='about-text'>
            {i18n.text(language, i18n.MAP.about_text_start_1)}
            <span className='highlighted-text'>
              {i18n.text(language, i18n.MAP.about_dev_highlight)}
            </span>
            {i18n.text(language, i18n.MAP.about_after_dev)}
            <span className='highlighted-text'>
              {i18n.text(language, i18n.MAP.about_text_highlight_projects)}
            </span>{' '}
            {i18n.text(language, i18n.MAP.about_text_highlight_projects_after)}
          </p>

          {/* About text block 2*/}

          <p className='about-text'>
            {i18n.text(language, i18n.MAP.about_text_start_2)}
            <span className='highlighted-text'>
              {i18n.text(language, i18n.MAP.about_web_development)}
            </span>{' '}
            {i18n.text(language, i18n.MAP.about_text_end_2)}
            {/* Linkedin link */}
            <a
              href={'https://www.linkedin.com/in/norbert-kov%C3%A1cs-6703ba26b/'}
              target='_blank'
              rel='noreferrer'
            >
              Linkedin
            </a>{' '}
            {i18n.text(language, i18n.MAP.about_text_after_linkedin)}
          </p>

          {/* About text block 3*/}

          <p className='about-text'>
            {i18n.text(language, i18n.MAP.about_text_start_3)}
            <span className='highlighted-text'>{i18n.text(language, i18n.MAP.about_job)} </span>
            {i18n.text(language, i18n.MAP.about_after_job)}{' '}
            <span className='highlighted-text'>
              {i18n.text(language, i18n.MAP.about_text_contact_me)}
            </span>
          </p>
        </div>

        {/* Contact button */}

        <div className='btn-container'>
          <HashLink smooth to='#contact'>
            <button className='contact-btn'>
              <p>{i18n.text(language, i18n.MAP.about_btn)}</p>
            </button>
          </HashLink>
        </div>
      </div>
    </div>
  )
}
