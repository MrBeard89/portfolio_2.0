import React, { useState } from 'react'
import '../../styles/Navbar/Navbar.scss'
import Logo from '../../assets/logo/beard.png'
import { HashLink } from 'react-router-hash-link'
import { GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineClose } from 'react-icons/ai'
import { IoMdArrowDropleft, IoMdArrowDropright } from 'react-icons/io'

export const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)

  //Automatic hide when scrolling down

  var prevScrollpos = window.pageYOffset
  window.onscroll = function () {
    var currentScrollPos = window.pageYOffset
    if (prevScrollpos > currentScrollPos) {
      document.querySelector('.navbar-wrapper').style.top = '0'
    } else {
      document.querySelector('.navbar-wrapper').style.top = '-70px'
    }
    prevScrollpos = currentScrollPos
  }

  return (
    <div className='navbar-wrapper '>
      <div className='navbar-container'>
        <div className='logo-container'>
          <HashLink smooth to='/'>
            <img className='logo' src={Logo} alt='website logo' />
          </HashLink>
        </div>

        <span className='mobile-icon-container' onClick={() => setNavbarOpen((prev) => !prev)}>
          {navbarOpen ? (
            <AiOutlineClose className='close' />
          ) : (
            <GiHamburgerMenu className='hamburger' />
          )}
        </span>

        <div className={`${navbarOpen ? 'navbar-mobile' : 'navlinks-container'}`}>
          <IoMdArrowDropleft className='decor-arrow' />

          <ul className='navlinks' onClick={() => setNavbarOpen(false)}>
            <HashLink smooth to='/'>
              <li className='navlink'>About</li>
            </HashLink>
            <HashLink smooth to='/'>
              <li className='navlink'>Skills</li>
            </HashLink>
            <HashLink smooth to='/'>
              <li className='navlink'>Projects</li>
            </HashLink>
            <HashLink smooth to='/'>
              <li className='navlink'>Contact</li>
            </HashLink>
            <HashLink smooth to='/'>
              <li className='navlink'>Hobby</li>
            </HashLink>
          </ul>
        </div>
      </div>
    </div>
  )
}
