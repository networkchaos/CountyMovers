import React from 'react'
import './Services.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRoute, faBoxesPacking,faTruckFast } from '@fortawesome/free-solid-svg-icons';

const Services = () => {

  const iconStyle = {
    color: '#FE6B37',
    fontSize: '50px',
    margin: '30px auto',
  };

  return (
    <div className='our-services'>
      <h1>Our Services</h1>
      <div className='services-flex-container'>
        <div className='packing-services flex-box-service'>
          <FontAwesomeIcon icon={faBoxesPacking} style={iconStyle} />
          <h3>Packing Services</h3>
          <p>Professional packing of your belongings with high-quality materials.</p>
        </div>

        <div className='packing-services flex-box-service'>
          <FontAwesomeIcon icon={faTruckFast} style={iconStyle} />
          <h3>Local Moving</h3>
          <p>Efficient and careful transportation within your city and county.</p>
        </div>

        <div className='packing-services flex-box-service'>
          <FontAwesomeIcon icon={faRoute} style={iconStyle} />
          <h3>Long Distance Moving</h3>
          <p>Safe and timely interstate moving solutions.</p>
        </div>


      
      </div>
    </div>
  )
}

export default Services
