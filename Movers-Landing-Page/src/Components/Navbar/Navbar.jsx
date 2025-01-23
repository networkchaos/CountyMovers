import React, { useEffect, useState } from 'react'
import menu_icon from '../../assets/menu-icon.png'
import { Link, Element } from 'react-scroll';
import './Navbar.css' 

const Navbar = () => {

  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false)
    })
  },[])

  const [mobileMenu, setMobileMenu] = useState(false)
  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true)
  }

  return (
    <nav className={`nav-container ${sticky ? "dark-nav" : ""}`}>
      <h1><Link to='hero' smooth={true}duration={800}>CountyMovers</Link></h1>
      <ul className={mobileMenu?'':'hide-mobile-menu'}>
        <li><Link to='our-services' smooth={true}duration={800} offset={-150}>Services</Link></li>
        <li><Link to='about-container' smooth={true}duration={800} offset={-150}>About</Link></li>
        <li><Link to='our-pricing-container' smooth={true}duration={800} offset={-150}>Pricing</Link></li>
        <li><Link to='contact-container' smooth={true}duration={800} offset={-150}>Contact</Link></li>
      </ul>
      <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu} />
    </nav>
  )
}

export default Navbar
