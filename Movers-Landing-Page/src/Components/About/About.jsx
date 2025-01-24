import React from 'react'
import './About.css'

const About = () => {
  return (
    <div className='about-container'>
      <div className='about-county-movers'>
        <h1>About CountyMovers</h1>
        <p>With years of experience in the moving industry, we understand that relocating can be stressful. That's why we offer comprehensive moving solutions tailored to your needs. Our team of trained professionals ensures your belongings are handled with care and delivered safely to your new destination.</p>
        <p>Visit us at our office in Kayole, Naivasha, Kenya.</p>
      </div>
      <div className="why-us-location">
        <div className="why-choose-us">
            <h2>Why Choose Us?</h2>
            
            <ul>
                <li>Experienced and professional team</li>
                <li>Fully equiped modern trucks</li>
                <li>Competitive pricing</li>
                <li>Comprehensive insurance coverage</li>
                <li>24/7 customer support</li>
            </ul>
        </div>
        <div className="our-location">
            
        <iframe
            src=""
            height="450"
            style={{ border: '0',borderRadius: "10px"}}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  )
}

export default About
