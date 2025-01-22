import React, { useEffect, useState } from 'react'
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
      <h1>CountyMovers</h1>
      <ul>
        <li>Services</li>
        <li>About</li>
        <li>Pricing</li>
        <li>Contact</li>
      </ul>
    </nav>
  )
}

export default Navbar
