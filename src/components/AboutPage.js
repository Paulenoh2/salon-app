import React from 'react';

const ImageTextLayout = ({ image2, text }) => {
  return (
    <div className="container">
      <div className="text-container">
        <p>{text}</p>
      </div>
      <div className="image-container">
        <img src={image2} alt="Image" />
      </div>
    </div>
  );
};

export default ImageTextLayout;
