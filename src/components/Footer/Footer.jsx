import '../../styles/Footer/Footer.scss'
import { useContext } from 'react'
import { LanguageContext } from '../../context/LanguageContext'
//Social icons

import { BsFacebook, BsGithub, BsLinkedin, BsTwitter } from 'react-icons/bs'

//imported Links

import { HashLink } from 'react-router-hash-link'
import { Link } from 'react-router-dom'

//Import Language Library
const i18n = require('../../utils/i18n')

export const Footer = () => {
  const { language } = useContext(LanguageContext)

  return (
    <div className='footer-wrapper'>
      {/* Main conatiner  */}

      <div className='footer-container'>
        {/* Social container */}

        <div className='social'>
          {/* Title */}

          <h2 className='social-title'>{i18n.text(language, i18n.MAP.footer_title)}</h2>

          {/* Social icons container */}

          <div className='social-icons-container'>
            {/* Facebook */}
            <Link to='https://www.facebook.com/norbert.kovacs.12177/' target='_blank'>
              <BsFacebook className='social-icon' />
            </Link>
            {/* Github */}
            <Link to='https://github.com/MrBeard89' target='_blank'>
              <BsGithub className='social-icon' />
            </Link>
            {/* Linkedin */}
            <Link to='https://www.linkedin.com/in/norbert-kov%C3%A1cs-6703ba26b/' target='_blank'>
              <BsLinkedin className='social-icon' />
            </Link>
            {/* Twitter */}
            <Link to='https://twitter.com/Mr_Beard8' target='_blank'>
              <BsTwitter className='social-icon' />
            </Link>
          </div>
        </div>

        {/* Outro text container */}
        <div className='footer-outro'>
          {/* text */}
          <p className='footer-outro-text'>{i18n.text(language, i18n.MAP.footer_info)}</p>
        </div>

        {/* Copyright container */}
        <div className='copyright-container'>
          {/* Text */}
          <p className='copy'>
            &copy; {i18n.text(language, i18n.MAP.footer_copyright)}{' '}
            <span className='footer-copy-link'>
              <HashLink smooth to='#hero'>
                {i18n.text(language, i18n.MAP.footer_name)}
              </HashLink>
            </span>
          </p>
        </div>
      </div>
    </div>
  )
}
