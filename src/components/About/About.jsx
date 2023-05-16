import React from 'react'
import '../../styles/About/About.scss'
import { HashLink } from 'react-router-hash-link'

export const About = () => {
  return (
    <div className='about-wrapper' id='about'>
      <div className='about-container'>
        <div className='introduction-container'>
          <h1 className='about-title'>About me</h1>

          <p className='about-info'>
            Here you will find more information about me, what I do, and my current skills mostly in
            terms of programming and technology
          </p>
        </div>

        <div className='about-text-container'>
          <h3 className='about-text-title'>Get to know me!</h3>

          <p className='about-text'>
            I'm a <span className='highlighted-text'>Frontend Developer</span> building the
            Front-end of Websites and Web Applications that leads to the success of the overall
            product. Check out some of my work in the
            <span className='highlighted-text'> Projects</span> section.
          </p>
          <p className='about-text'>
            I also like sharing content related to the stuff that I have learned over 1 year in
            <span className='highlighted-text'> Web Development</span> at Webler Studios so it can
            help other people of the Dev Community. Feel free to Connect or Follow me on my{' '}
            <a
              href={'https://www.linkedin.com/in/norbert-kov%C3%A1cs-6703ba26b/'}
              target='_blank'
              rel='noreferrer'
            >
              Linkedin
            </a>{' '}
            where I post useful content related to Web Development and Programming
          </p>
          <p className='about-text'>
            I'm open to <span className='highlighted-text'>Job</span> opportunities where I can
            contribute, learn and grow. If you have a good opportunity that matches my skills and
            experience then don't hesitate to <span className='highlighted-text'>contact me</span>.
          </p>
        </div>

        <div className='btn-container'>
          <HashLink smooth to='#contact'>
            <button className='contact-btn'>
              <p>Contact</p>
            </button>
          </HashLink>
        </div>
      </div>
    </div>
  )
}
