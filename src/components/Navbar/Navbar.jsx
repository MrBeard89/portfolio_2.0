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
        <HashLink smooth to='#hero'>
          <div className='logo-container'>
            <img className='logo' src={Logo} alt='website logo' />
            <h1 className='logo-name'>Norbert Kovacs</h1>
          </div>
        </HashLink>

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
            <HashLink smooth to='#about'>
              <span className='link-container'>
                <li className='navlink'>
                  <h3>About</h3>
                  <IoMdArrowDropright className='hover-arrow' />
                </li>
              </span>
            </HashLink>

            <HashLink smooth to='#skills'>
              <span className='link-container'>
                <li className='navlink'>
                  <h3>Skills</h3>
                  <IoMdArrowDropright className='hover-arrow' />
                </li>
              </span>
            </HashLink>

            <HashLink smooth to='#projects'>
              <span className='link-container'>
                <li className='navlink'>
                  <h3>Projects</h3>
                  <IoMdArrowDropright className='hover-arrow' />
                </li>
              </span>
            </HashLink>

            <HashLink smooth to='/'>
              <span className='link-container'>
                <li className='navlink'>
                  <h3>Contact</h3>
                  <IoMdArrowDropright className='hover-arrow' />
                </li>
              </span>
            </HashLink>

            <HashLink smooth to='/'>
              <span className='link-container'>
                <li className='navlink'>
                  <h3>Hobby</h3>
                  <IoMdArrowDropright className='hover-arrow' />
                </li>
              </span>
            </HashLink>
          </ul>
        </div>
      </div>
    </div>
  )
}
