import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [showPopup, setShowPopup] = useState(false); // State for showing success popup

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "85c9b4b0-6e32-4ab7-8c11-58bdf81d9a96");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      event.target.reset();
      setShowPopup(true); // Show success popup
      setTimeout(() => setShowPopup(false), 3000); // Hide popup after 3 seconds
    } else {
      console.error("Error", data);
    }
  };

  const closePopup = () => {
    setShowPopup(false); // Hide popup manually
  };

  return (
    <div className="contact-container">
      <h1>Get Your Free Quote</h1>

      {showPopup && (
        <div className="popup">
          <p>🎉 Your request has been successfully submitted!</p>
          <button onClick={closePopup}>Close</button>
        </div>
      )}

      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="user-name">Name <span>*</span></label>
          <input type="text" id="user-name" name="user-name" required />
        </div>

        <div>
          <label htmlFor="email">Email <span>*</span></label>
          <input type="email" id="email" name="email" required />
        </div>

        <div>
          <label htmlFor="phone-number">Phone <span>*</span></label>
          <input type="tel" id="phone-number" name="phone-number" required />
        </div>

        <div>
          <label htmlFor="current-location">Current Location <span>*</span></label>
          <input type="text" id="current-location" name="current-location" required />
        </div>

        <div>
          <label htmlFor="destination-location">Destination Location <span>*</span></label>
          <input type="text" id="destination-location" name="destination-location" required />
        </div>

        <div>
          <label htmlFor="moving-date">Preferred Moving Date <span>*</span></label>
          <input type="date" name="moving-date" required />
        </div>

        <div>
          <label htmlFor="house-type">Type of House <span>*</span></label>
          <select name="house-type" id="house-type" required>
            <option value="">Select house type</option>
            <option value="Studio / 1 Bedroom">Studio / 1 Bedroom</option>
            <option value="2 - 3 Bedroom">2 - 3 Bedroom</option>
            <option value="4+ Bedroom">4+ Bedroom</option>
          </select>
        </div>

        <div>
          <label htmlFor="hear-about-us">How did you hear about us <span>*</span></label>
          <select name="hear-about-us" id="hear-about-us" required>
            <option value="">Select option</option>
            <option value="Friend / Family">Friend / Family</option>
            <option value="Referral Website">Referral Website</option>
            <option value="Social Media">Social Media</option>
            <option value="Google Search">Google Search</option>
            <option value="Others">Others</option>
          </select>
        </div>

        <button type="submit">Submit Request</button>
      </form>
    </div>
  );
};

export default Contact;
