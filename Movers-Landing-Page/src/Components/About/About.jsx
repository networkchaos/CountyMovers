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
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15958.010066142177!2d36.44476995000001!3d-0.720896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2ske!4v1737536506286!5m2!1sen!2ske"
            width="600"
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
