import React, { useState } from 'react'
import '../../styles/Navbar/Navbar.scss'
import Logo from '../../assets/logo/beard.png'
import { HashLink } from 'react-router-hash-link'
import { GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineClose } from 'react-icons/ai'
import { IoMdArrowDropleft, IoMdArrowDropright } from 'react-icons/io'

export const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)
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
