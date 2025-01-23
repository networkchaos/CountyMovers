import React, { useEffect, useState } from 'react'
import { Link, Element } from 'react-scroll';
import './Navbar.css' 

const Navbar = () => {

  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false)
    })
  },[])

  

  return (
    <nav className={`nav-container ${sticky ? "dark-nav" : ""}`}>
      <h1><Link to='hero' smooth={true}duration={800}>CountyMovers</Link></h1>
      <ul>
        <li><Link to='our-services' smooth={true}duration={800}>Services</Link></li>
        <li><Link to='about-container' smooth={true}duration={800}>About</Link></li>
        <li><Link to='our-pricing-container' smooth={true}duration={800}>Pricing</Link></li>
        <li><Link to='contact-container' smooth={true}duration={800}>Contact</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar
