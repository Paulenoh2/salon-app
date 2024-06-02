import React from 'react';

const ContactPage = ({ image1, text }) => {
  return (
    <div className="container">
      <div className="text-container">
        <p>{text}</p>
      </div>
      <div className="image-container">
        <img src={image1} alt="Image" />
      </div>
    </div>
  );
};

export default ContactPage;
