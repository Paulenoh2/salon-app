import React from 'react';

const ServicesPage = ({ image3, text }) => {
  return (
    <div className="container">
      
      <div className="text-container">
        <p>{text}</p>
      </div>
      <div className="image-container">
        <img src={image3} alt="Image" />

       
      </div>
    </div>
    

  );
};

export default ServicesPage;
