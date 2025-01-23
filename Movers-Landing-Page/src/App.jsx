import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Services from './Components/Services/Services'
import About from './Components/About/About'
import Pricing from './Components/Pricing/Pricing'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'


const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <Services></Services>
      <About></About>
      <Pricing></Pricing>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  )
}

export default App
