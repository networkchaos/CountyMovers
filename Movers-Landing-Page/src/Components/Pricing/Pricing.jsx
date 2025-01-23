import React from 'react'
import './Pricing.css'
import { Link, Element } from 'react-scroll';

const Pricing = () => {
  return (
    <div className='our-pricing-container'>
        <h1>Our Pricing</h1>
      <button className="back-button">
        <Link to='hero' smooth={true}duration={800} offset={-150}>
        <svg width="37" height="16" viewBox="0 0 37 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 8L36 8" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M8 15L0.999999 8L8 1" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        Back 
        </Link>   
      </button>

      <div className="pricing-quote-container">
        <div className="pricing-quote">
            <p className="pricing-category">Studio/1 Bedroom</p>
            <p className="starting-price">From KSH 15,000</p>
            <p className="destination">Within Nairobi: KSH 15,000 - 25,000</p>
            <p className="destination">Nairobi to Mombasa: KSH 45,000 - 60,000</p>
            <p className="destination">Nairobi to Kisumu: KSH 40,000 - 55,000</p>
            <p>Professional Packing</p>
            <p>Loading & Unloading</p>

            <button>
              <Link to='contact-container' smooth={true}duration={800} offset={-150}>
                Get Quote
              </Link> 
            </button>
        </div>

        <div className="pricing-quote">
            <p className="pricing-category">2-3 Bedroom</p>
            <p className="starting-price">From KSH 25,000</p>
            <p className="destination">Within Nairobi: KSH 25,000 - 40,000</p>
            <p className="destination">Nairobi to Mombasa: KSH 65,000 - 85,000</p>
            <p className="destination">Nairobi to Kisumu: KSH 60,000 - 80,000</p>
            <p>Professional Packing</p>
            <p>Loading & Unloading</p>

            <button>
              <Link to='contact-container' smooth={true}duration={800} offset={-150}>
                Get Quote
              </Link> 
            </button>
        </div>

        <div className="pricing-quote">
            <p className="pricing-category">4+ Bedroom</p>
            <p className="starting-price">From KSH 40,000</p>
            <p className="destination">Within Nairobi: KSH 40,000 - 60,000</p>
            <p className="destination">Nairobi to Mombasa: KSH 90,000 - 120,000</p>
            <p className="destination">Nairobi to Kisumu: KSH 85,000 - 115,000</p>
            <p>Professional Packing</p>
            <p>Loading & Unloading</p>

            <button>
              <Link to='contact-container' smooth={true}duration={800} offset={-150}>
                Get Quote
              </Link> 
            </button>
        </div>
      </div>

      
    </div>
  )
}

export default Pricing
