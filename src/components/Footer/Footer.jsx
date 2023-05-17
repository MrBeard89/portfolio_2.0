import '../../styles/Footer/Footer.scss'

import { BsFacebook, BsGithub, BsLinkedin, BsTwitter } from 'react-icons/bs'

import { HashLink } from 'react-router-hash-link'
import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    <div className='footer-wrapper'>
      <div className='footer-container'>
        <div className='social'>
          <h2 className='social-title'>Social</h2>
          <div className='social-icons-container'>
            <Link to='https://www.facebook.com/norbert.kovacs.12177/' target='_blank'>
              <BsFacebook className='social-icon' />
            </Link>

            <Link to='https://github.com/MrBeard89' target='_blank'>
              <BsGithub className='social-icon' />
            </Link>

            <Link to='https://www.linkedin.com/in/norbert-kov%C3%A1cs-6703ba26b/' target='_blank'>
              <BsLinkedin className='social-icon' />
            </Link>

            <Link to='https://twitter.com/Mr_Beard8' target='_blank'>
              <BsTwitter className='social-icon' />
            </Link>
          </div>
        </div>

        <div className='footer-outro'>
          <p className='footer-outro-text'>
            If my code catched your interest, feel free to contact me on social platforms or via
            email
          </p>
        </div>

        <div className='copyright-container'>
          <p className='copy'>
            Copyright 2023.Made by{' '}
            <span className='footer-copy-link'>
              <HashLink smooth to='#hero'>
                Norbert Kovacs
              </HashLink>
            </span>
          </p>
        </div>
      </div>
    </div>
  )
}
