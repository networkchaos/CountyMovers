import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <div className='hero'>
      <div className='hero-text'>
        <h1>Your Trusted Moving </h1>
        <h1>Partner</h1>
        <p>Professional,reliable, and stress-free moving services across the country</p>
        <button>
          Get a Free Quote
          <svg width="37" height="16" viewBox="0 0 37 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M36 8L1 8" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M29 15L36 8L29 0.999999" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

          </button>
      </div>
    </div>
  )
}

export default Hero
